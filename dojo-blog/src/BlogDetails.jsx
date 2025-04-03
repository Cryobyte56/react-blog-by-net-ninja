import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const history = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history("/");
    });
  };

  return (
    <div className="blog-details">
      <div className="info">
        {error && <div>{error}</div>}
        {isPending && (
          <div className="loader" style={{ marginTop: "-55px" }}></div>
        )}
      </div>
      {blog && (
        <>
          <img
            src={blog.photo}
            alt="Photo Blog"
            style={{ maxWidth: "400px", borderRadius: "0.5rem" }}
          />
          <article>
            <h2>{blog.title}</h2>
            <h3>Written By: {blog.author}</h3>
            <p className="description">{blog.body}</p>
          </article>

          {/* Delete Button */}
          <button className="delete-btn" onClick={handleClick}>
            <span class="shadow"></span>
            <span class="edge"></span>
            <span class="front text"> Delete Blog </span>
          </button>
        </>
      )}
    </div>
  );
};

export default BlogDetails;
