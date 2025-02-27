import { lazy } from "react";

export const Home = lazy(() => import("./Home/Home.jsx"));
export const PricesPage = lazy(() => import("./PricesPage/PricesPage.jsx"));
export const ContactPage = lazy(() => import("./ContactPage/ContactPage.jsx"));
export const NotFound = lazy(() => import("./NotFound/NotFound.jsx"));
export const ArticlesPage = lazy(() =>
  import("./ArticlesPage/ArticlesPage.jsx")
);
export const ArticleSingle = lazy(() =>
  import("./ArticleSingle/ArticleSingle.jsx")
);
export const DoctorsSingle = lazy(() =>
  import("./DoctorsSingle/DoctorsSingle.jsx")
);
