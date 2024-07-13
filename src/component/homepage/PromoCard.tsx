import Image from 'next/image';
import React from 'react'

const PromoCard = ({image,heading,text}:any) => {
  return (
    <div className=" flex h-fit justify-between gap-4 text-white rounded-xl px-6 py-4 bg-[#121a2c]">
      <div>
        <p className="font-semibold text-3xl ">{heading}</p>
        <p className="font-medium">{text}</p>
      </div>
      <Image src={image} width={50} height={50} alt="no-image" className='object-contain' />
    </div>
  );
}

export default PromoCard