import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { SlClose } from "react-icons/sl";
import { SiFacebook } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { TiSocialVimeoCircular } from "react-icons/ti";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  function handleChange() {
    setMobileMenu((current) => !current);
  }

  return (
    <div
      id="header"
      className="flex flex-row place-content-between gap-5 text-highlight-colors bg-colors px-4 lg:py-8 py-6 font-bold fixed w-screen items-center pl-10 z-50"
    >
      <Link
        to="/"
        className="flex flex-row gap-4 items-center align-center -ml-4 sm:ml-4"
      >
        <span className="align-bottom tracking-wide text-xs sm:text-lg hover:text-[#f0453e] hover:animate-pulse">
          COMMUNITY BIBLE CHURCH
        </span>
      </Link>

      <div
        id="not-burgewr"
        className="cursor-pointer fixed items-align right-4 md:right-10 hidden sm:flex"
      >
        <Link
          to="/"
          className="burger-menu px-4 hover:text-[#f0453e] hover:animate-pulse"
        >
          HOME
        </Link>
        <Link
          to="/News"
          className="burger-menu px-4 hover:text-[#f0453e] hover:animate-pulse"
        >
          NEWS
        </Link>
      </div>
      <div
        id="burger"
        onClick={handleChange}
        className="cursor-pointer hover:text-[#f0453e] fixed items-align right-4 md:right-10 sm:hidden"
      >
        <RxHamburgerMenu className="text-3xl" />
      </div>
      {mobileMenu && (
        <div className="flex flex-col gap-5 fixed text-highlight-colors bg-colors w-3/4 md:w-1/4 right-4 items-bottom top-4 text-center border rounded border-[#baa294] pb-4">
          <div
            className="menu-close cursor-pointer hover:text-[#f0453e] top-0 p-4 text-right"
            onClick={handleChange}
          >
            <SlClose className="text-colors text-3xl fixed right-10" />
          </div>
          <div className="flex flex-col gap-10 pt-10">
            <Link
              to="/"
              onClick={handleChange}
              className="burger-menu px-4 hover:text-[#f0453e]"
            >
              HOME
            </Link>
            <Link
              to="/News"
              onClick={handleChange}
              className="burger-menu px-4 hover:text-[#f0453e]"
            >
              NEWS
            </Link>
            <ul className="flex flex-row md:flex-row place-content-center gap-4 lg:gap-10 py-10 pb-4 items-center">
              <li>
                <Link to="https://www.facebook.com/cbcsocial/">
                  <SiFacebook className="text-3xl text-[#baa294] hover:text-[#f0453e] hover:scale-110 transition" />
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/cbcsocial">
                  <AiFillInstagram className="text-4xl text-[#baa294] hover:text-[#f0453e] hover:scale-110 transition" />
                </Link>
              </li>
              <li>
                <Link to="https://www.youtube.com/channel/UCm2bTbosRvfyDNVb09vMcnA">
                  <TiSocialYoutubeCircular className="text-4xl text-[#baa294] hover:text-[#f0453e] hover:scale-110 transition" />
                </Link>
              </li>
              <li>
                <Link to="https://communitybiblechurch.vhx.tv/browse">
                  <TiSocialVimeoCircular className="text-4xl text-[#baa294] hover:text-[#f0453e] hover:scale-110 transition" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
