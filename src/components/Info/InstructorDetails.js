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
    <div>
      <Link to="/about/" className="btn-primary btn ml-4" style={{width:80 + "px"}}>Back</Link>
      {instructor && (
        <div className="container">
        <div className="card mb-5 ml-5 mt-3" style={{width:450 + 'px'}}>
          <img className="card-img-top" src={instructor.image} alt="" />
          <div className="card-body">
            <h3 className="card-title display-2 mb-4 text-center">{instructor.name}</h3>
            <h4 className="card-text mb-2 text-center">Style: {instructor.description}.</h4>
            <h4 className="card-text mb-2 text-center">Expertise: {instructor.skill}.</h4>
            <h4 className="card-text mb-2 text-center">Years Riding: {instructor.years}.</h4>
            <h4 className="card-text text-center">Other Interests: {instructor.other}.</h4>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}
