import image5 from "./image5.jpg";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function Div1section2() {
  return (
    <>
      <div className="w-[320px] h-[330px] bg-white rounded-3xl shadow-md relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03]">
        <div className="w-full h-[70%] overflow-hidden">
          <img
            src={image5}
            alt="costumer service"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-[30%] left-0 w-full h-[120px] bg-linear-to-t from-white via-white/80 to-transparent"></div>
        <div className="absolute bottom-[20%] left-4 flex flex-col justify-between">
          <p className="text-[15px] font-semibold tracking-widest text-gray-500">
            Technical teams
          </p>
          <h2 className="text-[25px] font-semibold text-gray-900 mt-2">
            Repair systems
          </h2>
        </div>
        <button className="absolute bottom-4 right-4 bg-white shadow-md w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition delay-200 cursor-pointer">
          <ArrowUpRightIcon className="w-5 h-5 text-gray-700 hover:scale-110 transition " />
        </button>
      </div>
    </>
  );
}
