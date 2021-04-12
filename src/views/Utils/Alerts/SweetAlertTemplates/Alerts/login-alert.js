import Swal from "sweetalert2";
import { makeLoadingWhileRequesting, dispose } from "./index";
import { makeLogin } from "@/services/auth/login.service";

export async function loginAlert(successCallback, errorCallback) {
  const result = await Swal.fire({
    title: "Login Form",
    html: `<input type="text" id="loginUser" class="swal2-input" placeholder="Usuário">
    <input type="password" id="password" class="swal2-input" placeholder="Senha">`,
    confirmButtonText: "Entrar",
    focusConfirm: false,
    preConfirm: () => {
      const login = Swal.getPopup().querySelector("#loginUser").value;
      const password = Swal.getPopup().querySelector("#password").value;
      if (!login || !password) {
        Swal.showValidationMessage(`Por favor, entre com seu usuário e senha`);
      }
      return { login, password };
    },
    position: "top",
  });

  if (result.value) {
    const { login: acesso, password: senha } = result.value;
    makeLoadingWhileRequesting("Realizando autenticação");
    try {
      const response = await makeLogin({
        acesso,
        senha,
      });

      await dispose();

      const { statusCode, data } = response;
      statusCode === 200 ? successCallback(data.token) : errorCallback();
    } catch (error) {
      console.error(error);
    }
  }
}
