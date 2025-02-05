import { InputTextProps } from "./InputText.inerface";

const InputText = ({ value, onChange }: InputTextProps) => {
    return (
        <input
            type="text"
            placeholder="Search"
            value={value}
            onChange={onChange} />
    )
}

export default InputText;