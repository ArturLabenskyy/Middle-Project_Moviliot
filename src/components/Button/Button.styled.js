import styled from "styled-components";

const Wrapped = styled.button`
    height: 5rem;
    width: 15rem;
    margin-top: 1rem;
    font-size: 2rem;
    background-color: #f2e5e5;
    border: none;
    border-radius: 1rem;
    color: #2b3a55;

    :hover {
        background-color: #e8c4c4;
        cursor: pointer;
    }

    @media only screen and (max-width: 600px) {
        height: 6rem;
        width: 40%;
        font-size: 2.5rem;
        font-weight: 700;
    }
`;

export default Wrapped;
