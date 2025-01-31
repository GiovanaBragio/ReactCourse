import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const posts = [{
    id: 1,
    title: 'Hello World',
    body: 'This is my first post',
    userId: 1
  },
  {
    id: 2,
    title: 'Hello World',
    body: 'This is my first post',
    userId: 1
  },
  {
    id: 3,
    title: 'Hello World',
    body: 'This is my first post',
    userId: 1
  }
]

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
