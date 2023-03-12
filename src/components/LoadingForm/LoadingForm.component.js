import React, { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Wrapped from "./LoadingForm.styled";
import CarElement from "../CarElement/CarElement.component";
import LoadingDetails from "../LoadingDetails/LoadingDetails.component";

import db from "../../utils/firebase";
import { AppContext } from "../../context/app.context";

const LoadingForm = () => {
    const { isLogin, truck } = useContext(AppContext);

    const [carId, setCar] = useState(null);
    const [carsList, setCarsList] = useState([]);
    const [message, setMessage] = useState("");
    const [weight, setWeight] = useState(0);
    const [carsData, setCarsData] = useState({});
    const [showModal, setModal] = useState("none");

    const inputRef = useRef(null);
    const msg = useRef(null);
    const btn = useRef(null);
    const h4Ref = useRef(null);
    const modalRef = useRef(null);
    const divRef = useRef(null);

    const navigate = useNavigate();

    const [limitWeight] = useState(truck[Object.keys(truck)[0]].load);

    useEffect(() => {
        setCarsData(db.getCars());
    }, [carId]);

    useEffect(() => {
        function getCarsFromTruck() {
            const arr = [];
            const truckId = Object.keys(truck)[0];
            if ("cars" in truck[truckId]) {
                let obj = truck[truckId];
                obj = obj.cars;
                if (Object.keys(obj).length > 0) {
                    for (let i in obj) {
                        arr.push(i);
                    }
                }
            }
            setCarsList(arr);
        }
        getCarsFromTruck();
    }, [truck]);

    if (!isLogin) navigate("/");

    const addCarHandler = () => {
        const carsArray = carsList;
        if (carId.length < 6 || carId.length > 8) {
            setMessage("מספר רכב שגוי");
            msg.current.style.display = "block";
            return;
        }
        if (
            !carsList.includes(carId) &&
            carsList.length < 5 &&
            carId.length >= 6
        ) {
            inputRef.current.value = "";
            carsArray.push(carId);
            setCarsList(carsArray);
            msg.current.style.display = "none";
            setCar("");
            btn.current.disabled = false;
        } else if (carsList.length === 5) {
            setMessage("לא ניתן להוסיף יותר מ5 רכבים");
            msg.current.style.display = "block";
        } else {
            setMessage("הרכב כבר קיים ברשימה");
            msg.current.style.display = "block";
        }

        carId in carsData
            ? setWeight(weight + carsData[carId].weight)
            : setWeight(weight + 0);
    };

    const continueHandler = () => {
        setModal("block");
    };

    function weightCheck() {
        if (weight > limitWeight) {
            h4Ref.current.style.color = "red";
        } else {
            h4Ref.current.style.color = "#2b3a55";
        }
    }

    // function getCarsFromTruck() {
    //     const arr = [];
    //     const truckId = Object.keys(truck)[0];
    //     if ("cars" in truck[truckId]) {
    //         let obj = truck[truckId];
    //         obj = obj.cars;
    //         if (Object.keys(obj).length > 0) {
    //             for (let i in obj) {
    //                 arr.push(i);
    //             }
    //         }
    //     }
    //     setCarsList(arr);
    // }

    return (
        <Wrapped>
            <div
                ref={modalRef}
                className="modal"
                style={{ display: showModal }}
            >
                {" "}
                <LoadingDetails
                    setModal={setModal}
                    carsData={carsData}
                    carsList={carsList}
                />
            </div>

            <label>הכנס מספר רכב</label>

            <div className="car-add">
                <input
                    type="number"
                    ref={inputRef}
                    onChange={(e) => setCar(e.target.value)}
                    minLength="6"
                />
                <button className="add" onClick={addCarHandler}>
                    הוסף
                </button>
            </div>

            <p ref={msg}> {message} </p>

            <div ref={divRef} className="cars-list">
                {carsList.map((el) => {
                    weightCheck();
                    return (
                        <CarElement
                            number={el}
                            key={el}
                            setCarsList={setCarsList}
                            carsList={carsList}
                            weight={weight}
                            setWeight={setWeight}
                            carsData={carsData}
                            weightCheck={weightCheck}
                        />
                    );
                })}
            </div>

            <h4 ref={h4Ref}>סה''כ משקל {weight} ק''ג</h4>

            <button ref={btn} className="continue" onClick={continueHandler}>
                המשך
            </button>
        </Wrapped>
    );
};

export default LoadingForm;
