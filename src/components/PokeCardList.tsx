import { Grid, Pagination } from "@mui/material";
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
    const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => 
    {
        props.onPageChange(value);
    };

    return (
        <>
            <Grid container spacing={2} justifyContent='center' padding={2}>
                {props.pagination.ids.map(id => (
                    <Grid item key={id} xs={8} sm={4} md={2}>
                        <PokeCard id={id}/>
                    </Grid>        
                ))}
            </Grid>

            <Pagination 
                showFirstButton 
                size="large"
                count={props.pagination.total} 
                page={props.pagination.page}
                onChange={handlePageChange}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            />
        </>
    );
}