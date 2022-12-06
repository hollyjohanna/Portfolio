import { useAxios } from "use-axios-client";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftShort } from "react-bootstrap-icons";

const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

const RenderedProject = () => {
  // declare params to find id
  const params = useParams();
  //declare endpoint
  const endpoint = `${baseUrl}projects/${params.id}?_embed`;

  const {
    data: project,
    error,
    loading,
  } = useAxios({
    url: endpoint,
  });
  if (loading) return "Loading...";
  if (!project) return "No data...";
  if (project.length === 0) return "No results found!";
  if (error) return "Error!";

  //   console.log(project);

  const checkProjectForLink = (project) => {
    if (project.id === 14) {
      return "https://holly.yoobeestudent.net/";
    }
    if (project.id === 13) {
      return "https://summative3-frontend.vercel.app/";
    }
    if (project.id === 8) {
      return "https://www.figma.com/file/SUPZsobWISPwA4NRnG1Bj1/Summative-%234---Content-Management-Systems?node-id=1%3A2&t=TKEoSiNl0tJb6gDx-0";
    }
  };

  return (
    <div className="single-project-container">
      <h2>{project.title.rendered}</h2>
      <div className="project-content">
        <img
          id="project-img"
          src={project._embedded["wp:featuredmedia"][0].source_url}
          alt={project.title.rendered}
        />
        <a
          href={checkProjectForLink(project)}
          alt={project.title.rendered}
          target="_blank"
          rel="noreferrer"
        >
          <button className="live-site-btn">See Live Site</button>
        </a>
        <div dangerouslySetInnerHTML={{ __html: project.content.rendered }} />
      </div>
      <Link to="/">
        <button>
          <ArrowLeftShort /> Back Home
        </button>
      </Link>
    </div>
  );
};

const ProjectItem = () => {
  return (
    <div id="project-page">
      <RenderedProject />
    </div>
  );
};

export default ProjectItem;
