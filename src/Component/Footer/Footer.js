import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        //    <div className="container row d-flex justify-content-center">
        //         <div className="footer col-12 text-center">
        //         <h3 className="mt-5"> Register for free    <button className="btn btn-danger ms-5"> SIGN UP ! </button> </h3>

        //         <p className="mt-5"> 2021 Copyright by E- Learning  </p>

        //     </div>
        //    </div>



        <div style={{backgroundColor:'lightblue'}}>


            <footer class="page-footer font-small unique-color-dark pt-4">
                <div class="container">
                    <ul class="list-unstyled list-inline text-center py-2">
                        <li class="list-inline-item">
                            <h5 class="mb-1">Register for free</h5>
                        </li>
                        <li class="list-inline-item">
                            <a href="#!" class="btn btn-primary btn-rounded">Sign up!</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-copyright text-center py-3">© 2021 Copyright by E- Learning
                    
                </div>
            </footer>
        </div>

    );
};

export default Footer;