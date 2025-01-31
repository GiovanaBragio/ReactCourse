import { useEffect, useState } from 'react';
import './Home.css';
import PostCard from '../../components/PostCard/PostCard';
import { PostCardProps } from '../../components/PostCard/PostCard.interface';
import Button from '../../components/Button/Button';

function Home() {
  const [posts, setPosts] = useState<PostCardProps[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const responsePost = await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(json => json.slice(0, 10));
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
    const allPosts = [...posts];
    const nextPosts = allPosts.slice(0, 10);
    setPosts(nextPosts);
  }

  return (
    <div className="Home">
      <div className="Home__posts">
        {posts.map(post => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            cover={post.cover} />
        )
        )}
      </div>
      <Button
        text={'See more'}
        onClick={() => console.log('See more')}
        disabled={isButtonDisabled}
      />
    </div>
  );
}

export default Home;
