import styled from "styled-components";

const Wrapped = styled.div`
    margin-top: 5rem;
    width: 50rem;
    height: 40rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ce7777;
    border-radius: 1rem;

    .btn-container {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    p {
        display: none;
        margin-top: 5rem;
        font-size: 2.2rem;
        font-weight: 700;
    }

    @media only screen and (max-width: 600px) {
        width: 90%;
    }
`;

export default Wrapped;
