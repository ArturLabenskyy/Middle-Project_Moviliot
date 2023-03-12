import { useState, createContext, useContext } from "react";
import db from "../utils/firebase";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isLogin, setLogin] = useState(false);
    const [connectedUser, setConnect] = useState(null);
    const [truck, setTruck] = useState(null);
    const [carsData] = useState(db.getCars());

    return (
        <AppContext.Provider
            value={{
                isLogin,
                setLogin,
                connectedUser,
                setConnect,
                truck,
                setTruck,
                carsData,
            }}
        >
            {" "}
            {children}{" "}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider };
