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
            <h2 className="mt-4">we have {services.length} Services</h2>
            {
                services.map(service => <Courses
                key ={service.name}
                service={service} 
                >

                </Courses>)
            }
            <Footer></Footer>
        </div>
    );
};

export default Service;