import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </ul>
    </nav>
  );
};

export default Navigation;
