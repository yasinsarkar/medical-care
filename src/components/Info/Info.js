import React from 'react';
import './Info.css'

const Info = () => {
    return (
        <div className='container p-5'>
            <h2 className="mb-4 info_title">NEED INFO?</h2>
            <div className="row">
                <div className="col-md-4 g-2 info_bg info_card text-start p-5">
                    <h2 className="info_card_title">1-23456789</h2>
                    <h5>GENERAL SERVICE</h5>
                    <p>Our specialists’ top priority is you. Which means you get the answers and assurance you deserve with accuracy you can trust.</p>
                    <button className="info_btn">See More</button>
                </div>
                <div className="col-md-4 g-2 info_bg_middle info_card text-start p-5">
                <i className="far fa-calendar-alt fa-3x mb-3"></i>
                    <h5>DO YOU WANT TO MAKE AN APPOINTMENT</h5>
                    <p>COVID-19 vaccination options and guidelines vary widely by location and may change over time. See the latest information specific to Mayo Clinic campuses:</p>
                    <button className="info_btn">See More</button>
                </div>
                <div className="col-md-4 g-2 info_bg info_card text-start p-5">
                <i className="far fa-clock fa-3x mb-3"></i>
                    <h5>OPENING HOURS</h5>
                    <p>6am to 10pm </p>
                    <p>open every day</p>
                    <button className="info_btn">See More</button>
                </div>

            </div>
            
        </div>
    );
};

export default Info;