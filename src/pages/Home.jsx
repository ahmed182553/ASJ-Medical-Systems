import Cardsection from "../components/Cardsection/Cardsection.jsx";
import Header from "../components/Herosection/Header.jsx";
import Div1section2 from "../components/Section2/Div1section2.jsx";
import Div1section3 from "../components/Section3/Div1section3.jsx";
import Div1section4 from "../components/Section4/Div1section4.jsx";
import Div1section5 from "../components/Section5/Div1section5.jsx";
import Footer from "../components/Section6/Fotter.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <Div1section2 />
      <Div1section3 />
      <Div1section4 />
      <Cardsection />
      <Div1section5 />
      <Footer />
      
    </>
  );
}
