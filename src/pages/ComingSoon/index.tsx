import { Button } from "../../components/Button";
import { Header } from "../../components/Header"
import { Container } from "./style";
import { Title } from "../../components/Title";
import { ButtonLink } from "../../components/ButtonLink";

export const ComingSoon = () => {
    
    return (
        <>
            <Header/>
            <Container>
                <Title>Comming Soon</Title>
                <ButtonLink to="/">Go to home</ButtonLink>
            </Container>
        </>
        
    )
}