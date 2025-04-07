export type RouteKey =
  | "dashboard"
  | "home"
  | "login"
  | "payments"
  | "contactUs"
  | "faq"
  | "tos";

export type RoutesMap = Record<RouteKey, string>;
