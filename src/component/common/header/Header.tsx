import React from "react";
import style from "./Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className={` base-margin flex gap-2`}>
      <div className="sm-container">
        <Image
          src="/icon/social-media.svg"
          width={17}
          height={17}
          alt="no-image"
        />
      </div>

      <div className="sm-container">
        <Image src="icon/mobile.svg" width={12} height={17} alt="no-image" />
      </div>
      <div className="flex-1">
        <div className="sm--round-container yellow-gradient relative pl-20 pr-3 w-fit">
          <Image
            src="/icon/free-money.png"
            width={120}
            height={97}
            alt="no-image"
            className="absolute left-0 w-16 "
          />
          <p>Free Money</p>
        </div>
      </div>

      <div className="sm--round-container relative px-11 ">
        <div
          className={` ${style["promotion-icon"]} purple-gradient absolute left-0 w-16`}
        >
          <Image
            src="/icon/promotion.svg"
            width={14}
            height={15}
            alt="no-image"
          />
        </div>
        <p>Promotion and bonuses</p>
        <Image
          src="/icon/promotion-2.png"
          width={151}
          height={161}
          alt="no-image"
          className="absolute -right-4 w-16"
        />
      </div>

      <div
        className={`sm--round-container relative pl-11 cursor-pointer ${style["wheel-spin"]}`}
      >
        <div
          className={` ${style["promotion-icon"]} red-gradient absolute left-0 w-16`}
        >
          <Image
            src="/icon/spin-wheel.svg"
            width={11}
            height={11}
            alt="no-image"
          />
        </div>
        <p>Wheel Spin</p>
        <Image
          src="/icon/spin-wheel-2.png"
          width={151}
          height={161}
          alt="no-image"
          className=" w-9 ml-2"
        />
        <div className={style["wheel-spin-hover"]}>
          <Image
            src="/icon/spin-wheel-3.jpg"
            width={1470}
            height={980}
            alt="no-image"
            className=""
          />
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy
          </p>
        </div>
      </div>

      <div className="sm-container w-fit grid gap-1">
        <p>EN</p>
        <Image
          src="/icon/down-arrow.svg"
          width={12}
          height={12}
          alt="no-image"
        />
        <Image src="/icon/england.svg" width={18} height={18} alt="no-image" />
      </div>
    </div>
  );
};

export default Header;
