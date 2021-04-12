import Swal from "sweetalert2";

/**
 *
 * @param {String} title
 */
export async function makeExclusionConfirmationAlert(title, text = "") {
  return Swal.fire({
    title,
    text,
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "OK",
  });
}

/**
 *
 * @param {String} title
 */
export async function makeExclusionConfirmationAlertHTML(title, text = "") {
  return Swal.fire({
    title,
    html: text,
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Sim",
  });
}
