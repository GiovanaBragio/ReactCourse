import { useEffect, useState } from 'react';
import './Home.css';
import PostCard from '../../components/PostCard/PostCard';
import { PostCardProps } from '../../components/PostCard/PostCard.interface';
import Button from '../../components/Button/Button';
import InputText from '../../components/InputText/InputText';

function Home() {
  const [posts, setPosts] = useState<PostCardProps[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [nextPosts, setNextPosts] = useState(10);
  const [search, setSearch] = useState('');
  const filterPosts = posts;

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const responsePost = await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
    const responsePhotos = await fetch('https://dummyjson.com/image/150');

    const postsWithPhotos = responsePost.map((post: PostCardProps, index: number) => {
      return {
        ...post,
        cover: responsePhotos.url
      }
    })

    setPosts(postsWithPhotos);
  }

  const seeMore = () => {
    let newNextPosts = nextPosts + 10;
    if (newNextPosts > 100) {
      setIsButtonDisabled(true);
    }
    setNextPosts(newNextPosts);
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);

    if (event.target.value === '') {

    }
  }

  return (
    <div className="Home">
      <InputText
        value={search}
        onChange={handleSearch} />
      <div className="Home__posts">
        {posts.slice(0, nextPosts).map(post => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            cover={post.cover} />
        )
        )}
      </div>
      {!search && (
        <Button
          text={'See more'}
          onClick={seeMore}
          disabled={isButtonDisabled}
        />
      )}
    </div>
  );
}

export default Home;
