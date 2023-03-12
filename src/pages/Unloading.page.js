import React from "react";

import UnloadingForm from "../components/UnloadingForm/UnloadingForm.component";
import Navbar from "../components/Navbar/Navbar.component";

const UnloadingPage = () => {
    return (
        <div className="full-page">
            <Navbar />
            <UnloadingForm />
        </div>
    );
};

export default UnloadingPage;
