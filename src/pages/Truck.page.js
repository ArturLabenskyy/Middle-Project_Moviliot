import React from "react";

import TruckMain from "../components/TruckComponents/TruckMain.component";
import Navbar from "../components/Navbar/Navbar.component";

const TruckPage = () => {
    return (
        <div className="full-page">
            <Navbar />
            <TruckMain />
        </div>
    );
};

export default TruckPage;
