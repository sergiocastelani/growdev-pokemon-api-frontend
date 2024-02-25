import { Button, Card, CardActions, CardContent, Typography, styled } from "@mui/material";

export interface PokeCardProps
{
    id: number;
}

export function PokeCard(props: PokeCardProps) 
{
    const pokemon = {
        name: 'bulbasaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png',
        size: 'small',
    };

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h5" component="div">
                    {pokemon.name}
                </Typography>
                <Typography color="text.secondary">
                    {pokemon.size}
                </Typography>
                <Image src={pokemon.image}/>
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
