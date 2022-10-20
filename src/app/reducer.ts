export const initial_data = {
    debugMode: null,
    userData: null,
    yesNoPopup: {
        open: true,
    },
    context: null,
    friendsState: null,
};

export const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_DEBUGMODE':
            return {
                ...state,
                debugMode: action.mode,
                yesNoPopup: {
                    ...state.yesNoPopup,
                    open: false,
                },
            };
        case 'SET_USERDATA':
            return {
                ...state,
                userData: action.userData,
            };
        case 'SET_CONTEXT':
            return {
                ...state,
                context: action.context,
            };
        case 'SET_FRIENDS_REDUCER':
            return {
                ...state,
                friendsState: action.friendsState,
            };
        default:
            return state;
    }
};
