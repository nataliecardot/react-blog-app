import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>React Blog</h1>
      <div className="links">
        {/* Links tags allow router to intercept request to server, instead matching path against routes */}
        <Link to="/">Home</Link>
        <Link to="/create">New Post</Link>
      </div>
    </nav>
  );
};

export default Navbar;
