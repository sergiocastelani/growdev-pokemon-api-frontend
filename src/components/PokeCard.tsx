import { Button, Card, CardActions, CardContent, Typography, styled } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { loadPokemon } from "../redux/slices/pokemons.slice";
import unknowPokemonImage from "../assets/unknow.jpg";
import { pokedexActions } from "../redux/slices/pokedex.slice";

export interface PokeCardProps
{
    id: number;
}

export function PokeCard(props: PokeCardProps) 
{
    const pokemon = useAppSelector(store => store.pokemons[props.id]);
    const pokedexIndex = useAppSelector(store => store.pokedex.allIds.indexOf(props.id));
    const dispatch = useAppDispatch();

    useEffect(() => 
    {
        if (! pokemon)
            dispatch(loadPokemon(props.id));
    }, [props.id]);

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
                {pokedexIndex < 0 ?
                    <Button 
                        size="small"
                        onClick={() => dispatch(pokedexActions.add(props.id))}
                    >
                        Add Pokedex
                    </Button>
                    :
                    <Button 
                        size="small"
                        color="error"
                        onClick={() => dispatch(pokedexActions.remove(props.id))}
                    >
                        Remove Pokedex
                    </Button>
                }
            </CardActions>
        </Card>
    );
}

const Image = styled('img')({
  display: 'block',
  width: 100,
  height: 100,
});
