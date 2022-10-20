// Dependencies
import { useState } from 'react';
import { RiEdit2Fill, RiCheckFill } from 'react-icons/ri';

// Styles
import './styles.scss';
import { StyledInputField } from './styles';

interface ProfileProps {
    app: any;
}

const Profile = ({ app }: ProfileProps) => {
    const [editUsernameLocked, setEditUsernameLocked] = useState(true);
    const [editUsernameValue, setEditUsernameValue] = useState(null);

    return (
        <div className="Profile-container">
            <div className="Profile-userdata">
                <img
                    src={
                        app.state?.userData?.avatar
                            ? app.state?.userData?.avatar
                            : 'https://i.pravatar.cc/300'
                    }
                    alt=""
                />
                <div className="Profile-userdata-details">
                    <div className="Profile-userdata-details-edit-username">
                        {editUsernameLocked === true && (
                            <StyledInputField
                                label={app.state?.userData?.username}
                                disabled={true}
                                type="text"
                                id="username"
                                key="usernameInput"
                                name="usernameInput"
                                autoFocus={false}
                            />
                        )}
                        {editUsernameLocked === false && (
                            <StyledInputField
                                label={app.state?.userData?.username}
                                disabled={false}
                                type="text"
                                id="username"
                                key="usernameInput2"
                                name="usernameInput"
                                autoFocus={true}
                                onChange={(e) =>
                                    setEditUsernameValue(e.target.value)
                                }
                            />
                        )}
                        <i>
                            <RiEdit2Fill
                                style={
                                    editUsernameLocked
                                        ? { background: '#61B84B' }
                                        : { background: '#E36C5A' }
                                }
                                onClick={() => {
                                    setEditUsernameLocked(!editUsernameLocked);
                                }}
                            />
                        </i>
                        {editUsernameValue &&
                            editUsernameLocked === false &&
                            editUsernameValue !== null && (
                                <i>
                                    <RiCheckFill
                                        style={{ background: '#61B84B' }}
                                        onClick={() => {
                                            setEditUsernameLocked(
                                                !editUsernameLocked
                                            );
                                        }}
                                    />
                                </i>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
