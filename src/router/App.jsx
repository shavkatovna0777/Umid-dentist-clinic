import "../App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n/i18n.js";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout.jsx";
import { servicesData, articleSingle } from "../assets/datas/datas.js";
import MedicalLoading from "../components/Loading/MedicalLoading.jsx";
import {
  ArticleSingle,
  ArticlesPage,
  ContactPage,
  DoctorsSingle,
  Home,
  NotFound,
  PricesPage,
} from "../pages/index.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<MedicalLoading />}>
              <Home />
            </Suspense> 
          ),
        },
        {
          path: ":id",
          element: (
            <Suspense fallback={<MedicalLoading />}>
              <DoctorsSingle />
            </Suspense>
          ),
        },
        {
          path: "page/*",
          element: (
            <Suspense fallback={<MedicalLoading />}>
              <PricesPage servicesData={servicesData} />
            </Suspense>
          ),
        },
        {
          path: "articles/*",
          element: (
            <Suspense fallback={<MedicalLoading />}>
              <ArticlesPage />
            </Suspense>
          ),
        },
        {
          path: "articles/:id",
          element: (
            <Suspense fallback={<MedicalLoading />}>
              <ArticleSingle articleSingle={articleSingle} />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<MedicalLoading />}>
              <ContactPage />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: (
            <Suspense fallback={<MedicalLoading />}>
              <NotFound />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  );
}

export default App;
