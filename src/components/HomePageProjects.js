import { useAxios } from "use-axios-client";
import { Link } from "react-router-dom";

const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

const AllProjects = () => {
  const endpoint = `${baseUrl}projects?_embed`;
  const {
    data: projects,
    error,
    loading,
  } = useAxios({
    url: endpoint,
  });
  // check if the services posts have been returned
  if (loading) return <p>Loading...</p>;
  if (!projects) return "No posts found";
  if (error) return "Error";
  console.log(projects);

  const showProjects = projects.map((post, index) => {
    return (
      <div className="project-card" key={index}>
        <h2>{post.title.rendered}</h2>
        {/* <div
            className="content"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          ></div> */}
        <img
          className="featured-img"
          src={post._embedded["wp:featuredmedia"][0].source_url}
          alt={post.title.rendered}
        ></img>
        <Link to={`/projects/${post.id}`}>
          <button>See Project</button>
        </Link>
      </div>
    );
  });
  return showProjects;
};

const HomePageProjects = () => {
  return (
    <div id="hm-pg-projects-container">
      <h2>Recent Projects</h2>
      <div id="projects-container">
        <AllProjects />
      </div>
    </div>
  );
};

export default HomePageProjects;
