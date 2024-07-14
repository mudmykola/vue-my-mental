import AOS from "aos";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "aos/dist/aos.css";
import BaseButton from "@/components/ui/BaseButton.vue";
import "./assets/index.css";
AOS.init({});

const app = createApp(App);

app.use(router);
app.use(store);
app.component("BaseButton", BaseButton);
app.mount("#app");

router.afterEach(() => {
	AOS.refresh();
});