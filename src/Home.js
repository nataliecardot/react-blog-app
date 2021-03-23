import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: 'My new website',
      body: 'lorem ipsum...',
      author: 'William',
      id: 1,
    },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Jane', id: 2 },
    {
      title: 'Web dev top tips',
      body: 'lorem ipsum...',
      author: 'Jane',
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Posts" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === 'Jane')}
        title="Jane's Posts"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
