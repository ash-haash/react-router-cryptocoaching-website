import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
    const error = <FontAwesomeIcon icon={faFrown} />
    return (
        <div>
            <p style={{ color: "lightgray", fontSize: "300px", marginTop: "50px" }}>{error}</p>
            <h1 style={{ color: 'gray', fontSize: "80px", marginTop: "20px" }}>404</h1>
            <h1 style={{ color: 'gray', fontSize: "", marginTop: "10px" }}>Page Not Found</h1>
            <p style={{ color: 'gray', fontFamily: 'sans-serif', marginTop: "20px", marginBottom: "60px" }}>The page you are looking for doesn't exist or an other error occurred.<br></br>Go back, or head over to navigation bar to choose a new direction.</p>
        </div>
    );
};

export default NotFound;