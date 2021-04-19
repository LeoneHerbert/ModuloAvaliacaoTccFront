import { createRouter, createWebHashHistory } from "vue-router";
import BaseLayout from "../views/Layout/BaseLayout.vue";
import TCCViewAll from "../views/TCC/TCCViewAll.vue";
import Home from "../views/Home.vue";
import AvaliationForm from "../views/TCC/Evaluation/AvaliationForm.vue";
// import InternHome from "../views/Intern.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  {
    path: "/",
    component: BaseLayout,
    children: [
      {
        path: "/",
        component: Home,
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: "tcc",
        component: TCCViewAll,
      },
      {
        path: "avaliar",
        component: AvaliationForm,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
