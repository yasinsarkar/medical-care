import React from 'react';
import './Pricing.css'

const Pricing = () => {
    return (
        <div>
            <h2 className="mt-5">Special Offer</h2>
            <div className="pricing_container container my-5">
            <div className="price_card first_card">
                <h4 className="price_title">Hematology</h4>
                <h3 className="value">255<sup>$</sup></h3>
                <div className="price_des">
                    <p>Hematology</p>
                    <p>Consultation</p>
                    <p>Treatments</p>
                    <p>10 Procedures</p>
                </div>
                <button className="info_btn2">Get Now</button>
            </div>
            <div className="price_card big_card">
                <h4 className="price_title">Neurology</h4>
                <h3 className="value">108<sup>$</sup></h3>
                <div className="price_des">
                    <p>Refraction</p>
                    <p>Retinal Examination</p>
                    <p>External Examination</p>
                    <p>9 Procedures</p>
                </div>
                <button className="info_btn2">Get Now</button>
            </div>
            <div className="price_card last_card">
                <h4 className="price_title">Pathology</h4>
                <h3 className="value">320<sup>$</sup></h3>
                <div className="price_des">
                    <p>Gum Care</p>
                    <p>Consultation</p>
                    <p>Treatments</p>
                    <p>Oral Hygiene</p>
                </div>
                <button className="info_btn2">Get Now</button>
            </div>
        </div>
            
        </div>
    );
};

export default Pricing;