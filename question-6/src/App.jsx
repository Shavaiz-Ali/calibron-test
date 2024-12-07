import { useState } from "react";
import "./App.css";
import ItemList from "./components/item-list";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchApi = async () => {
    setIsFetching(true);
    try {
      const url = "https://jsonplaceholder.typicode.com/todos";

      const response = await fetch(url, {
        method: "GET",
      });

      const result = await response.json();
      setIsFetching(false);
      setTodos(result?.slice(0, 20));
    } catch (error) {
      setIsFetching(false);
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <main>
      {isFetching ? (
        <div>Loading...</div>
      ) : todos && todos?.length > 0 ? (
        <>
          {todos?.map((todo) => (
            <ItemList key={todo.id} todoItems={todo} />
          ))}
        </>
      ) : (
        <h1>No Items Available</h1>
      )}
    </main>
  );
}

export default App;
