import { render, screen } from '@testing-library/react';
import Post from './Post';
import { PostCardProps } from '../PostCard/PostCard.interface';

const props: PostCardProps[] = [
  {
    id: 1,
    title: 'title 1',
    body: 'body 1',
    cover: 'img/img1.png',
  },
  {
    id: 2,
    title: 'title 2',
    body: 'body 2',
    cover: 'img/img2.png',
  },
  {
    id: 3,
    title: 'title 3',
    body: 'body 3',
    cover: 'img/img3.png',
  },
];


describe('<Posts />', () => {
  it('should render posts', () => {
    render(<Post nextPosts={10} posts={props} />);
    expect(screen.getByRole('heading', { name: /title 2/i })).toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText(/body/i)).toHaveLength(3);
    expect(screen.getByRole('img', { name: /title 3/i })).toHaveAttribute('src', 'img/img3.png');
  });

  it('should not render posts', () => {
    render(<Post nextPosts={0} posts={props} />);
    expect(screen.queryByRole('heading', { name: /title/i }))
      .not.toBeInTheDocument();
  });
}); 