import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import UserPage from "./pages/User.page";
import TruckPage from "./pages/Truck.page";
import LoadingPage from "./pages/Loading.page";
import UnloadingPage from "./pages/Unloading.page";

import "./style.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/user-page",
        element: <UserPage />,
    },
    {
        path: "/truck-page",
        element: <TruckPage />,
    },
    {
        path: "/loading",
        element: <LoadingPage />,
    },
    {
        path: "/unloading",
        element: <UnloadingPage />,
    },

    {
        path: "/admin-page",
        element: <></>,
    },
    {
        path: "/cars",
        element: <></>,
    },
    {
        path: "/users",
        element: <></>,
    },
    {
        path: "/trucks",
        element: <></>,
    },
    {
        path: "*",
        element: <div>Error!!!!!</div>,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
