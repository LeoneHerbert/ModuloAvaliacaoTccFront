import Swal from "sweetalert2";

export function pageDoesNotExist() {
  return Swal.fire({
    position: "top-end",
    icon: "error",
    title: "Esta página ainda não existe :(",
    showConfirmButton: false,
    timer: 1500,
  });
}
