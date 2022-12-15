import { Pokemon, PokemonTypes } from "../../../types";
import { List } from "./style";


interface PokemonTypeListProps {
    pokemonTypes: PokemonTypes[];
}

export const PokemonTypeList = ({ pokemonTypes } : PokemonTypeListProps) => {

    const renderPokemonType = (pokemonType: PokemonTypes, key: number) => {
        return <li key={key}>{pokemonType.type.name}</li>
    }
    return (
        <List>
            { pokemonTypes.map(renderPokemonType) }
        </List>
    )
}