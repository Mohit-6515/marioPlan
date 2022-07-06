import { useParams } from "react-router";
const ProjectDetails = (props) => {
  const { id } = useParams();
  return (
    <div className="container section project-details">
      <div className="card z-depth-8">
        <div className="card-content">
          <div className="card-content">
            <span className="card-title">Project title - {id}</span>
            <p>lorem ipsum </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by a</div>
            <div>9th june, 4pm</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
