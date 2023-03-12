import styled from "styled-components";

const Wrapped = styled.div`
    margin-top: 10rem;
    position: absolute;
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: #ce7777;
    border-radius: 1rem;

    .half {
        height: 80%;
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border: 2px solid black;
        border-radius: 1rem;
    }

    p {
        width: 100%;
        text-align: center;
        font-weight: 700;
        font-size: 2rem;
    }

    p:hover {
        cursor: pointer;
    }

    @media only screen and (max-width: 600px) {
        flex-direction: column;

        .half {
            width: 80%;
            height: 40%;
        }

        p {
            font-weight: 700;
            font-size: 3rem;
        }
    }
`;

export default Wrapped;
