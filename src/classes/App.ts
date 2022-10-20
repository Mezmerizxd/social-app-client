// Classes
import Api from './Api';

interface SendFriendRequestProps {
    username: string;
}

interface RemoveFriendProps {
    userId: number;
}

class App {
    protected static instance: App;
    public static getInstance(): App {
        if (!App.instance) {
            App.instance = new App();
        }
        return App.instance;
    }

    public async GetUserData() {
        const response = await Api.POST('/app/get-userdata');
        if (!response) {
            return { error: 'Failed to connect to server.' };
        }
        if (response?.error === false && response?.success === true) {
            return {
                success: true,
                data: response.data,
            };
        } else {
            return { error: response?.errorMessage };
        }
    }

    public async SendFriendRequest({ username }: SendFriendRequestProps) {
        if (username && username !== '') {
            const response = await Api.POST('/app/send-friend-request', {
                username: username,
            });
            if (!response) {
                return { error: 'Failed to connect to server.' };
            }
            if (response?.error === false && response?.success === true) {
                return {
                    success: true,
                };
            } else {
                return { error: response?.errorMessage };
            }
        } else {
            return { error: 'Please enter a Username.' };
        }
    }

    public async RemoveFriend({ userId }: RemoveFriendProps) {
        if (userId && userId !== null) {
            const response = await Api.POST('/app/remove-friend', {
                userId: userId,
            });
            if (!response) {
                return { error: 'Failed to connect to server.' };
            }
            if (response?.error === false && response?.success === true) {
                return {
                    success: true,
                };
            } else {
                return { error: response?.errorMessage };
            }
        } else {
            return { error: 'Please enter a Username.' };
        }
    }

    public async AcceptFriendRequest({ userId }: RemoveFriendProps) {
        if (userId && userId !== null) {
            const response = await Api.POST('/app/accept-friend-request', {
                userId: userId,
            });
            if (!response) {
                return { error: 'Failed to connect to server.' };
            }
            if (response?.error === false && response?.success === true) {
                return {
                    success: true,
                };
            } else {
                return { error: response?.errorMessage };
            }
        } else {
            return { error: 'Please enter a Username.' };
        }
    }

    public async GetFriendRequests() {
        const response = await Api.POST('/app/get-friend-requests');
        if (!response) {
            return { error: 'Failed to connect to server.' };
        }
        if (response?.error === false && response?.success === true) {
            return {
                success: true,
                data: response.data,
            };
        } else {
            return { error: response?.errorMessage };
        }
    }

    public async GetFriends() {
        const response = await Api.POST('/app/get-friends');
        if (!response) {
            return { error: 'Failed to connect to server.' };
        }
        if (response?.error === false && response?.success === true) {
            return {
                success: true,
                data: response.data,
            };
        } else {
            return { error: response?.errorMessage };
        }
    }

    public async GetFriendsMessages(userId: number) {
        const response = await Api.POST('/app/get-friends-messages', {
            userId: userId,
        });
        if (!response) {
            return { error: 'Failed to connect to server.' };
        }
        if (response?.error === false && response?.success === true) {
            return {
                success: true,
                data: response.data,
            };
        } else {
            return { error: response?.errorMessage };
        }
    }
}

export default App;
