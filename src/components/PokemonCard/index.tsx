import { Container, ImageContainer, Image, Description } from "./style";
import { Pokemon } from "../../types";
import { TypeList } from "../TypeList";

interface PokemonCardProps {
    pokemon: Pokemon;
}
export const PokemonCard = ({ pokemon }   : PokemonCardProps) => {
    return (
        <Container>
            <ImageContainer>
                <Image src={pokemon.sprites.front_default}/>
            </ImageContainer>
            <Description>
                <p>Name: {pokemon.name}</p>
                <p>Types</p>
                <TypeList pokemon={pokemon}/>
            </Description>
        </Container>
    )
}