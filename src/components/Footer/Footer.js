import React from 'react';

const Footer = () => {
    const footerStyle = {
        background: "#252525",
        paddingBottom: '50px'
    }
    const footerTitle = {
        color: 'darkorange',
        fontFamily: 'cursive'
    }
    return (
        <div style={footerStyle}>
            <h2>This is our Footer Section</h2>
            <div className="row">
                <div className="col-4">
                    <h2 style={footerTitle} >Who We Are</h2>
                    <p style={{ color: 'white', padding: '30px' }}>We built Crypto Coach as a knowledge platform to demystify the often daunting world of cryptocurrency and help people understand the investments and technology we’re all so enthusiastic about. </p>
                </div>

                <div className="col-4">
                    <h2 style={footerTitle} >Subscribe</h2><br></br>
                    <p style={{ color: 'white' }} >Your Name (required)</p>
                    <input type="text" />
                    <p style={{ color: 'white' }} >Your Email (required)</p>
                    <input type="text" />
                </div>

                <div className="col-4">
                    <h2 style={footerTitle}>Contact us</h2>
                    <p style={{ color: 'white', padding: '30px' }}>Gateway 3
                        103-2031 McCallum Road
                        Abbotsford, British Columbia V2S 3N5
                        Phone: 604.557.0500
                        Toll-Free: 1.877.SPA.0700
                        Fax: 604.557.0522</p>
                </div>
                <small style={{ color: 'white' }}>&copy; All right reserved to The Crypto Coaching | 2021</small>
            </div>
        </div>
    );
};

export default Footer;