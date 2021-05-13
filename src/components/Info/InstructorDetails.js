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
      <Link to="/about/">Back</Link>
      {instructor && (
        <div className="card" style={{width:400 + 'px'}}>
          <img className="card-img-top" src={instructor.image} alt="" />
          <div className="card-body">
            <h2 className="card-title">{instructor.name}</h2>
            <p className="card-text">Style: {instructor.description}</p>
            <p className="card-text">Expertise: {instructor.skill}</p>
          </div>
        </div>
      )}
    </div>
  );
}
