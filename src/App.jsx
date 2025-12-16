import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/product/Productpage";
import ProductPage from "./pages/product/Singleproductpage";
import About from "./pages/Aboutpage/About";
import Contact from "./pages/contact/contact";
import Sparepartdetails from "./pages/Spareproduct/Sparepartdetails";
import Sparepartspage from "./pages/Spareproduct/Sparepartspage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/spareparts" element={<Sparepartspage />} />
                <Route path="/sparepart/:id" element={<Sparepartdetails />} />
                <Route path="/services/support" element={<Contact />} />
                <Route path="/services/repair" element={<Contact />} />
                <Route path="/services/parts" element={<Sparepartspage />} />
                <Route path="/services/technical" element={<Contact />} />
                <Route path="/systems/mri" element={<Products />} />
                <Route path="/systems/xray" element={<Products />} />
                <Route path="/systems/ct" element={<Products />} />
                <Route path="/systems/ultrasound" element={<Products />} />
                <Route path="/contact/locations" element={<Contact />} />
                <Route path="/contact/support" element={<Contact />} />
                <Route path="/parts/xray-tubes" element={<Sparepartspage />} />
                <Route path="/parts/generators" element={<Sparepartspage />} />
                <Route path="/parts/cables" element={<Sparepartspage />} />
                <Route path="/parts/control-panels" element={<Sparepartspage />} />
                <Route path="/parts/detectors" element={<Sparepartspage />} />



            </Routes>
        </BrowserRouter>
    );
}
