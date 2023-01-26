import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/super-heroes">Super Heroes</Link>
      <Link to="/rq-super-heroes">RQ Super Heroes</Link>
    </div>
  );
};
