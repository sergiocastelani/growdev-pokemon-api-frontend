import { Button, Card, CardActions, CardContent, Grid, Typography, styled } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { loadPokemon } from "../redux/slices/pokemons.slice";
import unknowPokemonImage from "../assets/unknow.jpg";
import { pokedexActions } from "../redux/slices/pokedex.slice";

export interface PokeCardFullProps
{
    id: number;
}

export function PokeCardFull(props: PokeCardFullProps) 
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
        <Card>
            <CardContent sx={{pb:0}}>
                <Typography variant="h5" component="div">
                    {pokemon?.name ?? "?"}
                </Typography>
                <Typography color="text.secondary">
                    {pokemon?.size ?? "?"}
                </Typography>

                <Grid container spacing={2} justifyContent='center'>
                    <Grid item xs={12} md={4}>
                        <Image src={pokemon?.imageUrl ?? unknowPokemonImage}/>
                    </Grid>
                    <Grid 
                        item 
                        xs={3} sm={1}
                        sx={{display: 'flex', flexDirection:'column', justifyContent:'center'}}
                    >
                        {pokemon?.stats.map(stat =>
                            <Typography key={stat.name} variant="h5" align="right"> 
                                {stat.value}
                            </Typography>
                        )}
                    </Grid>
                    <Grid 
                        item 
                        xs={8} sm={6} md={3}
                        sx={{display: 'flex', flexDirection:'column', justifyContent:'center'}}
                    >
                        {pokemon?.stats.map(stat =>
                            <Typography key={stat.name} variant="h5" align="left"> 
                                {stat.name} 
                            </Typography>
                        )}
                    </Grid>
                </Grid>
            </CardContent>

            <CardActions sx={{justifyContent:'end'}}> 
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
  width: 300,
  height: 300,
  margin: 'auto',
});
