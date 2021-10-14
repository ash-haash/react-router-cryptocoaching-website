import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';

const Service = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (

        <div>
            <h1 style={{ color: "darkorange", fontSize: "40px", fontFamily: "cursive", padding: "50px", borderBottom: '1px solid lightgray' }} >Our Popular Crypto Services</h1>
            <div style={{ marginRight: '50px', marginLeft: '50px' }} className="row g-5">
                {
                    services.map(service => <SingleService
                        key={service.id}
                        service={service}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default Service;




