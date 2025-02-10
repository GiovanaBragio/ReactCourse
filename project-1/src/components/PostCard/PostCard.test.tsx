import { render, screen } from "@testing-library/react";
import PostCard from "./PostCard";
import { PostCardProps } from "./PostCard.interface";

const postCardPropsMock: PostCardProps = {
  title: 'title 1',
  body: 'body 1',
  id: 1,
  cover: 'img/img.png'
};

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...postCardPropsMock} />);
    expect(screen.getByAltText(/title 1/i))
      .toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: 'title 1' })).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });  
});