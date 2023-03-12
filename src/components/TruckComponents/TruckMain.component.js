import React, { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Wrapped from "./TruckMain.styled";

import Button from "../Button/Button.component";
import { AppContext } from "../../context/app.context";

const TruckMain = () => {
    const [message, setMessage] = useState("");

    const paragraph = useRef(null);

    const { isLogin, truck } = useContext(AppContext);

    const navigate = useNavigate();

    if (!isLogin) navigate("/");

    const loadingHandler = () => {
        const truckId = Object.keys(truck)[0];
        if ("cars" in truck[truckId]) {
            if (truck[truckId].cars.length === 5) {
                console.log(`truck is full`);
            } else {
                paragraph.current.style.display = "none";
                navigate("/loading");
            }
        } else {
            paragraph.current.style.display = "none";
            navigate("/loading");
        }
    };

    const unloadingHandler = () => {
        const truckId = Object.keys(truck)[0];
        if ("cars" in truck[truckId]) {
            paragraph.current.style.display = "none";
            navigate("/unloading");
        } else {
            setMessage("לא ניתן לפרוק. המובילית ריקה");
            paragraph.current.style.display = "block";
        }
    };

    return (
        <Wrapped>
            <div className="btn-container">
                <Button name="העמסה" onClick={loadingHandler} />
                <Button name="פריקה" onClick={unloadingHandler} />
            </div>
            <p ref={paragraph}>{message}</p>
        </Wrapped>
    );
};

export default TruckMain;
