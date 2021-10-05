import React, { useEffect, useState } from 'react';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Service.css' ;
const Service = () => {
    const [services , setServices] = useState([]) ;
    useEffect( () => {
        fetch('./fakedata2.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } , [])
    return (
        <div>
            <Header> </Header>
            <h2 className="mt-4 mb-5 text-primary">We have {services.length} Services running right now...  </h2>
            <div className="service-container">
            {
                services.map(service => <Courses
                key ={service.name}
                service={service} 
                >

                </Courses>)
            }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Service;