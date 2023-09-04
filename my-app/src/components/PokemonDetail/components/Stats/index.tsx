import styles from "./style.module.scss"
import { IPokemon } from "../../../../interfaces/interface"
import { HeightIcon, WeightIcon } from "../../../../assets/stats"

interface Props{
    pokemon: IPokemon | null;
};

export const Stats = ({ pokemon }:Props) => {
    return (
        <div className={styles.stats}>
            <div className={styles.item}>
                <WeightIcon />
                <span>{pokemon?.weight}</span>
                <p>Weight</p>
            </div>
            <div className={styles.item}>
                <HeightIcon />
                <span>{pokemon?.height}</span>
                <p>Height</p>
            </div>
        </div>
    );
};