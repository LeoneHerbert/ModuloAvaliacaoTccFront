import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-vue-ui-kit/css/mdb.min.css";
import "vue-select/dist/vue-select.css";
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vSelect from "vue-select";

createApp(App)
  .component("v-select", vSelect)
  .use(store)
  .use(router)
  .mount("#app");
