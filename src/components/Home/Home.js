import React from 'react';
import Pricing from '../../Pricing/Pricing';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Info from '../Info/Info';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>            
            <Banner></Banner>
            <Services></Services>
            <Info></Info>
            <Pricing></Pricing>
    
        </div>
    );
};

export default Home;