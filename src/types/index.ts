export interface Pokemon {
    name: string;
    sprites: PokemonImage;
    types: PokemonTypes[];
}

interface PokemonImage {
    front_default: string;
}

interface PokemonTypes {
    type: PokemonType;
}

interface PokemonType {
    name: string;
}

export interface Option {
    label?: string;
    value: any;
}
