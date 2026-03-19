import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import DetailPokemon from "./pages/DetailPokemon/DetailPokemon";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:pokeName" element={<DetailPokemon />} />
      </Routes>
    </div>
  );
};

export default App;
