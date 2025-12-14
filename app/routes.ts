import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/projects", "routes/projects.tsx"),
  route("/workers", "routes/workers.tsx"),
] satisfies RouteConfig;
