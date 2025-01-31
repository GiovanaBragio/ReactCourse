import { useEffect, useState } from 'react';
import './App.css';

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
    const responsePost =  await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
    const responsePhotos = await fetch('https://dummyjson.com/image').then(response => response.json());

    console.log(responsePhotos);
    
    // const postsWithPhotos = responsePost.map((post: Post, index: number) => {
    //   return {
    //     ...post,
    //     cover: responsePhotos[index].url
    //   }
    // })
    // setPosts(postsWithPhotos);
  }

  return (
    <div className="App">
      {posts.map(post => {
        return (
          <div key={post.id}>
            <img src={post.cover} alt={post.title} />
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
