import "normalize.css";
import "@/assets/styles/main.styl";

import { createApp } from "vue";
import { createPinia } from "pinia";

import { plugin, defaultConfig } from "@formkit/vue";

import App from "./App.vue";
import router from "./router";
const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .use(
    plugin,
    defaultConfig({
      config: {
        classes: {
          input: "app-field",
          label: "app-field__label",
        },
      },
    })
  )
  .mount("#app");
