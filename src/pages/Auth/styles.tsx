// Dependencies
import { styled } from '@mui/material/styles';
import { TextField, Checkbox, FormControlLabel, Button } from '@mui/material';

// TextField
export const StyledInputField = styled(TextField)({
    width: '100%',
    '& label': {
        color: '#fff',
        fontFamily: "'Exo 2', sans-serif;",
    },
    '& input': {
        color: '#fff',
        fontFamily: "'Exo 2', sans-serif;",
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

// CheckBox
interface StyledCheckBoxProps {
    label?: string;
    required?: boolean;
    checked?: boolean;
    state?: any;
    onClick?: () => void;
}
export const StyledCheckBox = ({
    label,
    required,
    state,
    checked,
    onClick,
}: StyledCheckBoxProps) => {
    const CheckBox = styled(Checkbox)({
        '& .MuiSvgIcon-root': {
            color: 'rgb(240, 240, 240)',
        },
        '& .MuiCheckbox-root': {
            color: 'rgb(240, 240, 240)',
            fontFamily: "'Exo 2', sans-serif;",
        },
    });

    return (
        <div className="StyledCheckBox">
            <FormControlLabel
                control={
                    <CheckBox
                        required={required}
                        checked={checked}
                        onChange={(e) => {
                            e.persist();
                            state(e.target.checked);
                        }}
                        onClick={onClick}
                    />
                }
                label={label}
            />
        </div>
    );
};

// Button
export const StyledButton = styled(Button)({
    backgroundColor: 'rgb(240, 240, 240)',
    color: '#000',
    width: '100%',
    fontFamily: "'Exo 2', sans-serif;",
    '&:hover': {
        backgroundColor: 'rgb(220, 220, 220)',
    },
});
