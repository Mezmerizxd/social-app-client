// Classes
import Api from './Api';

interface SignUpProps {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
    acceptPolicy: boolean;
}

interface LoginProps {
    email: string;
    password: string;
}

class Auth {
    protected static instance: Auth;
    public static getInstance(): Auth {
        if (!Auth.instance) {
            Auth.instance = new Auth();
        }
        return Auth.instance;
    }

    public authToken: string = localStorage.getItem('authorization');

    public async SignUp({
        email,
        username,
        password,
        confirmPassword,
        acceptPolicy,
    }: SignUpProps) {
        if (email && username && password && confirmPassword && acceptPolicy) {
            // Check if passwords match
            if (password === confirmPassword) {
                const response = await Api.POST('/auth/signup', {
                    username: username,
                    email: email,
                    password: password,
                });
                if (response?.error === false && response?.success === true) {
                    return {
                        success: true,
                        authorization: response.authorization,
                    };
                } else {
                    return { error: response?.errorMessage };
                }
            } else {
                return { error: 'Passwords do not match!' };
            }
        } else {
            return { error: 'Please fill in the required fields!' };
        }
    }

    public async Login({ email, password }: LoginProps) {
        if (email && password) {
            const response = await Api.POST('/auth/login', {
                email: email,
                password: password,
            });
            if (!response) {
                return { error: 'Failed to connect to server.' };
            }
            if (response?.error === false && response?.success === true) {
                if (response?.authorization) {
                    return {
                        success: true,
                        data: response.data,
                        authorization: response.authorization,
                    };
                } else {
                    return { error: 'Failed to get authorization!' };
                }
            } else {
                return { error: response?.errorMessage };
            }
        } else {
            return { error: 'Please fill in the required fields!' };
        }
    }
}

export default Auth;
