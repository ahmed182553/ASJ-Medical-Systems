import { motion } from "motion/react";

import Card1section2 from "./Card1section2";
import Card2section2 from "./Card2section2";
import Card3section2 from "./Card3section2";
import Card4section2 from "./Card4section2";

export default function Div1section2() {
  return (
    <>
      <section className="w-full bg-[#dff0f1] py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1 }}
            className=" flex  items-center justify-center bg-white rounded-full px-4 py-1 "
          >
            <h1 className="text-blue-700 font-medium text-sm tracking-widest">
              OUR SERVICES
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-8 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              High Quality Test Services
            </h2>
          </motion.div>

          <div
            className="
              mt-8 md:mt-10
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-2
              lg:grid-cols-4
              gap-y-6 gap-x-6
              items-start
            "
          >
            <div className="flex justify-center">
              <Card1section2 />
            </div>

            <div className="flex justify-center">
              <Card2section2 />
            </div>

            <div className="flex justify-center">
              <Card3section2 />
            </div>

            <div className="flex justify-center">
              <Card4section2 />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
