import Swal from "sweetalert2";

export function alertError(title = "Um erro ocorreu!", text = "") {
  return Swal.fire({
    icon: "error",
    title,
    text,
    timer: 5000,
  });
}
