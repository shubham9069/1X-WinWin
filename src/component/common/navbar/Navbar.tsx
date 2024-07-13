"use client";
import React, { useContext } from "react";
import style from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import DropDown from "../dropdown/DropDown";
import { navbarLink, userDetailsDropDown } from "@/dummy-data/navbar";
import AppContext from "@/context/AppProvider";
import Button from "../button/Button";

const Navbar = () => {
  const { handleDropDown }: any = useContext(AppContext);
  return (
    <div
      className={`base-margin flex gap-8 items-center  ${style["navbar-wrapper"]}`}
    >
      <Image src="/icon/logo.svg" width={70} height={70} alt="no-image" />
      {navbarLink.map((elem: any) => {
        return (
          <Link href={elem.href} className={`${style["link"]} `}>
            {elem.name}
          </Link>
        );
      })}

      <Link href="#" className={`${style["link"]} `}>
        <Image src="/icon/aviater.svg" width={80} height={40} alt="aviatar" />
      </Link>

      <div
        className="flex-1 flex gap-6 justify-end items-center"
        onClick={handleDropDown}
      >
        <div className={` ${style["winner-list"]}`}>
          <Image
            src="/icon/crown.png"
            width={25}
            height={25}
            alt="crown-image"
            className="absolute -left-1 -top-2 -rotate-45"
          />
          <p className="font-medium ">
            shubham
            <span className="text-green-500"> $56758 </span>
          </p>
        </div>

        <div className={`${style["user-profile"]} `}>
          <div className={`${style["user-icon"]}`}>
            <Image src="/icon/user.svg" width={9} height={9} alt="no-image" />
          </div>
          <DropDown>
            {userDetailsDropDown.map((elem: any) => {
              return <Link href={elem.href}>{elem.name}</Link>;
            })}
          </DropDown>
        </div>
      </div>
      <button className="--color-icon-bg default-button">Login</button>
    </div>
  );
};

export default Navbar;
