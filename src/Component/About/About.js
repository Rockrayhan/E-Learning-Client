import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css'
const About = () => {
    return (
        <div>
            <Header> </Header>
            <div className="container mt-5 mb-5">
                <h1 className="text-primary mb-5"> About us </h1>
                <hr />
                <h3>Our story</h3>
                <p>  E-Learnin is an helpful training method for various sectors like Media and Publishing, Healthcare, Automotive, Information Security and Continuing Medical Education. In this article, you can learn about 5 successful E-Learning implementations supported by Docebo via the Docebo’s Learning Management System. 
                    <br />
                    Trinity Mirror, with an award winning portfolio of newspapers, websites and digital products, is one of the UK’s largest multimedia companies employing over 5000 team members in over sixty locations across the UK.
                    <br />
                    <br />
The company wanted to offer unique online training for learners at every level in the business, on any browser, operating system, or device of their choice. Here’s a quote from Trinity Mirror: “For us Docebo just made perfect sense. We had recently migrated to Google Apps, so our need for an SSO solution was high on the wish list for our learners. We learned that this product was easy to integrate and was well rated within the Google Apps community. </p>
                

            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;