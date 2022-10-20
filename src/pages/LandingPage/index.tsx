// Styles
import './styles.scss';
import { StyledButton } from './styles';

const LandingPage = () => {
    return (
        <div className="LandingPage">
            <div className="Container">
                <h1>Social App</h1>
                <p>
                    Better than Discord, Facebook, Instagram, Twitter and
                    everything else you use.
                </p>
                <div className="Options">
                    <StyledButton
                        onClick={() => {
                            window.location.href = '/auth/signup';
                        }}
                    >
                        Sign Up
                    </StyledButton>
                    <StyledButton
                        onClick={() => {
                            window.location.href = '/auth/login';
                        }}
                    >
                        Login
                    </StyledButton>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
