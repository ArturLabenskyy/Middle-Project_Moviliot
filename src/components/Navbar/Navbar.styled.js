import styled from "styled-components";

const Wrapped = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #ce7777;

    .app-name {
        margin-right: 2rem;
    }

    h1 {
        font-size: 5rem;
    }

    .logo {
        margin-left: 2rem;
    }

    button {
        margin-right: 2rem;
    }

    @media only screen and (max-width: 600px) {
        justify-content: space-between;
        h1 {
            font-size: 3rem;
            margin-right: 1rem;
            margin-left: 1rem;
            text-align: center;
        }

        .logo {
            width: 40%;
        }

        img {
            width: 100%;
            height: 100%;
        }
    }
`;

export default Wrapped;
