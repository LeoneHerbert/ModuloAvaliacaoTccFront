import Swal from "sweetalert2";

export function success(
  title = "Sucesso!",
  text = "Seu cadastro foi realizado"
) {
  return Swal.fire({
    icon: "success",
    title,
    text,
    timer: 5000,
  });
}
