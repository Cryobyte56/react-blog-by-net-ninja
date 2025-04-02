import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  return (
    <div className="blog-details">
      <div className="info">
        {error && <div>{error}</div>}
        {isPending && <div className="loader"></div>}
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
        </>
      )}
    </div>
  );
};

export default BlogDetails;
