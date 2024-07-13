"use client";
import React, { ReactNode, useContext } from "react";
import style from "./DropDown.module.css";
import Image from "next/image";
import AppContext from "@/context/AppProvider";
interface Props {
  children: ReactNode;
}

const DropDown = ({ children }: Props) => {
  const { dropDown }: any = useContext(AppContext);

  return (
    <div className={` cursor-pointer ${style["dropdown"]}`}>
      <Image
        src="/icon/three-dots-vertical.svg"
        width={15}
        height={15}
        alt="no-image"
      />
      <div
        className={style["dropdown-context"]}
        style={{ visibility: !dropDown ? "hidden" : "visible" }}
      >
        {children}
      </div>
    </div>
  );
};

export default DropDown;
