import { computed } from "vue";
import { required, numeric, between } from "@vuelidate/validators";

export const rules = computed(() => ({
  expositionCapability: { required, numeric, between: between(0, 5) }, // Matches this.firstName
  responseCapability: { required, numeric, between: between(0, 4) }, // Matches this.lastName
  timePrediction: { required, numeric, between: between(0, 1) },
}));
