import image from "../Section2/image.jpg";
import TopBar from "./Firstbar";
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Header() {
  return (
    <header
      className="w-full min-h-screen flex justify-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full min-h-screen bg-gray-950/50 flex flex-col px-3 md:px-0">
        <TopBar />
        <hr className="border-t-2 border-white/20" />
        <Navbar />
        <Hero />
      </div>
    </header>
  );
}
