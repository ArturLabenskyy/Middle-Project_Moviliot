import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Wrapped from "./TruckAdd.styled";
import Button from "../Button/Button.component";

import db from "../../utils/firebase";
import { AppContext } from "../../context/app.context";

const TruckAdd = () => {
    const [truckId, setTruckId] = useState("");
    const [trucks, setTrucks] = useState({});

    const { isLogin, setTruck } = useContext(AppContext);

    const paragraph = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        setTrucks(db.getTrucks);
    }, [truckId]);

    if (!isLogin) navigate("/");

    const addTruckHandler = () => {
        if (truckId in trucks) {
            const truck = { [truckId]: trucks[truckId] };
            setTruck(truck);
            truck[truckId].inUse = true;
            db.updateTruck(truck);
            paragraph.current.style.display = "none";
            navigate("/truck-page");
        } else {
            paragraph.current.style.display = "block";
        }
    };

    return (
        <Wrapped>
            <div className="input-form">
                <label>הכנס מספר מובילית</label>
                <input
                    type="text"
                    onChange={(e) => {
                        setTruckId(e.target.value);
                    }}
                />
                <p className="error-id" ref={paragraph}>
                    מספר מובילית שגוי
                </p>
            </div>
            <div className="btn-container">
                <Button name="שיוך מובילית" onClick={addTruckHandler} />
            </div>
        </Wrapped>
    );
};

export default TruckAdd;
