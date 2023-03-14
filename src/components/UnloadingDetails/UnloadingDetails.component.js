import React, { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Wrapped from "./UnloadingDetails.styled";
import Button from "../Button/Button.component";

import db from "../../utils/firebase";
import { AppContext } from "../../context/app.context";

const UnloadingDetails = ({ setModal, carsData, carsLeave }) => {
    const inputRef = useRef(null);
    const [location, setLocation] = useState("");
    const navigate = useNavigate();

    const { truck } = useContext(AppContext);
    const truckId = Object.keys(truck)[0];

    const closeModal = () => {
        carsLeave.forEach((el) => {
            const car = { [el]: "" };
            car[el] =
                el in carsData
                    ? carsData[el]
                    : { model: "רכב לא בצי", weight: 0 };
            car[el].location = location;
            db.updateCar(car);

            let obj = truck[truckId];
            let carsList = obj.cars;

            delete carsList[el];
            obj.cars = carsList;
            truck[truckId] = obj;
            db.updateTruck(truck);
        });
        setModal("none");
        navigate("/truck-page");
    };

    return (
        <Wrapped>
            <label>הקלד מיקום</label>
            <input
                ref={inputRef}
                type="text"
                onChange={(e) => {
                    setLocation(e.target.value);
                }}
            />
            <Button name="סיים" onClick={closeModal} />
        </Wrapped>
    );
};

export default UnloadingDetails;
