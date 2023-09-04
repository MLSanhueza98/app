import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { PokeType, AllPokemonsResult, PokemonsByTypeResult } from "../interfaces/types";

interface ContextProps {
    types: PokeType[]
    filterSelected: PokeType
    pokemonsFiltered: string[] | null
    changeTypeSelected: (type: PokeType) => void
}


export const PokemonContext = createContext<ContextProps>({} as ContextProps)

const PokemonProvider = ({children}: any) => {
    let allPokemonsUrl = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    
    const defaultState: PokeType = {
        name: "All",
        url: allPokemonsUrl,
    };

    const [allPokemons, setAllPokemons] = useState(null);
    const [pokemonsFiltered, setPokemonsFiltered] = useState(null);
  
    const [types, setTypes] = useState([defaultState]);
    const [filterSelected, setFilterSelected] = useState(defaultState);

    const changeTypeSelected = async (type: PokeType) => {
        setFilterSelected(type);
        const { data } = await axios.get(type?.url!);
        let pokemons = data?.pokemon?.map(
            ({ pokemon }: PokemonsByTypeResult) => pokemon?.url
        );
        type.name !== "All" 
        ? setPokemonsFiltered(pokemons)
        : setPokemonsFiltered(allPokemons)
    };

    const getAllPokemons = async () => {
        const { data } = await axios.get(allPokemonsUrl);

        let pokemons = data?.results?.map(
            (pokemon: AllPokemonsResult) => pokemon?.url
        );

        setAllPokemons(pokemons)
        setPokemonsFiltered(pokemons)
    };

    const getPokemonsTypes = async () => {
        const { data } = await axios.get(allPokemonsUrl);
        setTypes([...types, ...data.results])
        
    };

    useEffect(() => {
        getAllPokemons();
        getPokemonsTypes();
    }, []);

    return (
    <PokemonContext.Provider
      value={{
        types,
        filterSelected,
        pokemonsFiltered,
        changeTypeSelected,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider