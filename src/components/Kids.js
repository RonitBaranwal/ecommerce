
import React from "react";
import { motion } from "framer-motion";
import ShoeItem from "./ShoeItem";

const Kids = ({ data }) => {
  const kids = data.filter((data) => {
    return data.category.includes("kids");
  });

  const itemlist = kids.map((item, i) => {
    return (

      <ShoeItem
        key={i}
        title={kids[i].title}
        desc={kids[i].desc}
        price={kids[i].price}
        img={kids[i].imgurl}

      />
    );
  });

  return itemlist.length ? (
    <div>
      <div className="w-full font-dmsans flex flex-col justify-center items-center my-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-row space-x-2 justify-center items-center"
        >
          <h1 className="text-black text-4xl font-bold">Find your style.</h1>
        </motion.div>
        <div className="flex flex-wrap justify-center items-center space-x-5 space-y-3">

          {itemlist}
        </div>
      </div>
    </div>
  ) : (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-row space-x-2 justify-center items-center my-10"
    >
      <h1 className="text-black text-4xl font-bold space-10">
        Sorry, Couldn't Find your Item
      </h1>
    </motion.div>
  );
};

export default Kids;
