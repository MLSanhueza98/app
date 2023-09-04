import styles from './style.module.scss'
import { PokemonCard } from '../PokemonCard/index'

interface Props {
    pokemonsUrls?: string[] | null;
    page: number;
    perPage: number;
}


export const PokemonList = ({ pokemonsUrls, page, perPage }: Props) => {
    return (
        <div className={styles.pokemons}>
            {pokemonsUrls
            ?.slice((page-1) * perPage, (page-1) * perPage+perPage)
            .map((pokemonUrl) => (
            <PokemonCard key={pokemonUrl} url={pokemonUrl} />
        ))}
        </div>
    )
}