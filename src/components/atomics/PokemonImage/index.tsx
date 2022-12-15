import { ImageContainer } from "./style"

interface PokemonImageProps {
    url: string;
}


export const PokemonImage = ({ url } : PokemonImageProps) => {
    return (
        <ImageContainer>
            <img src={url}/>
        </ImageContainer>
    )
}