import { Link } from "react-router-dom";

const ProjectItem = (props) => {
  return (
    <>
      <li className="col-12 col-md-6 col-lg-4" data-aos="zoom-in">
        <Link to={props.link}>
          <article className="tile tile-short">
            <div
              className="tile-image"
              style={{
                backgroundImage: `url(${props.image})`,
              }}
            ></div>
          </article>
        </Link>
      </li>
    </>
  );
};

export default ProjectItem;
