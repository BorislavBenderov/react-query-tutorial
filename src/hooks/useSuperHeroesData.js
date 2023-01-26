import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery(
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
};
