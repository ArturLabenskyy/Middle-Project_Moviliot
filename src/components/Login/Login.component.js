import React, { useState, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";

import Wrapped from "./Login.styled";
import Button from "../Button/Button.component";

import db from "../../utils/firebase";
import { AppContext } from "../../context/app.context";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState({});

    const { setLogin, setConnect } = useContext(AppContext);

    const navigate = useNavigate();

    useEffect(() => {
        setUsers(db.getUsers());
    }, [username, password]);

    const loginHandler = () => {
        if (username in users && username.length > 0 && username === password) {
            setConnect({ [username]: users[username] });
            setLogin(true);
            navigate("/user-page");
        } else {
            console.log("Wrong user name or password");
        }
    };

    return (
        <Wrapped>
            <label>שם משתמש</label>
            <input
                type="text"
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
            />
            <label>סיסמה</label>
            <input
                type="password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <Button name="כניסה" onClick={loginHandler} />
            {/* <button onClick={loginHandler}>כניסה</button> */}
        </Wrapped>
    );
};

export default Login;
