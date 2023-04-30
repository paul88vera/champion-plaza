import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { TiSocialVimeoCircular } from "react-icons/ti";

export default function Footer() {
  return (
    <div className="flex flex-col bottom-0 relative bg-colors static w-fill">
      <div className="p-4 text-center text-sm font-medium">
        <div>
          <ul className="flex flex-row md:flex-row place-content-center gap-10 pb-4 items-center">
            <li>
              <Link to="https://www.facebook.com/cbcsocial/">
                <SiFacebook className="text-3xl text-[#baa294] hover:scale-110 transition" />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/cbcsocial">
                <AiFillInstagram className="text-4xl text-[#baa294] hover:scale-110 transition" />
              </Link>
            </li>
            <li>
              <Link to="https://www.youtube.com/channel/UCm2bTbosRvfyDNVb09vMcnA">
                <TiSocialYoutubeCircular className="text-4xl text-[#baa294] hover:scale-110 transition" />
              </Link>
            </li>
            <li>
              <Link to="https://communitybiblechurch.vhx.tv/browse">
                <TiSocialVimeoCircular className="text-4xl text-[#baa294] hover:scale-110 transition" />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          All Rights Reserved © 2023 |{" "}
          <a
            href="https://www.communitybible.com/"
            className="text-[#f0453e] hover:text-white"
          >
            www.communitybible.com
          </a>
        </div>
      </div>
    </div>
  );
}
