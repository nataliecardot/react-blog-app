import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // Async IIFE for useEffect
  useEffect(() => {
    // Timeout for viewing loading message longer
    setTimeout(() => {
      (async () => {
        try {
          let response = await fetch('http://localhost:8000/blogs');
          if (!response.ok) {
            // Will be catched below with the message attached to it
            throw Error('Could not fetch data for that resource');
          }
          response = await response.json();
          setBlogs(response);
          setIsPending(false);
          setError(null);
        } catch (err) {
          setIsPending(false);
          setError(err.message);
        }
      })();
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Posts" />}
    </div>
  );
};

export default Home;
