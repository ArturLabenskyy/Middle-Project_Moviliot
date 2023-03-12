import styled from "styled-components";

const Wrapped = styled.div`
    margin-top: 5rem;
    position: absolute;
    width: 60%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ce7777;
    border-radius: 1rem;

    .car-add {
        width: 70%;
        display: flex;
        justify-content: center;
        margin-top: 1.5rem;
    }

    input {
        margin-right: 1rem;
    }

    p {
        display: none;
        margin-top: 1rem;
        font-weight: 600;
    }

    .add {
        height: 3rem;
        width: 5rem;
        font-size: 1.5rem;
        border-radius: 1rem;
        border: none;
        color: #2b3a55;
    }

    .add:hover {
        background-color: #e8c4c4;
        cursor: pointer;
    }

    .continue {
        height: 5rem;
        width: 15rem;
        margin-top: 1rem;
        font-size: 2rem;
        background-color: #f2e5e5;
        border: none;
        border-radius: 1rem;
        color: #2b3a55;
    }

    .continue:hover {
        background-color: #e8c4c4;
        cursor: pointer;
    }

    .continue:disabled {
        background-color: #555555;
    }

    .cars-list {
        display: flex;
        flex-direction: column;
    }

    @media only screen and (max-width: 600px) {
        width: 80%;
        height: 60%;

        label {
            font-size: 2.5rem;
            font-weight: 700;
        }

        input {
            height: 4rem;
        }

        .add,
        button {
            height: 4rem;
            width: 6rem;
            font-weight: 700;
            font-size: 2rem;
        }

        p {
            font-weight: 700;
            font-size: 3rem;
        }

        .continue {
            height: rem;
            font-weight: 700;
            font-size: 3rem;
        }
    }
`;

export default Wrapped;
