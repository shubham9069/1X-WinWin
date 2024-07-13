import React, { ReactNode } from 'react'
interface props {
  onClick?: () => {};
  children: ReactNode;
  buttonDetails?:{
    color ?:string,
    backgroundColor?:string
  }
}

const Button = ({
  onClick,
  buttonDetails = { backgroundColor: "white", color: "black" },
  children,
}: props) => {
  return (
    <div
      onClick={onClick}
      style={{backgroundColor:buttonDetails.backgroundColor,color:buttonDetails.color}}
      className={`  cursor-pointer rounded-xl min-w-50 px-10 h-12 flex justify-center items-center font-semibold text-xl`}
    >
      {children}
    </div>
  );
};

export default Button