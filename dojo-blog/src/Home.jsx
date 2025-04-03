import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <>
      <div className="info">
        {error && <div>{error}</div>}
        {isPending && <div className="loader"></div>}
      </div>
      <div className="home">
        {blogs && <BlogList blogs={blogs} />}
      </div>
    </>
  );
};

export default Home;
