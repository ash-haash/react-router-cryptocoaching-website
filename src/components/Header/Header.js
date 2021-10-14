import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const divStyle = {
        background: "#fea621",
        paddingBottom: "10px"
    }
    const navStyle = {
        fontSize: "20px",
        textDecoration: "none",
        color: "white",
        paddingRight: "20px",
        paddingLeft: "20px",
        hover: {
            color: "black"
        }
    }
    const activeStyle = {
        fontWeight: "",
        color: "black",
        background: ""
    }
    return (
        <div style={divStyle}>
            <h1 style={{ color: "white", fontSize: "90px", fontStyle: "italic", fontWeight: "lighter", paddingTop: "100px", }}>The Crypto Coaching</h1>
            <p style={{ color: "white", marginBottom: "100px", fontFamily: "revert" }} >Beginners Cryptocurrency Guide</p>
            <NavLink style={navStyle} activeStyle={activeStyle} to="/home">Home</NavLink>
            <NavLink style={navStyle} activeStyle={activeStyle} to="/service">Service</NavLink>
            <NavLink style={navStyle} activeStyle={activeStyle} to="/marketranks">Ranks</NavLink>
            <NavLink style={navStyle} activeStyle={activeStyle} to="/about">About</NavLink>
        </div>
    );
};

export default Header;