// Dependencies
import { useEffect, useReducer, useState } from 'react';
import { RiAddFill, RiFileList2Fill } from 'react-icons/ri';
import socketIOClient from 'socket.io-client';

// Reducers
import { initial_data, Reducer } from './reducer';

// Styles
import './styles.scss';

// Components
import BasicInputPopup from '../components/Popups/BasicInputPopup';
import FriendRequestsPopup from '../components/Popups/FriendRequestsPopup';
import Loading from '../components/Loading';

// Models
import MiniSidebar from '../components/MiniSidebar';
import Friendslist from './models/Friendslist';
import Messaging from '../components/Messaging';

// Classes
import App from '../../classes/App';
import Auth from '../../classes/Auth';

interface AppProps {
    state: any;
    dispatch: React.Dispatch<any>;
}
interface FriendsProps {
    app: AppProps;
}

const Friends = ({ app }: FriendsProps) => {
    const [state, dispatch] = useReducer(Reducer, initial_data);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        app.dispatch({ type: 'SET_FRIENDS_REDUCER', friendsState: state });
    }, [state]);

    useEffect(() => {
        setTimeout(async () => {
            let friends = [];

            if (app.state.debugMode === true) {
                for (let i = 0; i < 100; i++) {
                    friends.push({
                        userId: i,
                        username: 'Test ' + i,
                        avatar: 'https://i.pravatar.cc/300',
                    });
                }
            } else {
                const friendslist = await App.getInstance().GetFriends();

                if (friendslist) {
                    if (friendslist?.success === true) {
                        friends = friendslist.data;
                    }
                }
            }

            dispatch({ type: 'SET_FRIENDS', friends: friends });

            dispatch({ type: 'SET_LOADING', loading: false });
        });
    }, []);

    useEffect(() => {
        setTimeout(async () => {
            let requests = [];
            let sent = [];
            if (app.state.debugMode === true) {
                for (let i = 0; i < 10; i++) {
                    requests.push({
                        userId: i,
                        username: 'Test ' + i,
                        avatar: 'https://i.pravatar.cc/300',
                    });
                }
                for (let i = 0; i < 10; i++) {
                    sent.push({
                        userId: i,
                        username: 'Test ' + i,
                        avatar: 'https://i.pravatar.cc/300',
                    });
                }
            } else {
                const friendRequests =
                    await App.getInstance().GetFriendRequests();
                if (friendRequests) {
                    if (friendRequests?.success === true) {
                        requests = friendRequests.data.received;
                        sent = friendRequests.data.sent;
                    }
                }
            }

            dispatch({
                type: 'SET_FRIEND_REQUESTS_RECEIVED',
                received: requests,
            });
            dispatch({ type: 'SET_FRIEND_REQUESTS_SENT', sent: sent });
            dispatch({ type: 'SET_LOADING', loading: false });
        });
    }, [state.addFriend.open]);

    useEffect(() => {
        if (state.selectedFriendDmId !== 0) {
            let socketUrl: string;
            if (process.env.NODE_ENV === 'production') {
                socketUrl = 'http://mezmerizxd.net:3002';
            } else {
                socketUrl = 'http://localhost:3002';
            }
            const socket = socketIOClient(socketUrl);
            socket.on(
                `send_friend_message_${state.selectedFriendDmId}`,
                (retData) => {
                    dispatch({
                        type: 'INSERT_NEW_MESSAGE',
                        message: retData,
                    });
                }
            );

            setSocket(socket);
            return () => {
                socket.close();
            };
        }
    }, [state.selectedFriendDmId]);

    const handleOpenFriend = async (userId: number) => {
        let messages = [];
        let selectedFriendDmId = 0;
        if (app.state.debugMode === true) {
            for (let i = 0; i < 100; i++) {
                messages.push({
                    messageId: i,
                    userId: i,
                    username: 'user' + i,
                    dateSent: new Date(),
                    content:
                        'messagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessagemessage' +
                        i,
                    avatar: 'https://i.pravatar.cc/300',
                });
            }
        } else {
            const friendsMessages = await App.getInstance().GetFriendsMessages(
                userId
            );
            messages = friendsMessages?.data?.messages;
            selectedFriendDmId = friendsMessages.data.directMessageId;
        }

        dispatch({
            type: 'SET_MESSAGES',
            messages: messages,
            selectedFriend: userId,
            selectedFriendDmId: selectedFriendDmId,
        });
    };

    const handleAddFriend = async () => {
        const addFriend = await App.getInstance().SendFriendRequest({
            username: state.addFriend.username,
        });
        if (addFriend) {
            if (addFriend?.error)
                dispatch({
                    type: 'SET_ADD_FRIEND_ERROR',
                    error: addFriend.error,
                });
            if (addFriend?.success === true)
                dispatch({ type: 'ADD_FRIEND_VISIBLE', open: false });
        } else {
            dispatch({ type: 'SET_ADD_FRIEND_ERROR', error: addFriend.error });
        }
    };

    const handleSendMessage = async (message: string) => {
        if (message && message !== '') {
            socket.emit('handleSendFriendMessage', {
                authorization: Auth.getInstance().authToken,
                userId: state.selectedFriend,
                messageContent: message,
            });
        }
    };

    return (
        <div className="Friends-container">
            <Loading name="friends" loading={state.loading} />

            <BasicInputPopup
                open={state.addFriend.open}
                func={handleAddFriend}
                change={(e) =>
                    dispatch({
                        type: 'SET_ADD_FRIEND_USERNAME',
                        username: e.target.value,
                    })
                }
                close={() =>
                    dispatch({ type: 'ADD_FRIEND_VISIBLE', open: false })
                }
                title="Add Friend"
                id="addFriend"
                placeholder="Enter a username"
                error={state.addFriend.error}
            />

            <FriendRequestsPopup
                open={state.friendRequests.open}
                accept={(userId) => {
                    App.getInstance().AcceptFriendRequest({ userId });
                    dispatch({
                        type: 'FRIEND_REQUESTS_REMOVE',
                        userId: userId,
                    });
                }}
                decline={(userId) => {
                    App.getInstance().RemoveFriend({
                        userId: userId,
                    });
                    dispatch({
                        type: 'FRIEND_REQUESTS_REMOVE',
                        userId: userId,
                    });
                }}
                close={() =>
                    dispatch({ type: 'FRIEND_REQUESTS_VISIBLE', open: false })
                }
                title="Friend Requests"
                received={state.friendRequests.received}
                sent={state.friendRequests.sent}
            />

            <MiniSidebar
                options={[
                    {
                        icon: <RiAddFill />,
                        func: () =>
                            dispatch({
                                type: 'ADD_FRIEND_VISIBLE',
                                open: true,
                            }),
                        //func: () => setAddFriendBool(true),
                    },
                    {
                        icon: <RiFileList2Fill />,
                        func: () =>
                            dispatch({
                                type: 'FRIEND_REQUESTS_VISIBLE',
                                open: true,
                            }),
                    },
                ]}
            />

            <Friendslist
                friends={state.friends}
                selectedFriend={state.selectedFriend}
                func={handleOpenFriend}
            />

            {state.selectedFriendDmId !== 0 && (
                <Messaging
                    app={app}
                    name="directMessages"
                    messages={state.messages}
                    send={(msg) => handleSendMessage(msg)}
                />
            )}
        </div>
    );
};

export default Friends;
