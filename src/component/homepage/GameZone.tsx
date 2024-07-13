import React from 'react'
import style from './HomePage.module.css'
import Image from 'next/image'

const GameZone = ({gameList}:any) => {


    const GameCard = ({gameDetails}:any)=>{
        const {
          game_image,
          category_name,
          company_name,
          game_name,
          category_logo,
        }
        =gameDetails;
        return (
          <div>
            <Image
              src={game_image}
              width={150}
              height={150}
              alt="no-image"
              className="rounded-3xl w-full"
            />
            <div className="flex gap-2 items-center my-2">
              <Image
                src={category_logo}
                width={20}
                height={20}
                alt="no-image"
              />
              <p className=" font-medium text-slate-400">{category_name}</p>
            </div>
            <p className='text-2xl font-semibold text-white'>{game_name}</p>
          </div>
        );
    }
  return (
    <div className={`${style["game-wrapper"]}`}>
      <div className="flex gap-6 items-center py-4">
        <Image src={gameList[0].category_logo} width={40} height={40} alt="no-image" />
        <p className="text-4xl font-bold text-white">{gameList[0].company_name}</p>
      </div>

      <div className="grid gap-6 grid-cols-4 py-4  ">
        {gameList.map((obj: any) => {
          return <GameCard gameDetails={obj} />;
        })}
      </div>
    </div>
  );
}

export default GameZone