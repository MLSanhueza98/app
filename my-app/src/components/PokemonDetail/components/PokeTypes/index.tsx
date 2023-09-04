import { IPokemon } from "../../../../interfaces/interface"
import { background } from "../../../../utils/backgroundsByType"
import styles from "./style.module.scss"

interface Props {
    pokemon: IPokemon | null;
};

export const PokeTypes = ({ pokemon }: Props) => {
    return(
        <div>
            {pokemon?.types.map(({ type: { name } }) => (
                <div 
                    key={name}
                    /* @ts-ignore */
                    style={{ background: background[name] }}
                    className={styles.type}
                    >
                    { name }
                </div>
            ))}
        </div>
    );
};