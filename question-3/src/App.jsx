import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { usePostsContext } from "./context/Posts-context";

function App() {
  const { isFetching, posts } = usePostsContext();
  console.log(posts);
  return (
    <main>
      {isFetching ? (
        <div>loading...</div>
      ) : (
        <>
          {posts && posts?.length > 0 ? (
            posts?.map((post) => (
              <div className="card" key={post.id}>
                <h1>{post?.title}</h1>
                <img src={`${post?.thumbnailUrl}`} alt="" />
              </div>
            ))
          ) : (
            <h1>NO posts avaiable</h1>
          )}
        </>
      )}
    </main>
  );
}

export default App;
