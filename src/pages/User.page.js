import React from "react";

import TruckAdd from "../components/TruckComponents/TruckAdd.component";
import Navbar from "../components/Navbar/Navbar.component";

const UserPage = () => {
    return (
        <div className="user-page full-page">
            <Navbar />
            <TruckAdd />
        </div>
    );
};

export default UserPage;
