export function submitSubHandler(payload, validation) {
  return () => {
    if (validation && !validation.invalid) {
      return payload;
    }
    throw new Error("O formulário possui erros que devem ser verificados");
  };
}
