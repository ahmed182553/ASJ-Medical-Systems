import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Herosection/Header.jsx";
import Div1section2 from "./components/Section2/Div1section2.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <Div1section2 />
  </>
);
