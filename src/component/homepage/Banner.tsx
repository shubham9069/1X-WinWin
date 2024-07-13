import React from "react";
import style from "./HomePage.module.css";
import Button from "../common/button/Button";

const Banner = ({ img, buttonText, text, href }: any) => {
  return (
    <div className={` ${style["banner-wrapper"]} rounded-3xl relative`}>
      <img src={img} />
      <div
        className={` ${style["after-content"]} h-full absolute z-10 top-0 left-0 p-10  max-w-72 flex flex-col justify-between`}
      >
        <p className="text-white font-bold text-3xl">{text}</p>
        <Button>Trade</Button>
      </div>
    </div>
  );
};

export default Banner;
