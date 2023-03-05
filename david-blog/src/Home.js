import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const [data, Loading, error] = useFetch("http://localhost:8000/blogs");

  const blogs = data;
  return (
    <div className="Home">
      {" "}
      {error && <div> {error} </div>}{" "}
      {Loading && <span className="loader"> </span>}{" "}
      {blogs && <Bloglist blogs={blogs} title="All Blogs..." />}{" "}
    </div>
  );
};

export default Home;
