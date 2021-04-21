/**
 *
 * @param {import("vue").UnwrapRef} payload
 * @param {import("vue").Ref<import("@vuelidate/core").Validation>} validation
 * @returns
 */
export function submitSubHandler(payload, validation) {
  return () => {
    const { $invalid: invalid } = validation.value;
    if (!invalid) {
      return payload;
    }
  };
}
