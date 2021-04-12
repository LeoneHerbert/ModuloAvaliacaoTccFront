import Swal from "sweetalert2";
import { passwordResetService } from "@/services/password";

export async function resetPasswordAlert() {
  const result = await Swal.fire({
    title: "Seu endereço de email",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    confirmButtonText: "Enviar",
    showLoaderOnConfirm: true,
    preConfirm: async (email) => {
      try {
        const response = await passwordResetService(email);
        return response.data;
      } catch (error) {
        Swal.showValidationMessage(`A requisição falhou: ${error}`);
      }
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `Email enviado!`,
        text: result.value,
      });
    }
  });
  return result;
}
