import React from "react";
import style from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  CategoryList,
  informationList,
  supportContactList,
} from "@/dummy-data/homapage";

const Footer = () => {
  const FooterItem1 = () => {
    return (
      <div className="">
        <p className="text-white font-medium">24/7 Support </p>
        <p className="text-xs text-slate-500 max-w-44 h-10 ">
          Contact us if you have any more questions
        </p>
        <div className="list-container ">
          <Link href="#" className="flex gap-3 my-6 items-center">
            <div className="rounded-xl flex items-center justify-center w-8 h-8 bg-[#3e97ff]">
              <Image
                src="/icon/call.svg"
                width={12}
                height={12}
                alt="no-image"
              />
            </div>
            <p className="text-sm font-medium">+91 79016 56971</p>
          </Link>
          <Link href="#" className="flex gap-3 my-6 items-center">
            <div className="rounded-xl flex items-center justify-center w-8 h-8 bg-[#0fb1d6]">
              <Image
                src="/icon/telegram.svg"
                width={12}
                height={12}
                alt="no-image"
              />
            </div>
            <p className="text-sm font-medium">Telegram</p>
          </Link>
        </div>
      </div>
    );
  };
  const FooterItem2 = ({ heading, links }: any) => {
    return (
      <div className="">
        <p className="text-white font-medium">{heading} </p>
        <p className="text-xs text-slate-500 max-w-44 h-10 "></p>{" "}
        <div className="list-container">
          {links.map((elem: any) => {
            return (
              <Link href={elem.href} className="">
                <p className=" font-medium my-4">{elem.text}</p>
              </Link>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <div className={`base-margin ${style["footer-wrapper"]}`}>
      <div className="flex  items-center">
        <Image src="/icon/logo.svg" width={50} height={50} alt="no-image" />
        <div className={style["footer-separator"]}></div>
      </div>

      <div className={` ${style["footer-container"]}`}>
        <div className={"left flex-2 gap-16 grid justify-between grid-cols-4"}>
          <FooterItem1 />
          <FooterItem2 heading="Support Contact" links={supportContactList} />
          <FooterItem2 heading="Information" links={informationList} />
          <FooterItem2 heading="Categories" links={CategoryList} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
