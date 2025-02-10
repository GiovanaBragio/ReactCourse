import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe('Button', () => {
  it('should render the button with the correct text', () => {
    render(<Button text="Click me" onClick={() => { }} />);
    const button = screen.getByRole('button', { name: /'Click me'/i });
    expect(button).toBeInTheDocument();
  });

  it('should call the onClick function when the button is clicked', () => {
    const mockClick = jest.fn();
    render(<Button text="Click me" onClick={mockClick} />);

    const button = screen.getByRole('button', { name: /'Click me'/i });

    fireEvent.click(button);

    expect(mockClick).toHaveBeenCalledTimes(1);
  });
})