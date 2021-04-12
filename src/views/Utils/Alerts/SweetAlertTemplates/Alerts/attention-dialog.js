import Swal from "sweetalert2";

export async function attention(title = "Atenção", text = "") {
  return Swal.fire({
    title,
    text,
    icon: "warning",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Entendi",
  });
}
