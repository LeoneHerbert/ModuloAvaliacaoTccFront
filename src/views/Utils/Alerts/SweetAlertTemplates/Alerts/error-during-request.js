import Swal from "sweetalert2";

/**
 *
 * @param {Error} error
 */
export function errorDuringRequest(error) {
  return Swal.fire({
    icon: "error",
    title: "Um erro ocorreu",
    html: `${error.message}`,
    showConfirmButton: false,
    timer: 3500,
  });
}
