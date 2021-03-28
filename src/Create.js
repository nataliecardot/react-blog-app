import { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Jane');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
  };

  return (
    <div className="create">
      <h2>Add a new post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="blogTitle">Blog title:</label>
        <input
          id="blogTitle"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="blogBody">Blog body:</label>
        <textarea
          id="blogBody"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label htmlFor="blogAuthor"></label>
        <select
          id="blogAuthor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Jane">Jane</option>
          <option value="William">William</option>
        </select>
        <button>Add Post</button>
      </form>
    </div>
  );
};

export default Create;
