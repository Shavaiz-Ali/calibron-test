import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const initialState = {
  posts: [],
  isFetching: false,
};

const PostsContext = createContext(initialState);

const PostsContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchApi = async () => {
    setIsFetching(true);
    try {
      const url = "https://jsonplaceholder.typicode.com/photos";

      const response = await fetch(url, {
        method: "GET",
      });

      const result = await response.json();
      setIsFetching(false);
      setPosts(result?.slice(0, 20));
    } catch (error) {
      setIsFetching(false);
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, isFetching }}>
      {children}
    </PostsContext.Provider>
  );
};

const usePostsContext = () => {
  const context = useContext(PostsContext);
  return context;
};

export { PostsContextProvider, usePostsContext };
