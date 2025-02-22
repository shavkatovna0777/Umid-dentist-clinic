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
import {
  cardData,
  categories,
  servicesData,
  images,
} from "./assets/datas/datas";
import DoctorsSingle from "./pages/DoctorsSingle/DoctorsSingle";
import  MedicalLoading  from "./components/Loading/MedicalLoading";

const LoadingWrapper = ({ children }) => {
  const navigation = useNavigation();
  return navigation.state === "loading" ? <MedicalLoading /> : children;
};

function App() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
    console.log("Item added to cart: ", item);
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateItemQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

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
              <ArticlesPage
                cardData={cardData}
                categories={categories}
                handleAddToCart={handleAddToCart}
              />
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
              <ArticleSingle
                initialCardData={cardData}
                images={images}
                handleRemoveItem={handleRemoveItem}
                updateItemQuantity={updateItemQuantity}
              />
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
