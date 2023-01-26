import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export const SuperHeroes = () => {
  const onSuccess = (data) => {
    console.log("success", data);
  };

  const onError = (error) => {
    console.log("error", error);
  };

  const { data, isLoading, isError, error } = useSuperHeroesData(
    onSuccess,
    onError
  );

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      {isLoading
        ? "Loading..."
        : data.map((hero) => (
            <div key={hero.id}>
              <Link to={`/super-heroes/${hero.id}`}>{hero.name}</Link>
            </div>
          ))}
    </div>
  );
};
