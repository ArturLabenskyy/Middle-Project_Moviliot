import styled from "styled-components";

const Wrapped = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 0.6rem;

    h4 {
        margin-right: 1rem;
    }

    button {
        margin-right: 0.3rem;
    }

    @media only screen and (max-width: 600px) {
        h4 {
            font-size: 2rem;
        }
    }
`;

export default Wrapped;
