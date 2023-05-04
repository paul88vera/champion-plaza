import React, { useState } from "react";
import Sidenav from "../components/sidenav/sidenav";
import { TbCross } from "react-icons/tb";

export default function Error() {
  const [res] = useState([]);

  const errorResponse = [
    "This is not the page you are looking for...",
    "This page does not exist...",
    "This might not be what you were looking for...",
    "Please try another page...",
    "You won't see anything here...",
  ];

  const errorMessage = Math.floor(Math.random() * errorResponse.length);

  return (
    <>
      <Sidenav />
      <div className="h-screen flex flex-col items-center justify-center align-center bg-colors text-3xl items-center p-4 gap-4">
        <TbCross className="text-7xl text-[#baa294] drop-shadow-md align-center justify-center items-center animate-pulse" />
        {errorResponse[errorMessage]}
        {res}
      </div>
    </>
  );
}
