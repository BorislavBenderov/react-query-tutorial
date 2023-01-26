import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const SuperHeroes = () => {
  const onSuccess = (data) => {
    console.log("success", data);
  };

  const onError = (error) => {
    console.log("error", error);
  };

  const { data, isLoading, isError, error } = useQuery(
    ["super-heroes"],
    () => {
      return axios
        .get("http://localhost:3500/superheroes")
        .then((res) => res.data);
    },
    {
      onSuccess,
      onError,
    }
  );

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      {isLoading
        ? "Loading..."
        : data.map((hero) => <div key={hero.name}>{hero.name}</div>)}
    </div>
  );
};
