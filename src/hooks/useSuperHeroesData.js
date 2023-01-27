import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    onSuccess: () => {
      queryClient.invalidateQueries(["super-heroes"]);
    },
  });
};
