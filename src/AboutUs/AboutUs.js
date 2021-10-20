import React from 'react';
import './AboutUs.css';
import img from '../images/pexels-mart-production-7089401.jpg'

const AboutUs = () => {
    return (
        <div>
            <div className="container about ">
                <div className="row my-5 d-flex align-items-center justify-content-center">
                    <div className="col-md-6">
                        <h2>About Us</h2>
                        <p>Mayo Clinic Laboratories is a global reference laboratory that helps health care providers worldwide advance patient care, strengthen your practice, and broaden access to specialized testing.

Through our partnerships with clinicians at Mayo Clinic and health care providers around the world, we are able to offer the most sophisticated test catalog in the world. It is because of these daily collaborations that our subspecialized laboratories continue to be a critical component to patient care at Mayo Clinic.</p>
                    </div>
                    <div className="col-md-6 ">
                        <img src={img} alt="" />
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default AboutUs;