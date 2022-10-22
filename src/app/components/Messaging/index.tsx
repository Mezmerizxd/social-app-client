// Components
import Loading from '../Loading';

// Dependencies
import { useEffect, useState } from 'react';

// Styles
import './styles.scss';

interface MessageProps {
    messageId: number;
    userId: number;
    username: string;
    dateSent: any;
    content: string;
    avatar: string;
}

interface MessagingProps {
    app: any;
    messages: MessageProps[];
    name: string;
    send?: (msg) => void;
}

const Messaging = ({ app, messages, name, send }: MessagingProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        document.getElementById('autoscroll').scrollIntoView(false);
    }, [messages]);

    return (
        <div className="Messaging-container" key={name} id={name}>
            <Loading
                name={name}
                loading={!messages.length ? false : isLoading}
            />
            <div className="Messaging-messages-container">
                {messages &&
                    messages?.length > 0 &&
                    messages.map((message, i) => {
                        return (
                            <div
                                className="Messaging-messages-message"
                                key={message.messageId}
                                onLoad={() =>
                                    i + 1 === messages.length &&
                                    setIsLoading(false)
                                }
                            >
                                <div className="avatar">
                                    <img
                                        src={message.avatar}
                                        alt={message.avatar}
                                    />
                                </div>
                                <div className="content">
                                    <div className="details">
                                        {message.userId ===
                                        app.state.userData.userId ? (
                                            <p
                                                id="username"
                                                style={{
                                                    textDecoration: 'underline',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                You
                                            </p>
                                        ) : (
                                            <p id="username">
                                                {message.username}
                                            </p>
                                        )}
                                        <p id="date">
                                            {JSON.stringify(message.dateSent)}
                                        </p>
                                    </div>
                                    <p id="message">{message.content}</p>
                                </div>
                            </div>
                        );
                    })}
                <div id="autoscroll"></div>
            </div>
            <div className="Messaging-actions-container">
                <input
                    type="text"
                    name="Text"
                    id="Text"
                    placeholder={`Type your message here.`}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setTimeout(() => Promise<void>, 10);
                            send(message);
                            setMessage('');
                            const input = document.getElementById(
                                'Text'
                            ) as HTMLInputElement;
                            input.value = '';
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default Messaging;
