import { Button } from "@mui/material";
import { PokemonPagedList } from "../models/pokemon.model";
import { PokeCard } from "./PokeCard";

export interface PokeCardListProps
{
    pagination: PokemonPagedList
    onPageChange: (page: number) => void;
    onPageSizeChange: (size: number) => void;
}

export function PokeCardList(props: PokeCardListProps)
{
    return (
        <>
            {props.pagination.ids.map(id => (
                <PokeCard key={id} id={id}/>
            ))}

            <Button onClick={() => props.onPageChange(props.pagination.page - 1)}>Prev</Button>
            <Button onClick={() => props.onPageChange(props.pagination.page + 1)}>Next</Button>
        </>
    );
}