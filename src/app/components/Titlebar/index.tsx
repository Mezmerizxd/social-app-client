// Styles
import './styles.scss';
import { RiArrowDownSLine } from 'react-icons/ri';

interface TitlebarProps {
    title: string;
    app: any;
}

const Titlebar = ({ title, app }: TitlebarProps) => {
    return (
        <div className="Titlebar-container">
            <div className="Titlebar-title">
                <p>{title}</p>
                {app?.state?.userData?.username && (
                    <div className="user">
                        <p>{app?.state?.userData?.username}</p>
                        <i>
                            <RiArrowDownSLine />
                        </i>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Titlebar;
