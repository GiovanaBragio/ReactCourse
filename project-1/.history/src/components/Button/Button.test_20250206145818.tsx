import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe('Button', () => {
  it('should render the button with the correct text', () => {
    render(<Button text="Click me" onClick={() => {}} />);
    const button = screen.getByRole('button', { name: /'Click me'/i });
    expect(button).toHaveTextContent('Click me');
  });
})