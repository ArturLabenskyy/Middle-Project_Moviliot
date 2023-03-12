import styled from "styled-components";

const Wrapped = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 50%;
    justify-content: center;
    align-items: center;
    background-color: #ce7777;
    border-radius: 0.5rem;
    font-size: 2rem;
    color: #2b3a55;

    input {
        margin: 1rem;
    }

    button {
        height: 15%;
        width: 30%;
        margin-top: 1rem;
        font-size: 2rem;
        background-color: #f2e5e5;
        border: none;
        border-radius: 1rem;
    }

    button:hover {
        background-color: #e8c4c4;
        cursor: pointer;
    }

    @media only screen and (max-width: 600px) {
        width: 80%;

        input {
            height: 8%;
        }

        label {
            font-weight: 700;
            font-size: 3rem;
        }

        button {
            font-size: 3rem;
            font-weight: 700;
            width: 40%;
        }
    }
`;

export default Wrapped;
