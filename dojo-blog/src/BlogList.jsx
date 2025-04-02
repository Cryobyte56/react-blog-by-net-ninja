import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="card" key={blog.id}>
          <Link
            to={`/blogs/${blog.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <img src={blog.photo} className="card__image" alt="Blog Image" />

            <div class="card__content">
              <p datetime="2021-03-30" class="card__author">
                Written by {blog.author}
              </p>
              <span class="card__title">{blog.title}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
