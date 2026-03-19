export const pokemonTypeColors = {
  normal: {
    color: "#4d4c4c",
    background: "#c2c2bd",
  },
  fire: {
    color: "#FFFFFF",
    background: "#ee5630",
  },
  water: {
    color: "#FFFFFF",
    background: "#6390F0",
  },
  electric: {
    color: "#000000",
    background: "#f7ea2c",
  },
  grass: {
    color: "#FFFFFF",
    background: "#7AC74C",
  },
  ice: {
    color: "#000000",
    background: "#a3f7f2",
  },
  fighting: {
    color: "#FFFFFF",
    background: "#C22E28",
  },
  poison: {
    color: "#FFFFFF",
    background: "#A33EA1",
  },
  ground: {
    color: "#FFFFFF",
    background: "#E2BF65",
  },
  flying: {
    color: "#000000",
    background: "#A98FF3",
  },
  psychic: {
    color: "#FFFFFF",
    background: "#F95587",
  },
  bug: {
    color: "#000000",
    background: "#A6B91A",
  },
  rock: {
    color: "#FFFFFF",
    background: "#B6A136",
  },
  ghost: {
    color: "#FFFFFF",
    background: "#735797",
  },
  dragon: {
    color: "#FFFFFF",
    background: "#6F35FC",
  },
  dark: {
    color: "#FFFFFF",
    background: "#705746",
  },
  steel: {
    color: "#000000",
    background: "#B7B7CE",
  },
  fairy: {
    color: "#000000",
    background: "#ffc0cb",
  },
};

export function getPokedexNumber(index) {
  return index + 1;
}

export function getFullPokedexNumber(index) {
  return `${index + 1 > 99 ? index + 1 : index + 1 > 9 ? `0${index + 1}` : `00${index + 1}`}`;
}
