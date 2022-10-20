// Styles
import '../styles.scss';
import './styles.scss';
import { StyledInputField, EnterButton } from '../styles';
import { RiCheckboxCircleFill, RiCloseCircleFill } from 'react-icons/ri';
import { useState } from 'react';

interface FriendsProps {
    userId: number;
    username: string;
    avatar: string;
}

interface FriendRequestsPopupProps {
    open: boolean;
    accept?: (userId: number) => void;
    decline?: (userId: number) => void;
    close: () => void;
    title: string;
    received: FriendsProps[];
    sent: FriendsProps[];
}

enum FriendRequestsContexts {
    sent = 'Sent',
    received = 'Received',
}

const FriendRequestsPopup = ({
    open,
    accept,
    decline,
    close,
    title,
    received,
    sent,
}: FriendRequestsPopupProps) => {
    const [context, setContext] = useState(FriendRequestsContexts.received);
    return (
        open === true && (
            <div className="Popup-container" onClick={close}>
                <div
                    className="FriendRequestsPopup-container"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="FriendRequestsPopup-title">
                        <h1>{title}</h1>
                    </div>
                    <div className="FriendRequestsPopup-content">
                        <div className="FriendRequestsPopup-content-search">
                            <StyledInputField
                                label={'Search'}
                                type={'placeholder'}
                                name={'placeholder'}
                                autoFocus={false}
                                autoCapitalize="false"
                                autoCorrect="false"
                                autoComplete="false"
                                autoSave="false"
                            />
                        </div>
                        <div className="FriendRequestsPopup-content-switch">
                            <button
                                onClick={() =>
                                    setContext(FriendRequestsContexts.received)
                                }
                                style={
                                    context === FriendRequestsContexts.received
                                        ? {
                                              border: '1px rgb(220, 220, 220) solid',
                                          }
                                        : {}
                                }
                            >
                                Received
                            </button>
                            <button
                                onClick={() =>
                                    setContext(FriendRequestsContexts.sent)
                                }
                                style={
                                    context === FriendRequestsContexts.sent
                                        ? {
                                              border: '1px rgb(220, 220, 220) solid',
                                          }
                                        : {}
                                }
                            >
                                Sent
                            </button>
                        </div>
                        <div className="FriendRequestPopup-content-options">
                            {context === FriendRequestsContexts.received &&
                                (received.length > 0 ? (
                                    received?.map((received) => (
                                        <div
                                            className="FriendRequestsPopup-content-options"
                                            key={
                                                received.username +
                                                received.userId
                                            }
                                        >
                                            <div className="FriendRequestsPopup-content-options-username">
                                                {received.username}
                                            </div>
                                            <div className="FriendRequestsPopup-content-options-actions">
                                                <i id="decline">
                                                    <RiCloseCircleFill
                                                        onClick={() =>
                                                            decline(
                                                                received.userId
                                                            )
                                                        }
                                                    />
                                                </i>
                                                <i id="accept">
                                                    <RiCheckboxCircleFill
                                                        onClick={() =>
                                                            accept(
                                                                received.userId
                                                            )
                                                        }
                                                    />
                                                </i>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="FriendRequestsPopup-error">
                                        <p>No friend requests received</p>
                                    </div>
                                ))}
                            {context === FriendRequestsContexts.sent &&
                                (sent.length > 0 ? (
                                    sent?.map((sent) => (
                                        <div className="FriendRequestsPopup-content-options">
                                            <div className="FriendRequestsPopup-content-options-username">
                                                {sent.username}
                                            </div>
                                            <div className="FriendRequestsPopup-content-options-actions">
                                                <i id="decline">
                                                    <RiCloseCircleFill
                                                        onClick={() =>
                                                            decline(sent.userId)
                                                        }
                                                    />
                                                </i>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="FriendRequestsPopup-error">
                                        <p>No friend requests sent</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="FriendRequestsPopup-actions">
                        <EnterButton onClick={close}>Close</EnterButton>
                    </div>
                </div>
            </div>
        )
    );
};

export default FriendRequestsPopup;
