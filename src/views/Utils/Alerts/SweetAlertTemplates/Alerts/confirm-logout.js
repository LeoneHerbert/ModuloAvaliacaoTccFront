import Swal from "sweetalert2";

export async function makeConfirmationAlertLogout() {
  const result = await Swal.fire({
    title: "Confirmação",
    showCancelButton: true,
    icon: "question",
    text: "Deseja realmente sair?",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Não",
    confirmButtonText: "Sim",
  });

  return !!result.value;
}
