import Swal from "sweetalert2";

/**
 *
 * @param {Error} error
 */
export function launchErrorAlert(error) {
  return Swal.fire({
    position: "top-end",
    icon: "error",
    title: "Um erro inesperado ocorreu",
    text: `Erro 500: ${error.message}`,
    showConfirmButton: false,
    timer: 1500,
  });
}
