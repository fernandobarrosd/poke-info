import { Container } from "./style";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { PokemonCard } from "../../components/PokemonCard";
import React, { useState } from "react";
import { Pokemon } from "../../types";
import { Form } from "../../components/Form";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Loading } from "../../components/Loading";
import { Title } from "../../components/Title";


export const Home = () => {
    const [pokemonData, setPokemonData] = useState<Pokemon>({name: "", 
    sprites: { front_default: "" }, types: [ { type: { name: "" } } ]});
    
    const [pokemonName, setPokemonNane] = useState("");
    const [errorData, setErrorData] = useState({message: "", visible: false});
    const [loading, setLoading] = useState(false);

    
     const setPokemon = async () => {
        try {
            const newPokemonName = pokemonName.toLowerCase();
            const POKE_API_URL = `https://pokeapi.co/api/v2/pokemon/${newPokemonName}`;
            setLoading(true)
            const pokeApiResponse = await fetch(POKE_API_URL);
            
            const pokeApiData : Pokemon = await pokeApiResponse.json();

            setPokemonData(pokeApiData);

            setErrorData({
                message: "",
                visible: false
            })

            
        } catch (error) {
            setErrorData({
                message: "Invalid Pokemon Name",
                visible: true
            })
        }
        finally {
            setLoading(false)
        }

    }
     
     
    const handleSearch = (e : React.MouseEvent) => {
        e.preventDefault();
        setPokemon();  
    }


    const handleOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setPokemonNane(e.target.value);
    }
    return (
        <>
            <Header/>
            <Container>
                <Title>Search Pokemon</Title>
                <Loading visible={loading}/>
                <Form buttonSubmitText="Search Pokemon" formSubmit={handleSearch}>
                    <fieldset>
                        <Input onChange={handleOnChange}
                        defaultValue={pokemonName}
                        label="Pokemon name"/>
                    </fieldset>
                    <ErrorMessage message={errorData.message}
                    visible={errorData.visible}/>
                </Form>
                { pokemonData.name && !errorData.visible && (
                    <PokemonCard pokemon={pokemonData}/>
                ) }
            </Container>
        </>
    )
}
