import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe('Button', () => {
  it('should render the button with the correct text', () => {
    render(<Button text="Load more" onClick={() => { }} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should call the onClick function when the button is clicked', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });

    userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when the disabled prop is true', () => {
    render(<Button text="Click me" onClick={() => { }} disabled />);

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeDisabled();
  });

  it('should not call onClick when the button is disabled', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} disabled />);
    const button = screen.getByRole('button', { name: /load more/i });

    userEvent.click(button);
    expect(fn).not.toHaveBeenCalled();
  });
});
