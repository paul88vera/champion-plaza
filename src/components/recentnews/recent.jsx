import React, { Fragment, useState } from "react";

export default function Recent() {
  const recentNews = [
    {
      id: 1,
      date: "05-10-2023",
      title: "Guest Speaker",
      image: "image",
      alt: "guest speaker banner",
      desc: "Cras quis velit ac tortor varius efficitur. Donec et vulputate tellus. Nunc vitae gravida ex. Orci varius",
      written: "Not Me",
      link: "/",
    },
    {
      id: 2,
      date: "05-10-2023",
      title: "Latest Foods",
      image: "image",
      alt: "latest foods banner",
      desc: "Cras quis velit ac tortor varius efficitur. Donec et vulputate tellus. Nunc vitae gravida ex. Orci varius",
      written: "Not Me",
      link: "/",
    },
    {
      id: 3,
      date: "05-10-2023",
      title: "Concert on the Horizon",
      image: "image",
      alt: "concert on the horizon banner",
      desc: "Cras quis velit ac tortor varius efficitur. Donec et vulputate tellus. Nunc vitae gravida ex. Orci varius",
      written: "Not Me",
      link: "/",
    },
  ];
  const [news, setNews] = useState(recentNews);

  return (
    <Fragment>
      <h1 className="text-black font-bold text-center pt-20 lg:pt-40 pb-24 text-5xl">
        RECENT <span className="text-highlight-colors font-light">NEWS</span>
      </h1>
      <div className="flex lg:align-top place-items-start flex-col lg:flex-row justify-center lg:px-24 pb-40 lg:gap-10 gap-20 w-screen">
        {news.map((item) => {
          return (
            <div key={item.id} className="w-screen relative">
              <img src="https://unsplash.it/1920/1080" alt={item.alt} />
              <h3 className="text-highlight-colors text-3xl pt-2 lg:px-0 px-4 font-bold drop-shadow-lg">
                {item.title}
              </h3>
              <p className="mx-4 my-2 px-2 text-zinc-400 font-regular border-1 rounded bg-zinc-100 w-[110px] text-center -right-2 absolute top-0">
                {item.date}
              </p>
              <p className="text-black px-4 lg:px-0">
                {item.desc}{" "}
                <a href={item.link} className="font-bold hover:text-[#baa294]">
                  Read More...
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
