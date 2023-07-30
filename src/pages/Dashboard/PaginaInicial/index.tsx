import Atividades from "./Components/Atividades";
import Banner from "./Components/Banner";
import CamposPesquisa from "./Components/CamposPesquisa";
import Depoimentos from "./Components/Depoimentos";
import { Container } from "./styles";

export default function PaginaInicial() {
    return (
        <>
            <Banner />
            <Container>
                <CamposPesquisa />
                <Atividades/>
                <Depoimentos/>
            </Container>
        </>
    )
}