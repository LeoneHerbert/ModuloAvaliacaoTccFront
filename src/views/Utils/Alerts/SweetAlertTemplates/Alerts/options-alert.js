import Swal from "sweetalert2";

export async function optionsAlert() {
  const result = await Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: `Concluir`,
    denyButtonText: `Desativar`,
  });
  return result;
}
