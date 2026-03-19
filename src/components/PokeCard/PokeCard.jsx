import "./PokeCard.css";
import { useEffect, useState } from "react";
import TypeList from "../TypeList/TypeList";

const PokeCard = ({ pokemon }) => {
  const [selectedPokemons, setSelectedPokemons] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;
        const res = await fetch(url);
        const data = await res.json();

        setSelectedPokemons(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemons();
  }, [pokemon.name]);

  if (!selectedPokemons) {
    return;
  }

  const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${selectedPokemons.id}.png`;

  return (
    <div className="pokecard">
      <img src={pokeImg} alt="" className="pokecard-img" />
      <p className="pokecard-id">
        #{selectedPokemons.id.toString().padStart(4, "0")}
      </p>
      <div className="pokecard-type">
        <TypeList types={selectedPokemons.types} />
      </div>
      <p className="pokecard-name">{selectedPokemons.name}</p>
    </div>
  );
};

export default PokeCard;
