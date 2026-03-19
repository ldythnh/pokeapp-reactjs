import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import PokeCardList from "../../components/PokeCardList/PokeCardList";
import "./Home.css";
import Button from "../../components/Button/Button";

const Home = () => {
  // store the list of Pokémon
  const [pokemons, setPokemons] = useState([]);
  // control how many Pokémon are fetched
  const [limit, setLimit] = useState(50);

  // Increase the limit by 50 when "Load more" is clicked
  const handleLoadMore = () => {
    const newLimit = limit + 50;
    setLimit(newLimit);
  };

  // Fetch Pokémon data whenever the limit changes
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data.results);

        // Update state with the fetched Pokémon list
        setPokemons(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemons();
  }, [limit]);

  return (
    <div className="content">
      <Header />
      <PokeCardList pokemons={pokemons} />

      <Button
        label={"Load more"}
        onClick={handleLoadMore}
        className={"loadmore-btn"}
      />
    </div>
  );
};

export default Home;
