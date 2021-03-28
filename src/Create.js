import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Jane');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    // JSON Server automatically adds id property
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      // To go back one page. Could use pos. integer to go forward
      // history.go(-1);
      // Redirect to home
      history.push('/');
    });
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
        {!isPending && <button>Add Post</button>}
        {isPending && <button disabled>Adding post...</button>}
      </form>
    </div>
  );
};

export default Create;
