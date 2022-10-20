// Dependencies
import { useState } from 'react';

// Styles
import './styles.scss';

// Models
import SettingsSidebar from './models/SettingsSidebar';
import Profile from './models/Profile';

interface SettingsProps {
    app: any;
}

enum SettingsContextPages {
    account = 'My Account',
    profile = 'Profile',
    privacy = 'Privacy',
    subscription = 'Subscription',
    appearance = 'Appearance',
    micAndAudio = 'Mic & Audio',
    notifications = 'Notification',
    language = 'Language',
}

const Settings = ({ app }: SettingsProps) => {
    const [context, setContext] = useState(SettingsContextPages.account);

    return (
        <div className="Settings-container">
            <SettingsSidebar
                sections={[
                    {
                        title: 'Basic',
                        options: [
                            { ctx: SettingsContextPages.account },
                            { ctx: SettingsContextPages.profile },
                            { ctx: SettingsContextPages.privacy },
                        ],
                    },
                    {
                        title: 'Optional',
                        options: [{ ctx: SettingsContextPages.subscription }],
                    },
                    {
                        title: 'Advanced',
                        options: [
                            { ctx: SettingsContextPages.appearance },
                            { ctx: SettingsContextPages.micAndAudio },
                            { ctx: SettingsContextPages.notifications },
                            { ctx: SettingsContextPages.language },
                        ],
                    },
                ]}
                context={context}
                setContext={setContext}
            />

            <div className="Context-container">
                {context === SettingsContextPages.account && <p>account</p>}
                {context === SettingsContextPages.profile && (
                    <Profile app={app} />
                )}
                {context === SettingsContextPages.privacy && <p>privacy</p>}
                {context === SettingsContextPages.subscription && (
                    <p>subscription</p>
                )}
                {context === SettingsContextPages.appearance && (
                    <p>appearance</p>
                )}
                {context === SettingsContextPages.micAndAudio && (
                    <p>micAndAudio</p>
                )}
                {context === SettingsContextPages.notifications && (
                    <p>notifications</p>
                )}
                {context === SettingsContextPages.language && <p>language</p>}
            </div>
        </div>
    );
};

export default Settings;
