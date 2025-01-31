import { useEffect, useState } from 'react';
import './App.css';
import PostCard from './components/PostCard/PostCard';
import { PostCardProps } from './components/PostCard/PostCard.interface';

function App() {
  const [posts, setPosts] = useState<PostCardProps[]>([]);

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

  return (
    <div className="App">
      {posts.map(post => (
        <PostCard key={post.id} id={post.id} title={post.title} body={post.body} cover={post.cover} />
      )
      )}
    </div>
  );
}

export default App;
