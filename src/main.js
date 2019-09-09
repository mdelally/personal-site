import "@/main.css";
import "prismjs/themes/prism-tomorrow.css";

import Homepage from "~/layouts/Homepage.vue";
import Internal from "~/layouts/Internal.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Homepage", Homepage);
  Vue.component("Internal", Internal);
}
