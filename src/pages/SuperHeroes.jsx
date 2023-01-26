import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const SuperHeroes = () => {
  const { data, isLoading } = useQuery(["super-heroes"], () => {
    return axios
      .get("http://localhost:3500/superheroes")
      .then((res) => res.data);
  });
  console.log(data);
  return (
    <div>
      {isLoading
        ? "Loading..."
        : data.map((hero) => <div key={hero.name}>{hero.name}</div>)}
    </div>
  );
};
