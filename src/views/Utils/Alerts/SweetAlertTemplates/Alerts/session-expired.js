import Swal from "sweetalert2";

export async function alertAboutExpiring() {
  const result = await Swal.fire({
    title: "Atenção!",
    text:
      "Sua sessão expirou! " +
      "Por favor, faça login novamente para continuar a utilizar o SISCON",
    icon: "warning",
    showCancelButton: false,
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Autenticar",
  });
  if (result.value) {
    location.href = "/";
  }
}
