import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import DropDown from "../../components/DropDown/DropDown.jsx";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop.jsx";
import PriceFilter from "../../components/PriceFilter/PriceFilter.jsx";
import BestSellers from "../../components/BestSellers/BestSellers.jsx";
import Tags from "../../components/Tags/Tags.jsx";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart.jsx";
import CardGrid from "../../components/CardGrid/CardGrid.jsx";
import useAOS from "../../hooks/useAOS.jsx";
import { BestSellersData } from "../../assets/datas/datas.js";
import Categories from "../../components/Categories/Categories.jsx";
import FormShop from "../../components/Form/FormShop.jsx";
import {
  filterProductsByTag,
  filterProductsBySearch,
  filterProductsByCategory,
} from "../../utils/filterUtils.js";

function ProductsPage({ cardData, categories }) {
  const [selectedTag, setSelectedTag] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(cardData);
  const [filteredProductsFromForm, setFilteredProductsFromForm] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  const [searchQuery, setSearchQuery] = useState("");
  useAOS();

  const handleAddToCart = (item) => {
    const formattedItem = {
      ...item,
      price: parseFloat(item.price.replace("$", "")),
      quantity: 1,
    };

    setCartItems((prevItems) => {
      const updatedCart = [...prevItems, formattedItem];
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const handleCategorySelect = (categoryName) => {
    const filtered = filterProductsByCategory(cardData, categoryName);
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    let filtered = cardData;
    filtered = filterProductsByTag(filtered, selectedTag);
    filtered = filterProductsBySearch(filtered, searchQuery);
    setFilteredProducts(filtered);
  }, [selectedTag, searchQuery, cardData]);
  return (
    <>
      <div className="article-page bg-[url(https://wgl-dsites.net/medify/wp-content/uploads/2019/08/page-title-3.jpg)] bg-cover bg-no-repeat bg-scroll bg-center h-[300px] mb-[40px] py-[80px] relative z-[1] p-[10px_0] pb-[88px] bg-[#f2f2f4] w-full">
        <div className="wrapper">
          <div className="container">
            <div className="content flex flex-col justify-center items-center h-[100%]">
              <h1 className="text-darkBlue text-[42px] leading-[60px] font-bold">
                Shop
              </h1>
              <div className="breadcrumps whitespace-nowrap capitalize font-bold flex items-center mt-[8px] leading-[24px] text-[16px]">
                <Link to={"/"} className="opacity-70 text-darkBlue ">
                  Home
                </Link>
                <span className="devider opacity-[1] mx-[4px] text-blue">
                  <IoIosArrowForward />
                </span>
                <Link
                  to={"/products"}
                  className="current opacity-[1] text-darkBlue "
                >
                  Shop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
         
        </div>
      </section>

      <ScrollToTop />
    </>
  );
}

export default ProductsPage;
