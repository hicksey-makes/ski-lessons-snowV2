import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function InstructorDetails() {
  const [instructor, setInstructor] = useState({});
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(`../../../InstructorDetailsid${id}.json`)
      .then((response) => response.json())
      .then((data) => {
        setInstructor(data);
      });
  }, []);

  return (
    <div className="highlight grow">
      <Link to="/about/" className="btn-light btn-outer btn-sm btn text-dark ml-4" style={{width:80 + "px"}}>Back</Link>
      {instructor && (
        <div className="container">
          <div className="card shadow border-warning bg-dark text-white mb-5 ml-5 mt-4" style={{width:275 + 'px'}}>
            <img className="card-img-top object-f" src={instructor.image} style={{height:220 + "px"}} alt="" />
            <div className="card-body mt-n2 mb-2">
              <h5 className="card-title display-3 mb-3 text-center">{instructor.name}</h5>
              <h5 className="card-text mb-2 text-center">Style: <small>{instructor.description}.</small></h5>
              <h5 className="card-text mb-2 text-center">Expertise: <small>{instructor.skill}.</small></h5>
              <h5 className="card-text mb-2 text-center">Years Riding: <small>{instructor.years}.</small></h5>
              <h5 className="card-text text-center">Other Interests: <small>{instructor.other}.</small></h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
