import React from "react";

import LoadingForm from "../components/LoadingForm/LoadingForm.component";
import Navbar from "../components/Navbar/Navbar.component";

const LoadingPage = () => {
    return (
        <div className="full-page">
            <Navbar />
            <LoadingForm />
        </div>
    );
};

export default LoadingPage;
