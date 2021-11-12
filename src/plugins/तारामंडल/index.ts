import _Vue from "vue";

import ग्राहक from "./केन्दीय-पानिकोलागिदूर्भाषहरु";

export default {
  install(Vue: typeof _Vue): void {
    Vue.prototype.$तारामंडल = new ग्राहक();
  },
};
