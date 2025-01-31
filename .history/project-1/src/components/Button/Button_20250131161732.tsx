import { ButtonProps } from "./Button.interface";

const Button = ({onClick, text}: ButtonProps) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

export default Button;