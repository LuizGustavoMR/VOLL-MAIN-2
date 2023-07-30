import styled from "styled-components";


export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 40%;
`;

export const Titulo = styled.h2`
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: var(--azul-escuro);
`;

export const Texto = styled.p`

    line-height: 19px;
    color: var(--cinza);

`;

export const Subtitulo = styled.h3`
    line-height: 19px;
    font-weight: 700;
    color: var(--cinza);
    text-align: center;
`;


export const Linha = styled.hr`
color: var(--cinza)
`