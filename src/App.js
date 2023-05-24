import React from 'react';
import './App.css';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';

export default function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostsList />
    </main>
  );
}
