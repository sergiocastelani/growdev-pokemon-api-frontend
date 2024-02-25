import { useParams } from "react-router-dom";
import { PokeCardFull } from "../components/PokeCardFull";

export const PokemonPage = () => 
{
    const { id } = useParams();

    return (
        <>
            <PokeCardFull id={parseInt(id ?? '0')} />
        </>
    );
};
