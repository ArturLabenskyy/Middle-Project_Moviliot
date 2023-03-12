import styled from "styled-components";

const Wrapped = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ce7777;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;

    @media only screen and (max-width: 600px) {
        label {
            font-size: 3rem;
            font-weight: 700;
        }

        input {
            height: 4rem;
        }
    }
`;

export default Wrapped;
