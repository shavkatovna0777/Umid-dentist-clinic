import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n.js";
import Home from "./pages/Home/Home";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import NotFound from "./pages/NotFound/NotFound";
import PricesPage from "./pages/PricesPage/PricesPage";
import ArticlesPage from "./pages/ArticlesPage/ArticlesPage";
import ArticleSingle from "./pages/ArticleSingle/ArticleSingle";
import ContactPage from "./pages/ContactPage/ContactPage";
import { servicesData, articleSingle } from "./assets/datas/datas";
import DoctorsSingle from "./pages/DoctorsSingle/DoctorsSingle";
import MedicalLoading from "./components/Loading/MedicalLoading";

const LoadingWrapper = ({ children }) => {
  const navigation = useNavigation();
  return navigation.state === "loading" ? <MedicalLoading /> : children;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: (
            <LoadingWrapper>
              <Home />
            </LoadingWrapper>
          ),
          loader: async () => {
            await new Promise((resolve) => setTimeout(resolve, 900));
            return null;
          },
        },
        {
          path: ":id",
          element: (
            <LoadingWrapper>
              <DoctorsSingle />
            </LoadingWrapper>
          ),
          loader: async () => {
            await new Promise((resolve) => setTimeout(resolve, 900));
            return null;
          },
        },
        {
          path: "page/*",
          element: (
            <LoadingWrapper>
              <PricesPage servicesData={servicesData} />
            </LoadingWrapper>
          ),
          loader: async () => {
            await new Promise((resolve) => setTimeout(resolve, 900));
            return null;
          },
        },
        {
          path: "articles/*",
          element: (
            <LoadingWrapper>
              <ArticlesPage />
            </LoadingWrapper>
          ),
          loader: async () => {
            await new Promise((resolve) => setTimeout(resolve, 900));
            return null;
          },
        },
        {
          path: "articles/:id",
          element: (
            <LoadingWrapper>
              <ArticleSingle articleSingle={articleSingle} />
            </LoadingWrapper>
          ),
          loader: async () => {
            await new Promise((resolve) => setTimeout(resolve, 900));
            return null;
          },
        },
        {
          path: "contact",
          element: (
            <LoadingWrapper>
              <ContactPage />
            </LoadingWrapper>
          ),
          loader: async () => {
            await new Promise((resolve) => setTimeout(resolve, 900));
            return null;
          },
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return isLoading ? (
    <MedicalLoading />
  ) : (
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  );
}

export default App;
