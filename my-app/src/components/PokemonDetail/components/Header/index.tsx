import styles from "./style.module.scss"
import { useNavigate } from "react-router-dom"
import { ArrowLeftIcon } from "../../../../assets/arrows"
import { IPokemon } from "../../../../interfaces/interface"
import { PokeballIconBig } from "../../../../assets/pokeball";

interface Props {
    pokemon: IPokemon | null;
}

export const Header = ({ pokemon }: Props) => {
    const navigate = useNavigate();
    return (
        <header>
            <PokeballIconBig className={styles.pokeball} />
            <div>
                <ArrowLeftIcon onClick={() => navigate(-1)} />
                <span> {pokemon?.name} </span>
            </div>
            <p>#{pokemon?.id}</p>
        </header>
    );
};