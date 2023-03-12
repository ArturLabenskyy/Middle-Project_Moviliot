import styled from "styled-components";

const Wrapped = styled.div`
    /* margin-top: auto; */
    width: 50rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #ce7777;
    border-radius: 1rem;

    .btn-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }

    .input-form {
        height: 15rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    input {
        margin: 1rem;
    }

    p {
        display: none;
        margin-top: 1rem;
        font-weight: 600;
    }

    @media only screen and (max-width: 600px) {
        width: 80%;
        height: 50%;

        label {
            font-size: 3rem;
        }

        input {
            height: 4rem;
        }
    }
`;

export default Wrapped;
