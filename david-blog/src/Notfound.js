import { useHistory } from "react-router-dom";

const Notfound = () => {
  const history = useHistory();
  return (
    <div className="Notfound">
      <h2>Page not found</h2>
      <p>please input the right directory</p>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default Notfound;
