import React, { useState } from "react"
import { RiMentalHealthLine } from "react-icons/ri"
import { RiRestaurant2Line } from "react-icons/ri"
import { BiStore } from "react-icons/bi"
import { HiOutlineOfficeBuilding } from "react-icons/hi"

export default function Projects() {
  // If you want to add more, duplicate from "{" ro "}," and enter the new information needed. it will populate as needed.
  const projects = [
    {
      id: 1,
      image: (
        <RiMentalHealthLine className="text-7xl text-[#baa294] drop-shadow-md" />
      ),
      title: "Support",
      para: "World-class support will be available.",
    },
    {
      id: 2,
      image: (
        <RiRestaurant2Line className="text-7xl text-[#baa294] drop-shadow-md" />
      ),
      title: "Restaurant",
      para: "World-class restaurant will be available.",
    },
    {
      id: 3,
      image: <BiStore className="text-7xl text-[#baa294] drop-shadow-md" />,
      title: "Thrift Stores",
      para: "World-class thrift stores will be available.",
    },
    {
      id: 4,
      image: (
        <HiOutlineOfficeBuilding className="text-7xl text-[#baa294] drop-shadow-md" />
      ),
      title: "Office Space",
      para: "World-class office space will be available.",
    },
  ]
  const [project] = useState(projects)

  return (
    <div className="h-full justify-center pt-20 md:pt-20 lg:px-20 px-4 pb-60 items-center align-center">
      <h1 className="text-black font-bold text-center pt-20 pb-40 text-5xl">
        OUR <span className="text-highlight-colors font-light">PROJECTS</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-20 text-black items-center justify-center text-center">
        {project.map((item) => {
          return (
            <div
              className="flex flex-col justify-center items-center gap-2"
              key={item.id}>
              {item.image}
              <h3 className="font-bold text-xl  drop-shadow-lg">
                {item.title}
              </h3>
              <p className=" drop-shadow-lg">{item.para}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
