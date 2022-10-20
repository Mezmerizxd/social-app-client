import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';

export const StyledInputField = styled(TextField)({
    width: '100%',
    '& label': {
        color: '#fff',
    },
    '& input': {
        color: '#fff',
    },
    '& label.Mui-focused': {
        color: 'rgb(240, 240, 240)',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgb(240, 240, 240)',
        },
        '&:hover fieldset': {
            borderColor: 'rgb(220, 220, 220)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgb(255, 255, 255)',
        },
    },
});

export const CancelButton = styled(Button)({
    color: 'rgb(200, 200, 200)',
    '&:hover': {
        backgroundColor: '#E36C5A',
        color: 'rgb(255, 255, 255)',
    },
});
export const EnterButton = styled(Button)({
    color: 'rgb(200, 200, 200)',
    '&:hover': {
        backgroundColor: '#61B84B',
        color: 'rgb(255, 255, 255)',
    },
});
