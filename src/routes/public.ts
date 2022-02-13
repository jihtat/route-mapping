import { About } from "../pages/About";
import { Home } from "../pages/Home";

export const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "about",
    component: About,
  },
];
