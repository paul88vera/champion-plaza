import React, { useState, useEffect } from "react"
import { TfiMouse } from "react-icons/tfi"

export default function Newpage() {
  const [recentPost, setRecentPost] = useState([])
  const [currentPost, setCurrentPost] = useState([])

  useEffect(() => {
    const controller = new AbortController()
    const pathwayPromise = fetch(
      "https://content-blogger.googleapis.com/v3/blogs/2678854178555941875/posts?key=AIzaSyCQ5EfH2Wp-ZpvKJ9ayW5TsQxIaSh6zIzc",
      { signal: controller.signal }
    )

    async function getRecentPosts() {
      pathwayPromise
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`)
          }
          return res.json()
        })
        .then((data) => {
          setRecentPost(data.items.slice(1))
          setCurrentPost(data.items[0])
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log(`cancelled: ${error}`)
          }
        })
    }

    getRecentPosts()

    return () => {
      controller.abort()
      console.log("cancelled")
    }
  }, [
    currentPost.id,
    currentPost.title,
    currentPost.content,
    currentPost.url,
    currentPost.author,
    currentPost.published,
  ])

  return (
    <>
      {currentPost ? (
        <div className="flex bg-colors text-highlight-colors gap-10 md:gap-40 md:justify-start md:pr-10 flex-wrap sm:flex-nowrap md:pb-20 pb-40 pt-20 sm:pt-24">
          <div className="max-w-7xl relative md:left-24 sm:left-10">
            <img src="https://unsplash.it/1920/1080" alt="fdsgfdsgfd" />
          </div>
          <div
            className="flex content-center flex-col md:max-w-md md:px-5 px-5"
            key={currentPost.id}>
            <h1 className="font-bold text-5xl lg:text-6xl pb-5 text-white">
              {currentPost.title}
            </h1>
            <div className="post-para max-h-[450px] overflow-y-hidden">
              {currentPost.content}
            </div>
            ...
            <br />
            <a
              href={currentPost.url}
              className="border-[#baa294] text-center py-2 px-4 my-2 rounded border-2 hover:bg-[#baa294] hover:text-white font-bold hover:cursor-pointer">
              Read Full Article
            </a>
            <br />
            <br />
            <p className="font-bold">
              {/* Written by: {currentPost.author.displayName} */}
            </p>
            <p className="my-2 px-2 text-[#baa294] font-regular border-1 rounded bg-zinc-700 w-[110px] text-center">
              {new Date(currentPost.published).toLocaleDateString("en-us", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      ) : null}
      <div className="text-center items-center justify-center sm:flex flex-col w-fill text-highlight-colors bg-colors pb-20 hidden">
        <TfiMouse className="text-5xl font-light animate-bounce" />
      </div>

      {!recentPost ? null : (
        <>
          <h1 className="text-black font-bold text-center pt-20 lg:pt-40 pb-24 text-5xl">
            RECENT{" "}
            <span className="text-highlight-colors font-light">NEWS</span>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto lg:align-top place-items-start justify-center lg:px-24 pb-40 items-center align-top gap-20">
            {recentPost.map((item) => {
              return (
                <a
                  key={item.id}
                  className="border-2 border-white hover:cursor-pointer border-zinc-200 bg-zinc-100 hover:border-2 p-4 rounded relative hover:drop-shadow-lg ease-in-out duration-300 hover:scale-110 max-w-[330px]"
                  href={item.url}>
                  <img
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4pMD6F5jRNE-W-0y_zkwZLUOHo-ZOwJEsSIa0FMcgJA0qQhV53ikXYsPvXyWogGzO5muytTUWOkTZQ3dLQArYDxMgGuWnnKGbYx01HMOt6F5UPEDUrruROiHOvoFIiEkvZO8Ue2Py_CKs88Sc0w3hh5dp54a8S8Duz9mVwv6OtEPu3CBI5yBZDaIJQA/s1150/Screen%20Shot%202022-10-15%20at%2012.08.27%20AM.png"
                    width="300"
                    alt="fdsafgdsafsa"
                  />
                  <h3 className="text-highlight-colors text-3xl pt-2 lg:px-0 px-4 font-bold drop-shadow-md">
                    {item.title}
                  </h3>
                  <time className="mx-4 my-2 px-2 text-zinc-400 font-regular border-1 rounded bg-zinc-100 text-center -right-2 absolute top-0">
                    {new Date(item.published).toLocaleDateString("en-us", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </a>
              )
            })}
          </div>
        </>
      )}
    </>
  )
}
