import React, { useEffect, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Hservice from '../Hservice/Hservice';

const Home = () => {

    const [hservices, setHservices] = useState([]);
    useEffect(() => {
        fetch('./serviceHome.json')
            .then(res => res.json())
            .then(data => setHservices(data))
    }, [])

    return (
        <div>
            <h2 style={{ color: "black", fontSize: "40px", fontFamily: 'raleway', paddingTop: "50px", }} >Merging the human element with the crypto revolution</h2>
            <h4 style={{ color: "darkorange", fontFamily: 'raleway', padding: "20px", }} >Bringing the human element to crypto, encouraging mass adoption, and offering solutions.</h4>
            <h5 style={{ color: "darkorange", fontFamily: 'raleway', }}>Consider us part of the Bitcoin marketing team.</h5>
            <h4 style={{ color: "darkorange", fontFamily: 'raleway', padding: "20px", }} >Are you ready to join the Bitcoin revolution?</h4>

            <div style={{ margin: '50px', fontWeight: 'bold', }} >
                <ul style={{ color: 'darkorange', cursor: 'pointer' }} >
                    <li style={{ padding: '10px' }}>WHAT IS CRYPTO?</li>
                    <li style={{ padding: '10px' }}>WHERE TO BUY?</li>
                    <li style={{ padding: '10px' }}>HOW TO BUY?</li>
                    <li style={{ padding: '10px' }}>WHERE TO STORE?</li>
                    <li style={{ padding: '10px' }}>ABOUT US</li>
                    <li style={{ padding: '10px' }}>GET IN TOUCH</li>
                </ul>
            </div>

            <div style={{ marginRight: '50px', marginLeft: '50px', marginBottom: '30px' }} className="row">
                {
                    hservices.map(hservice => <Hservice
                        key={hservice.id}
                        hservice={hservice}
                    ></Hservice>)
                }
            </div>

        </div>
    );
};

export default Home;