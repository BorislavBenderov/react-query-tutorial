import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:3500/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:3500/friends");
};

export const ParallelQueries = () => {
  const { data: superHeroes } = useQuery(["super-heroes"], fetchSuperHeroes);
  const { data: friends } = useQuery(["friends"], fetchFriends);
  return <div>ParallelQueries</div>;
};
