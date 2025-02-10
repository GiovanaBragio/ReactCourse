import { render, screen } from "@testing-library/react";
import InputText from "./InputText";
import userEvent from "@testing-library/user-event";

describe('InputText', () => {
  it('should have a value of searchValue', () => {
    render(<InputText onChange={() => { }} value={'testing'} />);
    const input = screen.getByPlaceholderText("Search") as HTMLInputElement;
    
    expect(input.value).toBe('testing');
    
  });
  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<InputText onChange={fn} value={'testing'} />);
    const input = screen.getByPlaceholderText("Search") as HTMLInputElement;
    const value = 'testing';
    userEvent.type(input, value);
    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });
  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<InputText onChange={fn} value={'testing'} />);
    expect(container).toMatchSnapshot();
  });
});