import Firstbar from "../../components/Herosection/Firstbar";
import Navbar from "../../components/Herosection/Navbar";
import Footer from "../../components/Section6/Fotter";
import image12 from "./image12.jpg";
import Section2about from "./Section2about";

export default function About() {
    return (
        <>
            <div className="h-[80vh] w-full flex justify-center items-center">
                <div
                    className="relative h-[90%] w-[95%] rounded-[25px] overflow-hidden bg-cover bg-center"
                    style={{ backgroundImage: `url(${image12})` }}
                >
                    <div className="absolute inset-0 bg-gray-950/60"></div>
                    <div className="relative z-20">
                        <Firstbar />
                        <Navbar />
                    </div>
                    <div className="relative z-20 flex flex-col items-center mt-[120px] text-white">
                        <h1 className="text-5xl font-bold">About Us</h1>

                        <div className="flex items-center gap-3 mt-4 text-sm tracking-wider">
                            <span className="font-semibold">HOME</span>
                            <span className="text-xl">❯</span>
                            <span className="font-semibold text-blue-400">ABOUT US</span>
                        </div>
                    </div>
                </div>
            </div>
            <Section2about />
            <Footer />

        </>
    );
}
