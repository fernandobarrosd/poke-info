import { Pokemon } from "../../types";
import { List } from "./style";


interface TypeListProps {
    pokemon: Pokemon;
}

export const TypeList = ({ pokemon } : TypeListProps) => {
    return (
        <List>
            { pokemon.types.map(pokemon => (
                <li>{pokemon.type.name}</li>
            )) }
        </List>
    )
}