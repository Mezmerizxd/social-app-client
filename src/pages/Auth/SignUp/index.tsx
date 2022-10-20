// Dependencies
import { StyledInputField, StyledCheckBox, StyledButton } from '../styles';
import { useState } from 'react';

// Classes
import User from '../../../classes/Auth';

// Styles
import './styles.scss';
import '../FormLayout.scss';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [acceptPolicy, setAcceptPolicy] = useState(true);
    const [remember, setRemember] = useState(false);

    async function handleSubmit() {
        const r = await User.getInstance().SignUp({
            email,
            username,
            password,
            confirmPassword,
            acceptPolicy,
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
        <div className="SignUp">
            <div className="Form">
                <div className="Form-header">
                    <h1>Sign Up</h1>
                    <p>Sign up to our services.</p>
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
                            label="Username"
                            type="text"
                            required={true}
                            autoFocus={false}
                            onChange={(e) => {
                                setUsername(e.target.value);
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
                    <div className="StyledInputField">
                        <StyledInputField
                            label="Confirm Password"
                            type="password"
                            required={true}
                            autoFocus={false}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="Form-other">
                    <StyledCheckBox
                        label="Accept Policies"
                        checked={acceptPolicy}
                        state={setAcceptPolicy}
                    />
                    <StyledCheckBox
                        label="Remember Me"
                        checked={remember}
                        state={setRemember}
                    />
                </div>
                <StyledButton onClick={handleSubmit}>Sign Up</StyledButton>
                <div className="Form-footer">
                    <p>
                        Already have an account? <a href="/auth/login">Login</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
