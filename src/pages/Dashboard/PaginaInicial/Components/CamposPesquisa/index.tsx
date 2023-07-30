import { Container, ContainerFormulario, CampoDigitacaoPesquisa, CampoDigitacaoPin, Botao, ItemLista, Lista, Titulo } from "./styles";

const CamposPesquisa = () => {

    return (
        <>
            <Container>
                <ContainerFormulario>
                    <CampoDigitacaoPesquisa placeholder={'Digite a especialidade'} />
                    <CampoDigitacaoPin placeholder={'Digite sua localização'} />
                    <Botao>Buscar</Botao>
                </ContainerFormulario>
                <Titulo>Você pode estar procurando por estas categorias:</Titulo>
                <Lista>
                    <ItemLista>Neurologista</ItemLista>
                    <ItemLista>Dermatologista</ItemLista>
                    <ItemLista>Cardiologista</ItemLista>
                    <ItemLista>Ortopedista</ItemLista>
                    <ItemLista>Oftalmologista</ItemLista>
                    <ItemLista>Pediatria</ItemLista>
                    <ItemLista>Reumatologista</ItemLista>
                </Lista>
            </Container>
        </>
    )

}


export default CamposPesquisa;