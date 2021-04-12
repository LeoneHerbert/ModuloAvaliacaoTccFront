import Swal from "sweetalert2";

/**
 *
 * @param {Error} error
 */
export function elementNotFound(text = "", title = "") {
  return Swal.fire({
    position: "top-end",
    icon: "error",
    title,
    text,
    showConfirmButton: false,
    timer: 1500,
  });
}
