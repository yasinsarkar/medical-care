import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [service, setService] = useState([])

    useEffect(() =>{
        fetch("./services.JSON")
        .then(res => res.json())
        .then(data =>setService(data))
    })


    return (
        <div className="container">
            <h2 className="my-3">HOW CAN WE HELP YOU?</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 ">
                {
                    service.map(service=><Service
                    key={service.key}
                    service={service}
                    
                    ></Service>)
                }
            </div>
           
            
        </div>
    );
};

export default Services;