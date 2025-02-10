import { ButtonProps } from "./Button.interface";
import './Button.styles.css';

const Button = ({ onClick, text, disabled }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}>
      {text}
    </button>
  )
}

export default Button;