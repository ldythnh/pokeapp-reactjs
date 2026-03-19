import "./TypeCard.css";

const TypeCard = ({ data, style }) => {
  return (
    <div className="type-card" style={style}>
      {data}
    </div>
  );
};

export default TypeCard;
