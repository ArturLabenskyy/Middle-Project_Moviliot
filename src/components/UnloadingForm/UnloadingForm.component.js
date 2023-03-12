import React, { useState, useContext, useRef } from "react";

import Wrapped from "./UnloadingForm.styled";
import UnloadingDetails from "../UnloadingDetails/UnloadingDetails.component";
import Button from "../Button/Button.component";

import db from "../../utils/firebase";
import { AppContext } from "../../context/app.context";

const UnloadingForm = () => {
    const { truck } = useContext(AppContext);

    const carsOnTruck = () => {
        const id = Object.keys(truck)[0];
        let obj = truck[id];
        return Object.values(obj.cars);
    };

    const [leaving, setLeaving] = useState([]);
    const [staying, setStaying] = useState(carsOnTruck());
    const [showModal, setModal] = useState("none");
    const [carsData] = useState(db.getCars());

    const modalRef = useRef(null);
    // console.log(carsOnTruck);

    const removeCar = (num) => {
        const stayArr = staying.filter((el) => el !== num);
        const leaveArr = leaving;
        leaveArr.push(num);
        setLeaving(leaveArr);
        setStaying(stayArr);
    };

    const carStay = (num) => {
        const stayArr = leaving.filter((el) => el !== num);
        const leaveArr = staying;
        leaveArr.push(num);
        setStaying(leaveArr);
        setLeaving(stayArr);
    };

    const continueHandler = () => {
        setModal("block");
    };

    return (
        <Wrapped>
            <div
                ref={modalRef}
                className="modal"
                style={{ display: showModal }}
            >
                {" "}
                <UnloadingDetails
                    setModal={setModal}
                    carsData={carsData}
                    carsLeave={leaving}
                    carsStay={staying}
                />
            </div>

            <div className="leaving half">
                <p>נפרקים</p>
                {leaving.map((num) => {
                    return (
                        <p
                            onClick={() => {
                                carStay(num);
                            }}
                        >
                            {num}
                        </p>
                    );
                })}
            </div>

            <Button name="המשך" onClick={continueHandler} />

            <div className="stay half">
                <p>נשארים</p>
                {staying.map((num) => {
                    return (
                        <p
                            onClick={() => {
                                removeCar(num);
                            }}
                        >
                            {num}
                        </p>
                    );
                })}
            </div>
        </Wrapped>
    );
};

export default UnloadingForm;
