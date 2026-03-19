// import typeBgColor from "../../constants/typeBgColors";
import TypeCard from "../TypeCard/TypeCard";

const typeBgColor = {
  normal: {
    color: "#FFFFFF",
    background: "linear-gradient(145deg, #B0B0B0, #8A8A8A, #6C6C6C)",
  },
  fire: {
    color: "#FFFFFF",
    background: "linear-gradient(145deg, #FFB080, #EE8130, #CC5A00)",
  },
  water: {
    color: "#FFFFFF",
    background: "linear-gradient(145deg, #8FB8F7, #6390F0, #3A6AD1)",
  },
  electric: {
    color: "#FFFFFF",
    background: "linear-gradient(145deg, #fff126, #fcd437, #dbbf32)",
  },
  grass: {
    color: "#FFFFFF",
    background: "linear-gradient(145deg, #A8E68A, #7AC74C, #4E9E2A)",
  },
  ice: {
    color: "#FFFFFF",
    background: "linear-gradient(145deg, #C2F5F2, #96D9D6, #6ABEBB)",
  },
  fighting: {
    color: "#FFFFFF",
    background: "linear-gradient(145deg, #E86A60, #C22E28, #8A1C18)",
  },
  poison: {
    color: "#FFFFFF",
    background: "linear-gradient(145deg, #C46FC2, #A33EA1, #7A267A)",
  },
  ground: {
    color: "#FFFFFF",
    background: "linear-gradient(145deg, #F0DFA0, #E2BF65, #B89A40)",
  },
  flying: {
    color: "#FFFFFF",
    background: "linear-gradient(145deg, #C6B4F9, #A98FF3, #7A63D1)",
  },
  psychic: {
    color: "#FFFFFF",
    background: "linear-gradient(145deg, #FF8FB0, #F95587, #D12A5F)",
  },
  bug: {
    color: "#FFFFFF",
    background: "linear-gradient(145deg, #C0E633, #A6B91A, #7A8F12)",
  },
  rock: {
    color: "#FFFFFF",
    background: "linear-gradient(145deg, #D8C25A, #B6A136, #8A7A20)",
  },
  ghost: {
    color: "#FFFFFF",
    background: "linear-gradient(145deg, #9C82C0, #735797, #4E356A)",
  },
  dragon: {
    color: "#FFFFFF",
    background: "linear-gradient(145deg, #9C6CFF, #6F35FC, #4A1CC0)",
  },
  dark: {
    color: "#FFFFFF",
    background: "linear-gradient(145deg, #8C6F60, #705746, #4A3628)",
  },
  steel: {
    color: "#FFFFFF",
    background: "linear-gradient(145deg, #D8D8F0, #B7B7CE, #8A8AA8)",
  },
  fairy: {
    color: "#FFFFFF",
    background: "linear-gradient(145deg, #FFB8D8, #ee8fbf, #d872a5)",
  },
};

const TypeList = ({ types }) => {
  return (
    <>
      {types.map((type, index) => {
        return (
          <TypeCard
            data={type.type.name}
            key={index}
            style={{
              color: typeBgColor[type.type.name].color,
              background: typeBgColor[type.type.name].background,
            }}
          />
        );
      })}
    </>
  );
};

export default TypeList;
