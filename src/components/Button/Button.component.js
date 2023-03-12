import React from "react";

import Wrapped from "./Button.styled";

const Button = ({ name, onClick }) => {
    return <Wrapped onClick={onClick}>{name}</Wrapped>;
};

export default Button;
