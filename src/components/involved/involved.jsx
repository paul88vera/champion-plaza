import React from "react";
import { Link } from "react-router-dom";

export default function Involved() {
  return (
    <div className="flex flex-col gap-2 max-w-xl pb-40 self-center place-content-center align-center items-center px-4 md:px-0">
      <h1 className="text-black font-bold text-center pt-4 pb-4 text-5xl">
        GET <span className="text-highlight-colors font-light">INVOLVED</span>
      </h1>
      <p className="text-black pb-6 text-center text-xl">
        <span className="font-bold">“Champion”</span> is not a noun in our
        mission. It is a verb, an action to create and walk alongside those who
        need a second chance and a new path through our “mission to market”
        village.
      </p>
      <Link
        to="https://communitybible.formstack.com/forms/champion_plaza_interest_form"
        className="max-w-md font-bold border-2 py-2 px-12 text-xl text-center text-[#baa294] border-[#baa294] bg-white hover:text-white hover:bg-[#baa294] hover:drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)]"
      >
        Interest Form
      </Link>
    </div>
  );
}
