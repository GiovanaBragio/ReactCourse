import { InputTextProps } from "./InputText.inerface";

const InputText = ({ value, onChange }: InputTextProps) => {
    return (
        <input
            className="inputText"
            type="text"
            placeholder="Search"
            value={value}
            onChange={onChange} />
    )
}

export default InputText;