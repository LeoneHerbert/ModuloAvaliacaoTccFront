import { between, numeric, required } from "@vuelidate/validators";

export const rules = {
  content: {
    required,
    numeric,
    between: between(0, 5),
  },
  essay: {
    required,
    numeric,
    between: between(0, 3),
  },
  normalization: {
    required,
    numeric,
    between: between(0, 2),
  },
};
