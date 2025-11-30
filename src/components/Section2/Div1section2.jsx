import Card1section2 from "./Card1section2";
import Card2section2 from "./Card2section2";
import Card3section2 from "./Card3section2";
import Card4section2 from "./Card4section2";
export default function Div1section2() {
  return (
    <>
      <div className="h-[90dvh] flex justify-between items-center bg-[#dff0f1] w-full p-3 flex-col">
        <div className="h-8 bg-white rounded-4xl w-30 flex justify-center items-center">
          <h1 className="text-blue-700 font-medium text-[14px] leading-3.5 tracking-widest">
            OUR SERVICES
          </h1>
        </div>
        <div className="w-[55%] p-3 text-6xl font-semibold text-center">
          <h1>High Quality Test Services</h1>
        </div>

        <div className="w-[95%] h-[60%] flex gap-4 rounded-4xl justify-center">
          <Card1section2 />

          <Card2section2 />

          <Card3section2 />

          <Card4section2 />
        </div>
      </div>
    </>
  );
}
