import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import { Heading } from "../../atomics/Heading";
export const Header = () => {
    const navigate = useNavigate();
    
    return (
        <Container>
            <Heading onClick={() => navigate("/")}
            element="h2">
                Poke Info</Heading>
        </Container>
    )
}