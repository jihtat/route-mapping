import { About } from "../pages/About";
import { Home } from "../pages/Home";

import { routeType } from "../types/route";

export const publicRoutes: routeType = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "about",
    component: About,
  },
];
