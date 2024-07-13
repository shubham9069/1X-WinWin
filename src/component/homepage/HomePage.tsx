import React from "react";
import style from "./HomePage.module.css";
import Banner from "./Banner";
import { BannerData, gameList, promoData } from "@/dummy-data/homapage";
import PromoCard from "./PromoCard";
import GameZone from "./GameZone";

const HomePage = () => {
  return (
    <div className={`${style["homepage-wrapper"]} base-margin`}>
      <div className={style["banner-container"]}>
        {BannerData.map((obj: any) => {
          return (
            <Banner
              img={obj?.image}
              text={obj?.text}
              buttonText={obj?.button_text}
              href={obj?.href}
            />
          );
        })}
      </div>
      <div className={`${style["promotion-container"]} base-margin`}>
        {promoData.map(({ image, heading, text }: any) => {
          return <PromoCard image={image} heading={heading} text={text} />;
        })}
      </div>

      <div className={`${style["gamezone-container"]} base-margin`}>
        <GameZone gameList={gameList} />
        <GameZone gameList={gameList} />
      </div>
      <div className={`${style["gamezone-container"]} base-margin`}>
        <GameZone gameList={gameList} />
        <GameZone gameList={gameList} />
      </div>
    </div>
  );
};

export default HomePage;
