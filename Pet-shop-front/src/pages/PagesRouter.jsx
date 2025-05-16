import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage/HomePage.jsx";
import CategoriesPage from "./CategoriesPage/CategoriesPage";
import GroupView from "./GroupView/GroupView";
import AllProductsPage from "./AllProductsPage/AllProductsPage";
import SpecialOffersPage from "./SpecialOffersPage/SpecialOffersPage";
import ProductPage from "./ProductPage/ProductPage";
import CartPage from "./CartPage/CartPage";
import OopsPage from "./OopsPage/OopsPage";

const PagesRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:id" element={<GroupView />} />
            <Route path="/products" element={<AllProductsPage />} />
            <Route path="/sales" element={<SpecialOffersPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<OopsPage />} />
        </Routes>
    );
};

export default PagesRouter;
