import { Button, Grid } from "@mui/material";
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
            <Grid container spacing={2} justifyContent='center' padding={2}>
                {props.pagination.ids.map(id => (
                    <Grid item key={id} xs={8} sm={4} md={2}>
                        <PokeCard id={id}/>
                    </Grid>        
                ))}
            </Grid>

            <Button onClick={() => props.onPageChange(props.pagination.page - 1)}>Prev</Button>
            <Button onClick={() => props.onPageChange(props.pagination.page + 1)}>Next</Button>
        </>
    );
}