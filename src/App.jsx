import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/product/Productpage";
import ProductPage from "./pages/product/Singleproductpage";
import About from "./pages/Aboutpage/About";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}
