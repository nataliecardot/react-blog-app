import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  // useEffect(async () => ...) is not allowed (because an async function returns a promise, whereas useEffect should return nothing or a cleanup function), though you can use an async function inside an effect https://www.robinwieruch.de/react-hooks-fetch-data
  // useEffect(() => {
  //   fetch('http://localhost:8000/blogs')
  //     // res.json() parses JSON response into JavaScript object
  //     .then((res) => res.json())
  //     .then((data) => setBlogs(data));
  // }, []);

  // Async IIFE for useEffect
  useEffect(() => {
    // For viewing loading message
    setTimeout(() => {
      (async function fetchBlogs() {
        let response = await fetch('http://localhost:8000/blogs');
        response = await response.json();
        setBlogs(response);
        setIsPending(false);
      })();
    }, 1000);
    // (async function fetchBlogs() {
    //   let response = await fetch('http://localhost:8000/blogs');
    //   response = await response.json();
    //   setBlogs(response);
    //   setIsPending(false);
    // })();
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Posts" />}
    </div>
  );
};

export default Home;
