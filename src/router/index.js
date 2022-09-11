import Vue from "vue";
import VueRouter from "vue-router";
import EsraaView from "../views/EsraaView.vue";
import ListAll from "../views/ListAll.vue";
import CreateOne from "../views/CreateOne.vue";
import EditOne from "../views/EditOne.vue";
import PageNotFound from "../views/PageNotFound.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/users",
    component: EsraaView,
  },
  {
    path: "/users",
    name: "ListALL",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ListAll,
  },
  {
    path: "/users/create",
    name: "CreateOne",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CreateOne,
  },
  {
    path: "/users/edit/:userId",
    name: "EditOne",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: EditOne,
  },
  {
    path: "*",
    name: "PageNotFound",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: PageNotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
