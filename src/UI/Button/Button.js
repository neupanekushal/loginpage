import "./Button.css";

const Button = (props) => {
  return (
    <button
      className="button"
      type={props.type || "button"}
      onClick={props.buttonClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
