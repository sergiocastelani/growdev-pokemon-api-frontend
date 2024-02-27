import { useNavigate, useParams } from "react-router-dom";
import { PokeCardFull } from "../components/PokeCardFull";
import { Box, Button } from "@mui/material";

export const PokemonPage = () => 
{
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <Box padding={5}>
            <PokeCardFull id={parseInt(id ?? '0')} />
            <Box pt={3} display='flex' justifyContent='end'>
                <Button
                    onClick={() => navigate(-1)}
                    variant="contained"
                >
                    Back
                </Button>
            </Box>
        </Box>
    );
};
