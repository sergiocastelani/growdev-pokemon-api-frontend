import { Button, Card, CardActions, CardContent, Typography, styled } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect, useMemo } from "react";
import { loadPokemon } from "../redux/slices/pokemons.slice";
import unknowPokemonImage from "../assets/unknow.jpg";

export interface PokeCardProps
{
    id: number;
}

export function PokeCard(props: PokeCardProps) 
{
    const pokemons = useAppSelector(store => store.pokemons);
    const dispatch = useAppDispatch();

    useEffect(() => 
    {
        if (! pokemons[props.id])
            dispatch(loadPokemon(props.id));
    }, [props.id]);

    const pokemon = useMemo(() => 
    {
        return pokemons[props.id];
    }, [pokemons[props.id]]);

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h5" component="div">
                    {pokemon?.name ?? "?"}
                </Typography>
                <Typography color="text.secondary">
                    {pokemon?.size ?? "?"}
                </Typography>
                <Image src={pokemon?.imageUrl ?? unknowPokemonImage}/>
            </CardContent>
            <CardActions>
                <Button size="small">Add To Pokedex</Button>
            </CardActions>
        </Card>
    );
}

const Image = styled('img')({
  display: 'block',
  width: 100,
  height: 100,
});
