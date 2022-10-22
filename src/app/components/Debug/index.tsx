import Draggable from 'react-draggable';

import './styles.scss';

interface DebugProps {
    app: any;
}

const Debug = ({ app }: DebugProps) => {
    return (
        <div className="Debug-container">
            <Draggable>
                <div className="Debug-info">
                    <div className="Debug-info-titlebar">
                        <p>Debug Information</p>
                    </div>
                    <div className="Debug-info-content">
                        <h1>
                            {process.env.NODE_ENV === 'production'
                                ? 'PRODUCTION'
                                : 'DEVELOPMENT'}{' '}
                            MODE
                        </h1>
                        <h1>{'[ App State ]'}</h1>
                        <p>
                            API Address:{' '}
                            <span>
                                {process.env.NODE_ENV === 'production'
                                    ? 'http://mezmerizxd.net/api'
                                    : 'http://localhost/api'}
                            </span>
                        </p>
                        <p>
                            Socket Address:{' '}
                            <span>
                                {process.env.NODE_ENV === 'production'
                                    ? 'http://mezmerizxd.net'
                                    : 'http://localhost'}
                            </span>
                        </p>
                        <p>
                            Debug Mode:{' '}
                            <span>
                                {app.state?.debugMode ? 'Enabled' : 'Disabled'}
                            </span>
                        </p>
                        <p>
                            Current Context: <span>{app.state?.context}</span>
                        </p>
                        <p>
                            User Id: <span>{app.state?.userData?.userId}</span>
                        </p>
                        <p>
                            Username:{' '}
                            <span>{app.state?.userData?.username}</span>
                        </p>
                        <h1>{'[ Friends State ]'}</h1>
                        <p>
                            Selected Friend:{' '}
                            <span>
                                {app.state?.friendsState?.selectedFriend}
                            </span>
                        </p>
                        <p>
                            Selected Friend DM:{' '}
                            <span>
                                {app.state?.friendsState?.selectedFriendDmId}
                            </span>
                        </p>
                        <p>
                            Selected DM Length:{' '}
                            <span>
                                {app.state?.friendsState?.messages?.length}
                            </span>
                        </p>
                        <p>
                            Friend Requests Sent:{' '}
                            <span>
                                {
                                    app.state?.friendsState?.friendRequests
                                        ?.sent?.length
                                }
                            </span>
                        </p>
                        <p>
                            Friend Requests Received:{' '}
                            <span>
                                {
                                    app.state?.friendsState?.friendRequests
                                        ?.received?.length
                                }
                            </span>
                        </p>
                    </div>
                </div>
            </Draggable>
        </div>
    );
};

export default Debug;
