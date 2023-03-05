import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const Blogdetails = () => {
  //Getting is from the useParams hook
  const { id } = useParams();
  const [data, isPending, error] = useFetch(
    `http://localhost:8000/blogs/` + id
  );
  const blog = data;

  //assigning useHistory to a varible
  const history = useHistory();

  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("Blog deleted");
      history.push("/");
    });
  };

  return (
    <div className="Blogdetails">
      <p>{isPending && <span className="loader"></span>}</p>
      <p>{error && <div>{error}</div>}</p>
      <p>
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <p>{blog.body}</p>
            <button onClick={handleClick}> Delete Blog</button>
          </article>
        )}
      </p>
    </div>
  );
};

export default Blogdetails;
