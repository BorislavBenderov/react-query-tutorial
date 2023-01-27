import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

const addSuperHero = (hero) => {
  return axios.post("http://localhost:3500/superheroes", hero);
};

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

export const useAddSuperHeroData = () => {
  return useMutation(addSuperHero);
};
