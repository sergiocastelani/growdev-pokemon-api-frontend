import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom'

export function TopBar()
{
    const navigate = useNavigate();

    return (
        <AppBar component="nav" position="sticky">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Pokemon
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Button 
                        onClick={() => navigate('/')}
                        sx={{ color: '#fff' }}
                    >
                        Home
                    </Button>
                    <Button 
                        onClick={() => navigate('/pokedex')}
                        sx={{ color: '#fff' }}
                    >
                        My Pokedex
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}