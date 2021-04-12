import Swal from "sweetalert2";

export function showError(text = "A requisição falhou", title = "Oops...") {
  return Swal.fire({
    icon: "error",
    title,
    text,
    timer: 5000,
  });
}
