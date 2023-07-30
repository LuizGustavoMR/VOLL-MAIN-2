import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
`;

export const Card = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    background: var(--cinza-claro);
    border-radius: 8px;
    padding: 25px 45px;
`;

export const Texto = styled.p`
    line-height: 19px;
    color: var(--azul-escuro);
`