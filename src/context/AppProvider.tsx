'use client'
import { Chilanka } from "next/font/google";
import React, { useState } from "react";
import { createContext } from "react";
export const AppContext: any = createContext(null);

export const AppProvider = ({ children }: any) => {
  const [dropDown,setDropDown] = useState(false)
   function handleDropDown() {
     setDropDown((prev: boolean) => !prev);
   }
  return (
    <AppContext.Provider value={{ handleDropDown, dropDown }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
