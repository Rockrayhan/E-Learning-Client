import React from 'react';
import './Courses.css' ;
const Courses = (props) => {
    const {name , price , img} = props.service ;
    return (
        <div className='mb-5 col-lg-6'>
           
          
          <img className="img-fluid course-img" src={img} alt="" />
          <h5 className="mt-2"> Course Name : {name}</h5>
          <p className="fw-bold"> price : {price} </p>
          
</div>

        
    );
};

export default Courses;


