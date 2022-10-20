// Dependencies
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)({
    backgroundColor: 'rgb(240, 240, 240)',
    color: '#000',
    width: '100%',
    textDecoration: 'none',
    fontFamily: "'Exo 2', sans-serif;",
    marginInline: 5,
    '&:hover': {
        backgroundColor: 'rgb(220, 220, 220)',
    },
    // text
    '& .MuiButton-label': {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        textTransform: 'none',
        textDecoration: 'none',
    },
});
