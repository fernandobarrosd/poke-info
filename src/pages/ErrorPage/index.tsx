import { Container } from "./style";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonLink } from "../../components/ButtonLink";


export const ErrorPage = () => {
    return (
        <>
            <Header/>
            <Container>
                <span>Page Error</span>
                <ButtonLink to="/">Go to home</ButtonLink>
            </Container>
        </>
    )
}