import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeCourses from '../HomeCourses/HomeCourses';
import './Home.css'
const Home = () => {
    const [homeCourses , setHomeCourses] = useState([]) ;
    useEffect ( () => {
        fetch('./fakedata.json')
        .then(res => res.json())
        .then ( data => setHomeCourses(data))
    } , [])
    return (
        <div>
            <Header> </Header>
            <div className="container mt-4 mb-5">

                <div className="row banner mt-4 mb-5">
                <div className="col-lg-5">
                    <h1>Welcome to <span className=" text-primary fw-bold"> E- Learning </span></h1>
                    <h5 className="fw-lighter text-primary mb-4 "> Get your wanted course in reasonable price.  </h5>
                     <p>
                     E-learning is a structured course or learning experience delivered electronically; it can also include performance support content.
                        <br /> There are also many different elements that can make up an e-learning program, such as live or pre-recorded lecture content, video, quizzes, simulations, games, activities, and other interactive elements. 
                        <br /> 
                        The popularity of online learning continues to rise. According to ATD’s 2020 State of the Industry report, including e-learning accounted for 56 percent of learning hours used in 2019. <br />
                        Broadly, e-learning falls into two main categories: asynchronous and synchronous. </p>
                </div>
                <div className="col-lg-7">
                    <img className="img-fluid " src="https://elearningindustry.com/wp-content/uploads/2019/07/top-6-eLearning-trends-of-2019.jpg" alt="" />
                </div>
                </div>

                <div className="home-courses">
                     {
                         homeCourses.map(homeCourse => <HomeCourses
                            homeCourse ={homeCourse}
                            key={homeCourse.name}>

                         </HomeCourses>)
                     }
                </div>



            </div>

            
            <Footer></Footer>
            
        </div>
    );
};

export default Home;