import Swal from "sweetalert2";

export async function makeConfirmationAlert(
  title = "Confirmar cadastro?",
  confirmButtonText = "Sim, me cadastre"
) {
  return Swal.fire({
    title,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText,
    icon: "question",
  });
}

export async function makeConfirmationAlertWithText(
  title = "Confirmar cadastro?",
  text = "",
  confirmButtonText = "Sim, me cadastre"
) {
  return Swal.fire({
    title,
    text,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText,
    icon: "question",
  });
}

// .then((result) => {
//   if (result.value) {

//   }
// });

export function showError(text = "A requisição falhou") {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text,
    timer: 5000,
  });
}

export function successfulDeletion() {
  return Swal.fire({
    icon: "success",
    title: "Sucesso!",
    text: "O item foi deletado",
    timer: 3000,
  });
}

export async function makeLoadingWhileRequesting(
  title = "Realizando cadastro"
) {
  let timerInterval;
  return Swal.fire({
    icon: "info",
    title,
    timerProgressBar: true,
    onBeforeOpen: () => {
      Swal.showLoading();
    },
    onClose: () => {
      clearInterval(timerInterval);
    },
  });
}

export async function dispose() {
  Swal.close();
}

export async function confirmAndRequest() {
  try {
    const result = await makeConfirmationAlert();
    if (result.value) {
      return makeLoadingWhileRequesting();
    }
  } catch (error) {
    console.error(error);
  }
  return null;
}
