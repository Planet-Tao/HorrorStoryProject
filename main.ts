import Home from "/src/components/Home.vue";
import IconFont from "/src/components/IconFont.vue";

import { createApp } from "vue";

const app = createApp(Home);
app.component('icon-font', IconFont);

app.mount("#app");