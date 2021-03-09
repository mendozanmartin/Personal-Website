const ExperienceItem = (props) => {
  return (
    <>
      <div className="container" data-aos="zoom-out">
        <div className="boxed p-2 scaling mb-5">
          <div className="d-flex m-0 p-0 justify-content-between">
            <div className="col-8 col-md-10">
              <h3 className="p-0 m-0">{props.position}</h3>
              <h5>{props.company}</h5>
            </div>
            <img className="col-4 col-md-2 icon" src={props.image} alt="" />
          </div>
          <div className="row">
            <div className="col-md-10 col-sm-12">
              <ul>
                {props.text.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceItem;
