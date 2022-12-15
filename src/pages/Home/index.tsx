import { Container } from "./style";
import { Header } from "../../components/molecules/Header";
import { Input } from "../../components/molecules/Input";
import { PokemonCard } from "../../components/molecules/PokemonCard";
import React, { useState } from "react";
import { Pokemon } from "../../types";
import { Form } from "../../components/molecules/Form";
import { ErrorMessage } from "../../components/atomics/ErrorMessage";
import { Loading } from "../../components/atomics/Loading";
import { Heading } from "../../components/atomics/Heading";
import { useNavigate } from "react-router-dom";



export const Home = () => {
    const [pokemonData, setPokemonData] = useState<Pokemon>({name: "", 
    sprites: { front_default: "" }, types: [ { type: { name: "" } } ]});
    
    const [pokemonName, setPokemonName] = useState("");
    const [errorData, setErrorData] = useState({message: "", visible: false});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    
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
        setErrorData({
         message: "",
         visible: false
       })
        if (pokemonName) {
          setPokemon();
        }
        else {
          setErrorData({
            message: "The pokemon name field is empty",
            visible: true
          })

          setPokemonName("")
          setPokemonData({} as Pokemon);
        }
          
    }


    const handleOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setPokemonName(e.target.value);
    }
    return (
        <>
            <Header/>
            <Container>
            <Heading onClick={() => navigate("/")}
            element="h2" fontFamily="Pokemon Solid" 
            color="color-second" countourColor="black"
            contourWidth={1}>Search Pokemon</Heading>
                <Loading visible={loading}/>
                <Form buttonSubmitText="Search Pokemon" formSubmit={handleSearch}>
                    <fieldset>
                        <Input label="Search Pokemon"
                        defaultValue={pokemonName}
                        onInput={handleOnChange}/>
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
