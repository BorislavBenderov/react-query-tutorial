import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Home = () => {
  const { data, isLoading, isError, refetch } = useQuery(["cat"], () => {
    return axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  return (
    <div>
      <h1>Home</h1>
      <p>{isLoading ? "Loading..." : data?.fact}</p>
      <button onClick={refetch}>Update</button>
    </div>
  );
};
