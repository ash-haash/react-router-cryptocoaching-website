import React from 'react';

const About = () => {
    return (
        <div>
            <h1 style={{ color: "#fea621", fontSize: "40px", fontFamily: "cursive", padding: "50px", borderBottom: '1px solid lightgray' }} >Welcome to The Crypto Coaching</h1>
            <h3 style={{ color: "#fea621", padding: '35px', borderBottom: '1px solid lightgray' }} >Please read our COVID-19 policy</h3>

            <div style={{ marginTop: '40px', marginBottom: '40px' }} className="row">
                <div style={{ paddingLeft: '100px' }} className="col-6">
                    <p>
                        Crypto Coach was created when five friends living across England, Canada and Ireland with a long standing passion for crypto realised we’d explained the concept of cryptocurrency and blockchain technology to friends, family and strangers so often, it’d make sense to share our knowledge and passion with the rest of the world. We built Crypto Coach as a knowledge platform to demystify the often daunting world of cryptocurrency and help people understand the investments and technology we’re all so enthusiastic about.<br></br><br></br>

                        We’ve created a quick journey through the crypto space to explain what cryptocurrency and blockchain technology is, using real world examples where possible along with highlighting some of the leading cryptocurrencies, how you can buy them and the best ways to keep your investment secure. As the exciting world of crypto continues to grow, we’re constantly working to give you maximum insight without all of the technological jargon that can be difficult to digest when you’re just getting started with crypto!<br></br>

                        We are always open to collaborating so please reach out!<br></br></p>
                </div>
                <div className="col-6">
                    <p>Follow us for our exclusive offers on</p>
                    <p>Facebook:<a style={{ color: '#fea621', textDecoration: 'none' }} href="/about">@thecryptocoaching</a></p>
                    <p>Instagram: <a style={{ color: '#fea621', textDecoration: 'none' }} href="/about">@thecryptocoaching</a></p>
                </div>
            </div>
        </div >
    );
};

export default About;