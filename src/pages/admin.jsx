import React, { useState } from "react";

export default function Admin() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [newPost, setNewPost] = useState("");

  function submitPost() {
    if (newPost === "") return;

    setNewPost((currentPost) => {
      return [];
    });
    setNewPost("");
  }

  if (user === "admin" && password === "th3b3st") {
    return (
      <form className=" py-24 h-screen overflow-y-scroll bg-colors text-[#baa294] flex flex-col justify-center align-center items-center gap-10 text-center">
        <h1 className="text-center font-bold text-3xl">Add A Post</h1>
        <input
          className="p-2 border-0 rounded text-xl text-black outline-1 outline-[#baa294]"
          type="text"
          placeholder="Title"
        />
        <input
          className="p-2 border-0 rounded text-xl text-black outline-1 outline-[#baa294]"
          type="text"
          placeholder="Alt Text"
        />
        <input
          className="p-2 border-0 rounded text-xl text-black outline-1 outline-[#baa294]"
          type="text"
          placeholder="Written By"
        />
        <label htmlFor="image">
          Add an Image:
          <br />
          <input
            className="p-2 border-0 text-white rounded text-xl w-[350px] outline-1 outline-[#baa294]"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
          />
        </label>
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          className="p-2 border-0 rounded text-xl max-w-[250px] text-black outline-1 outline-[#baa294]"
          placeholder="Add your description..."
        ></textarea>
        <button
          className="border-2 border-[#baa294] rounded px-24 py-2 text-[#baa294] hover:bg-[#baa294] hover:text-[white]"
          onClick={submitPost}
        >
          Submit Post
        </button>
      </form>
    );
  } else {
    return (
      <form className="h-screen bg-colors text-[#baa294] flex flex-col justify-center align-center items-center gap-10">
        <h1 className="text-center font-bold text-3xl">Login</h1>
        <input
          type="text"
          className="p-2 border-0 rounded text-xl text-black outline-1 outline-[#baa294]"
          onChange={(e) => setUser(e.target.value)}
          placeholder="Username"
          autoFocus
        />
        <input
          type="password"
          className="p-2 border-0 rounded text-xl text-black outline-1 outline-[#baa294]"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </form>
    );
  }
}
