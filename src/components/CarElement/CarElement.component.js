import React, { useState, useEffect, useContext } from "react";

import Wrapped from "./CarElement.styled";

const CarElement = ({
    number,
    setCarsList,
    carsList,
    weight,
    setWeight,
    carsData,
    weightCheck,
}) => {
    const [car] = useState(
        number in carsData
            ? carsData[number]
            : { model: "רכב לא בצי", weight: 0 }
    );

    useEffect(() => {
        setWeight(weight + car.weight);
        weightCheck();
    }, []);

    const deleteHandler = () => {
        const newCarsList = carsList.filter((el) => el !== number);
        setCarsList(newCarsList);
        setWeight(weight - car.weight);
        weightCheck();
    };

    return (
        <Wrapped className="car-info">
            <h4 className="car-number">{number}</h4>
            <h4 className="car-model">{car.model}</h4>
            <h4 className="car-weight">{car.weight} kg</h4>
            <button onClick={deleteHandler}>מחק</button>
        </Wrapped>
    );
};

export default CarElement;
