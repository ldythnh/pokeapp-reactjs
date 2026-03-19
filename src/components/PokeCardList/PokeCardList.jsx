import PokeCard from "../PokeCard/PokeCard";
import "./PokeCardList.css";
import { Link } from "react-router-dom";

const PokeCardList = ({ pokemons }) => {
  return (
    <div className="pokecard-list">
      {pokemons.map((pokemon) => {
        return (
          <Link to={`/${pokemon.name}`} key={pokemon.name}>
            <PokeCard pokemon={pokemon} />
          </Link>
        );
      })}
    </div>
  );
};

export default PokeCardList;
