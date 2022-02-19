export type routeType = {
  path: string;
  component: () => JSX.Element;
  nestedRoutes?: {
    path: string;
    component: () => JSX.Element;
  }[];
}[];
