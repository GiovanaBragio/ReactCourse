import { useEffect, useState } from 'react';
import './Home.css';
import { PostCardProps } from '../../components/PostCard/PostCard.interface';
import Button from '../../components/Button/Button';
import InputText from '../../components/InputText/InputText';
import Post from '../../components/Post/Post';

function Home() {
  const [posts, setPosts] = useState<PostCardProps[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [nextPosts, setNextPosts] = useState(10);
  const [search, setSearch] = useState('');
  const filterPosts = !!search ? posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase())) : posts;

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

  return (
    <div className="Home">
      <div className="Home__search">
        <h1>Search Posts: {search}</h1>
        <InputText
          value={search}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)} />
      </div>
      {filterPosts.length ? <Post posts={filterPosts} nextPosts={nextPosts} /> : <p>Não existem posts</p>}
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
