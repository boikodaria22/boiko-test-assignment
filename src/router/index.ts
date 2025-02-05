import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouteLocationNormalized,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/users",
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../pages/UserList.vue"),
    meta: {
      title: "User List",
    },
  },
  {
    path: "/users/:id",
    name: "user",
    component: () => import("../pages/UserPage.vue"),
    meta: {
      title: "User Details",
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "notFoundPage",
    component: () => import("../pages/NotFoundPage.vue"),
    meta: {
      title: "404 - Not Found",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Type-safe access to route meta
router.beforeEach((to: RouteLocationNormalized) => {
  const pageTitle = to.meta?.title as string | undefined;
  document.title = pageTitle || "Default Title";
});

export default router;
