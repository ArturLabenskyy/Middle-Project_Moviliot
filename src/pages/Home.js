import React from "react";

import Login from "../components/Login/Login.component";
import Navbar from "../components/Navbar/Navbar.component";

const Home = () => {
    return (
        <div className="home-page full-page">
            <Navbar />
            <Login />
        </div>
    );
};

export default Home;
