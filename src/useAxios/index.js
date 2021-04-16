import React from "react";
import useAxios from "./useAxios";

export const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://cors-anywhere.herokuapp.com/yts.am/api/v2/list_movies.json"
  });
  console.log(`Loading: ${loading}\nError:${error}\nData:${JSON.stringify(data)}`);
  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};