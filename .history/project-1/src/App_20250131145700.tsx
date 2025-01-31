import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

type Post = {
  id: number;
  title: string;
  body: string;
  photos: any[];
}
function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    loadPosts();
  })

  const loadPosts = async () => {
    const responsePost = fetch('https://jsonplaceholder.typicode.com/posts');
    const responsePhotos = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([
      responsePost, responsePhotos
    ]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsWithPhotos = postsJson.map((post: Post, index: number) => {
      return {
        ...post,
        photos: photosJson[index]
      }
    })
    setPosts(postsWithPhotos);
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
