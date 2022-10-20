// Dependencies
import { StyledInputField, StyledCheckBox, StyledButton } from '../styles';
import { useState } from 'react';

// Classes
import User from '../../../classes/Auth';

// Styles
import './styles.scss';
import '../FormLayout.scss';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    async function handleSubmit() {
        const r = await User.getInstance().Login({
            email,
            password,
        });
        if (r?.success) {
            // Success move on
            alert('Success');
            User.getInstance().authToken = r.authorization;
            localStorage.setItem('authorization', r.authorization);
            localStorage.setItem('auto_login', remember ? 'true' : 'false');
            window.location.href = '/app';
        } else {
            // Error: r?.error
            alert(r?.error);
        }
    }

    return (
        <div className="Login">
            <div className="Form">
                <div className="Form-header">
                    <h1>Login</h1>
                    <p>Log into the system.</p>
                </div>
                <div className="Form-body">
                    <div className="StyledInputField">
                        <StyledInputField
                            label="Email"
                            type="email"
                            required={true}
                            autoFocus={true}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div className="StyledInputField">
                        <StyledInputField
                            label="Password"
                            type="password"
                            required={true}
                            autoFocus={false}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="Form-other">
                    <StyledCheckBox
                        label="Remember Me"
                        checked={remember}
                        state={setRemember}
                    />
                </div>
                <StyledButton onClick={handleSubmit}>Login</StyledButton>
                <div className="Form-footer">
                    <p>
                        Don&apos;t have an account?{' '}
                        <a href="/auth/signup">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
