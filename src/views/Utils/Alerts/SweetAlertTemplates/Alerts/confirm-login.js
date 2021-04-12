import Swal from "sweetalert2";

export async function makeConfirmationAlertLogin() {
  return Swal.fire({
    title: "Confirmar login?",
    showCancelButton: true,
    icon: "question",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Sim",
  });
}

export async function makeLoadingWhileRequesting() {
  let timerInterval;
  return Swal.fire({
    title: "Realizando login :)",
    text: "Espere",
    icon: "info",
    timerProgressBar: true,
    onBeforeOpen: () => {
      Swal.showLoading();
    },
    onClose: () => {
      clearInterval(timerInterval);
    },
  });
}
