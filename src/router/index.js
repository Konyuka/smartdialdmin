import Vue from "vue";
import Router from "vue-router";
import Table from "@/components/Table.vue";
import Details from "@/components/User.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/table",
      name: "Table",
      component: Table,
    },
    {
      path: "/details",
      name: "Details",
      component: Details,
    }
  ],
});
