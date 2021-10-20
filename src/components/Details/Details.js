import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css'

const Details = () => {
    const {serviceId}= useParams();
    const [details, setDetails] = useState([])

    useEffect(()=>{
        fetch('/services.JSON')
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])

    const item =details?.find(pd =>pd.key === serviceId)
    console.log(item)
    return (
        <div>
            <div className="contianer-fluid">
                <div className="row ">
                    <h2 className="my-5">Treatment Details</h2>
                <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <img className="img-fluid" src={item?.img} alt="" />
                        <h2>{item?.name}</h2>
                        <p>Description:{item?.description}</p>
                        <p className="fw-bold">Cost:${item?.price}</p>
                    </div>                
                <div className="col-md-4"></div>
                </div>
            </div>
                
           
            
        </div>
    );
};

export default Details;