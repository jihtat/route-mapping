import { AllProducts } from "../pages/products/AllProducts";
import { Best } from "../pages/products/Best";
import { New } from "../pages/products/New";
import { Profile } from "../pages/Profile";
import { routeType } from "../types/route";

export const protectedRoutes: routeType = [
  {
    path: "profile",
    component: Profile,
  },
  {
    path: "products",
    component: AllProducts,
    nestedRoutes: [
      {
        path: "new",
        component: New,
      },
      {
        path: "best",
        component: Best,
      },
    ],
  },
];
