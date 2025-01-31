import { useEffect, useState } from 'react';
import './App.css';
import PostCard from './components/PostCard/PostCard';

type Post = {
  id: number;
  title: string;
  body: string;
  cover: string;
}
function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const responsePost = await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
    const responsePhotos = await fetch('https://dummyjson.com/image/150');


    console.log(responsePhotos);

    const postsWithPhotos = responsePost.map((post: Post, index: number) => {
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
