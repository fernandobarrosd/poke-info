import { Container } from "./style";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();
    
    return (
        <Container>
            <h2 onClick={() => navigate("/")}>Poke Info</h2>
        </Container>
    )
}