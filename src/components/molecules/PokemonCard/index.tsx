import { Container, Description } from "./style";
import { Pokemon } from "../../../types";
import { PokemonTypeList } from "../../atomics/PokemonTypeList";
import { DescriptionText } from "../../atomics/DescriptionPokemon";
import { PokemonImage } from "../../atomics/PokemonImage";

interface PokemonCardProps {
    pokemon: Pokemon;
}
export const PokemonCard = ({ pokemon }   : PokemonCardProps) => {
    return (
        <Container>
            <PokemonImage url={pokemon.sprites.front_default}/>
            <Description>
                <DescriptionText text={"Name: " + pokemon.name}/>
                <PokemonTypeList pokemonTypes={pokemon.types}/>
            </Description>
        </Container>
    )
}