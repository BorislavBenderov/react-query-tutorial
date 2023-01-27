import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useAddSuperHeroData,
  useSuperHeroesData,
} from "../hooks/useSuperHeroesData";

export const SuperHeroes = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
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

  const { mutate: addHero } = useAddSuperHeroData();

  const handleAddHeroClick = (e) => {
    e.preventDefault();

    const hero = {
      name,
      alterEgo,
    };

    addHero(hero);

    setName("");
    setAlterEgo("");
  };

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>
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
