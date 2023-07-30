import { Card, Container, Texto } from "./styles";
import Shild  from './assets/health_and_safety.png';
import Calendarios from './assets/calendar_month.png';
import Lembretes from './assets/notifications.png';
import Notificacoes from './assets/thumb_up.png';


export default function Atividades() {
    return (
        <Container>
            <Card>
                <img src={Shild} alt="Encontre especialistas"/>
                <Texto>Encontre especialistas</Texto>
            </Card>

            <Card>
                <img src={Calendarios} alt="Agende consultas"/>
                <Texto>Agende consultas</Texto>
            </Card>

            <Card>
                <img src={Lembretes} alt="Defina lembretes"/>
                <Texto>Defina lembretes</Texto>
            </Card>

            <Card>
                <img src={Notificacoes}alt="Avalie o serviço"/>
                <Texto>Avalie o serviço</Texto>
            </Card>
        </Container>
    )
}