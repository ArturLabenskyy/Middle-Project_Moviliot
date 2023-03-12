import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Wrapped from "./Navbar.styled";
import Button from "../Button/Button.component";

import { AppContext } from "../../context/app.context";

const Navbar = () => {
    const { isLogin, setLogin } = useContext(AppContext);

    const navigate = useNavigate();

    const logout = () => {
        setLogin(false);
        navigate("/");
    };

    return (
        <Wrapped>
            <div className="logo">
                <img src="https://i.ibb.co/YdHB5t0/logo.png" alt="logo" />
            </div>
            <div className="app-name">
                <h1>אפליקציית מוביליות</h1>
            </div>
            {isLogin && <Button name="להתנתק" onClick={logout} />}
        </Wrapped>
    );
};

export default Navbar;
