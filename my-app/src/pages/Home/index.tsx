import { useContext } from "react"
import { usePagination } from "../../hooks/usePagination"
import { Pagination } from "../../components/Pagination"
import { PokeballIconSmall } from '../../assets/pokeball'
import { PokemonList } from '../../components/PokemonList'
import { PokemonContext } from '../../context/pokemonContext'

import styles from './style.module.scss'


export const Home = () => {
    const { pokemonsFiltered } = useContext(PokemonContext);
    const { page,  previousPage, nextPage, backHome} = usePagination();
    let perPage = 16;
    return(
        <div className={styles.home}>
            <header>
                <div onClick={backHome}>
                    <PokeballIconSmall/>
                    <span>Pokedex</span>
                </div>
            </header>
            <PokemonList page={page} perPage={perPage} pokemonsUrls={ pokemonsFiltered } />
            <Pagination
                page={page}
                perPage={perPage}
                nextPage={nextPage}
                previousPage={previousPage}
                maxItems={pokemonsFiltered?.length!}
            />

        </div>
    )
}