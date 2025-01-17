import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n.js';
import Home from "./pages/Home/Home";
import Main from "./layouts/MainLayout/MainLayout";
import NotFound from "./pages/NotFound/NotFound";
import DoctorsPage from "./pages/DoctorsPage/DoctorsPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { cardData, categories, doctorData, images } from "./assets/datas/datas";
import Cart from "./pages/Cart/Cart";
import { Checkout, ProductSingle } from "./pages";
import DoctorsSingle from "./pages/DoctorsSingle/DoctorsSingle";

import { MedicalLoading } from "./components/Loading/MedicalLoading.jsx";

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
    console.log("Loaded cartItems from localStorage: ", cartItems);
  }, [cartItems]);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      console.log("Updated cartItems in localStorage: ", cartItems);
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
      element: <Main />,
      children: [
        {
          path: "/",
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
          path: "page/*",
          element: (
            <LoadingWrapper>
              <DoctorsPage doctorData={doctorData} />
            </LoadingWrapper>
          ),
          loader: async () => {
            await new Promise((resolve) => setTimeout(resolve, 900));
            return null;
          },
        },
        {
          path: "page/:id",
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
          path: "products/*",
          element: (
            <LoadingWrapper>
              <ProductsPage
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
          path: "cart",
          element: (
            <LoadingWrapper>
              <Cart
                cartItems={cartItems}
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
          path: "checkout",
          element: (
            <LoadingWrapper>
              <Checkout cartItems={cartItems} />
            </LoadingWrapper>
          ),
          loader: async () => {
            await new Promise((resolve) => setTimeout(resolve, 900));
            return null;
          },
        },
        {
          path: "product/:id",
          element: (
            <LoadingWrapper>
              <ProductSingle
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