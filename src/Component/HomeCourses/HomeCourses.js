import React from 'react';
import './HomeCourses.css' ;
const HomeCourses = (props) => {
    const {name , price , img} = props.homeCourse
    return (
        <div className="home-course-card ">
            <img className="img-fluid home-course-img" src={img} alt="" />
            <h5> Course name : {name}</h5>
            <p className="fw-bold"> Price : {price}</p>
        </div>
    );
};

export default HomeCourses;