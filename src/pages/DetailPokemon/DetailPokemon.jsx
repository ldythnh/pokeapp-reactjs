import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import "./DetailPokemon.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TypeList from "../../components/TypeList/TypeList";

// Mapping of Pokémon stat keys to readable labels
const statsLabel = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Sp. Attack",
  "special-defense": "Sp. Defense",
  speed: "Speed",
};

// Mapping of language codes to readable labels
const langLabel = {
  "ja-hrkt": "Japanese",
  "ja-roma": "Japanese Romanji",
  ko: "Korean",
  "zh-hant": "Chinese Traditional",
  "zh-hans": "Chinese Simplified",
  de: "German",
};

const DetailPokemon = () => {
  // Extract Pokémon name from the URL parameters
  const { pokeName } = useParams();

  // store Pokémon details
  const [pokemonData, setpokemonData] = useState(null);
  // store species information: names in other languages
  const [speciesData, setspeciesData] = useState(null);

  // Fetch Pokémon details and species info when component mounts or pokeName changes
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const urlInfo = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
        const urlPokeNames = `https://pokeapi.co/api/v2/pokemon-species/${pokeName}`;

        // Fetch both endpoints in parallel
        const [pokeRes, pokeNamesRes] = await Promise.all([
          fetch(urlInfo),
          fetch(urlPokeNames),
        ]);

        const pokeData = await pokeRes.json();
        const pokeNames = await pokeNamesRes.json();

        setpokemonData(pokeData);
        setspeciesData(pokeNames);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemons();
  }, [pokeName]);

  if (!pokemonData) {
    return <p>Loading...</p>;
  }

  // Get Pokémon's image based on ID
  const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonData.id}.png`;

  return (
    <>
      <Header />
      <h1 className="pokemon-detail-name">
        {pokemonData.name}
        <span className="pokemon-detail-id">
          #{pokemonData.id.toString().padStart(4, "0")}
        </span>
      </h1>
      <div className="pokemon-detail">
        <img src={pokeImg} alt="" className="pokemon-detail-img" />

        <div className="pokemon-detail-info">
          {/* Profile */}
          <section className="pokemon-detail-profile">
            <h2>Profile</h2>
            <dl className="pokemon-detail-list">
              <div className="pokemon-detail-row">
                <dt className="pokemon-detail-label">Height</dt>
                <dd className="pokemon-detail-value">
                  {pokemonData.height / 10 || 0} m
                </dd>
              </div>

              <div className="pokemon-detail-row">
                <dt className="pokemon-detail-label">Weight</dt>
                <dd className="pokemon-detail-value">
                  {pokemonData.weight / 10 || 0} kg
                </dd>
              </div>

              <div className="pokemon-detail-row">
                <dt className="pokemon-detail-label">Type</dt>
                <dd className="pokemon-detail-value">
                  <TypeList types={pokemonData.types} />
                </dd>
              </div>
            </dl>
          </section>
          {/* Base stats */}
          <section className="pokemon-detail-basestats">
            <h2>Base stats</h2>

            <dl className="pokemon-detail-list">
              {pokemonData.stats.map((stat, index) => {
                return (
                  <div className="pokemon-detail-row" key={index}>
                    <dt className="pokemon-detail-label">
                      {statsLabel[stat.stat.name]}
                    </dt>
                    <dd className="pokemon-detail-value">{stat.base_stat}</dd>
                  </div>
                );
              })}
            </dl>
          </section>
          {/* Name */}
          <section className="pokemon-detail-other-languages">
            <h2>Other languages</h2>
            <dl className="pokemon-detail-list">
              {speciesData.names
                .filter((n) => langLabel[n.language.name])
                .map((name, index) => {
                  return (
                    <div className="pokemon-detail-row" key={index}>
                      <dt className="pokemon-detail-label">
                        {langLabel[name.language.name]}
                      </dt>
                      <dd className="pokemon-detail-value">{name.name}</dd>
                    </div>
                  );
                })}
            </dl>
          </section>
        </div>
      </div>
      <Link to={"/"} className="pokemon-detail-back">
        <Button label={<i class="fa-solid fa-circle-left"></i>} />
      </Link>
    </>
  );
};

export default DetailPokemon;
