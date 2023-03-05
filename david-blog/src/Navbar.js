import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <h2> Gravity </h2>{" "}
      <div className="links">
        <Link to="/"> Home </Link>{" "}
        <Link to="/create" className="new-blog">
          New Blog{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
};

export default Navbar;
