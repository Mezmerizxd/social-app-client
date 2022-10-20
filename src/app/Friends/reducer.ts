export const initial_data = {
    loading: true,
    friends: null,
    selectedFriend: 0,
    selectedFriendDmId: 0,
    addFriend: {
        open: false,
        username: '',
        error: null,
    },
    friendRequests: {
        open: false,
        sent: null,
        received: null,
    },
    messages: [],
};

export const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.loading,
            };
        case 'SET_FRIENDS':
            return {
                ...state,
                friends: action.friends,
            };
        case 'SET_MESSAGES':
            return {
                ...state,
                messages: action.messages,
                selectedFriend: action.selectedFriend,
                selectedFriendDmId: action.selectedFriendDmId,
            };
        case 'ADD_FRIEND_VISIBLE':
            return {
                ...state,
                addFriend: {
                    open: action.open,
                },
            };
        case 'SET_ADD_FRIEND_USERNAME':
            return {
                ...state,
                addFriend: {
                    ...state.addFriend,
                    username: action.username,
                },
            };
        case 'SET_ADD_FRIEND_ERROR':
            return {
                ...state,
                addFriend: {
                    ...state.addFriend,
                    error: action.error,
                },
            };
        case 'FRIEND_REQUESTS_VISIBLE':
            return {
                ...state,
                friendRequests: {
                    ...state.friendRequests,
                    open: action.open,
                },
            };
        case 'SET_FRIEND_REQUESTS_RECEIVED':
            return {
                ...state,
                friendRequests: {
                    ...state.friendRequests,
                    received: action.received,
                },
            };
        case 'SET_FRIEND_REQUESTS_SENT':
            return {
                ...state,
                friendRequests: {
                    ...state.friendRequests,
                    sent: action.sent,
                },
            };
        case 'FRIEND_REQUESTS_REMOVE':
            return {
                ...state,
                friendRequests: {
                    sent: state.friendRequests.sent.filter(
                        (user) => user.userId !== action.userId
                    ),
                    open: state.friendRequests.open,
                    received: state.friendRequests.received.filter(
                        (user) => user.userId !== action.userId
                    ),
                },
            };
        case 'INSERT_NEW_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, action.message],
            };
        default:
            return state;
    }
};
