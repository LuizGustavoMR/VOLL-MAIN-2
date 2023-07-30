import styled from "styled-components";
import pesquisa from './assets/pesquisa.png';
import pin  from './assets/pin.png';

export const Container = styled.section`
    background: var(--branco);
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    padding: 2em 5em;
    text-align: center;
    margin: 3em 0;
`;

export const ContainerFormulario = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`;

export const CampoDigitacaoPesquisa = styled.input`
padding: 16px 16px 16px 30px;
background-image: url(pesquisa);
background-repeat: no-repeat;
background-color: var(--cinza-claro);
background-position: 10px;
box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
border-radius: 8px;
border: none;
width: 40%;
::placeholder {
    color: var(--cinza-escuro);
    font-family: var(--fonte-principal)
}
`;

export const CampoDigitacaoPin = styled.input`
padding: 16px 16px 16px 30px;
background-image: url(pin);
background-repeat: no-repeat;
background-color: var(--cinza-claro);
background-position: 10px;
box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
border-radius: 8px;
border: none;
width: 40%;
::placeholder {
    color: var(--cinza-escuro);
    font-family: var(--fonte-principal)
}
`;

export const Botao = styled.button`
    padding: 12px 16px;
    background-color: var(--azul-escuro);
    border-radius: 8px;
    border: none;
    color: var(--branco);
`;

 export const Titulo = styled.h2`
    font-family: var(--fonte-principal);
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: var(--cinza);
`

export const Lista = styled.ul`
    display: flex;
    justify-content: space-around;
`

export const ItemLista = styled.li`
    background-color: var(--cinza-claro);
    color: var(--cinza);
    padding: 4px 8px;
    margin: 0 8px;
    list-style-type: none;
    font-size: 14px;
    line-height: 16px;
    border-radius: 4px;
    :after {
        margin-left: 10px;
        content: 'x';
    }
`