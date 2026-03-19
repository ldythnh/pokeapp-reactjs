import "./Button.css";

const Button = ({ label, onClick, className }) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {label}
    </button>
  );
};

export default Button;
