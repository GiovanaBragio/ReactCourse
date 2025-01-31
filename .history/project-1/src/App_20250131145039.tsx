import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

type Post = {
  id: number;
  title: string;
  body: string;
}
function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    loadPosts();
  })
  
  const loadPosts = async() => {
    const urlPost = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(urlPost);
    const postsJson = await response.json();
    setPosts(postsJson);
  }
  
  return (
    <div className="App">
      {posts.map(post => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
