// Styles
import '../styles.scss';
import './styles.scss';
import { CancelButton, EnterButton } from '../styles';

interface YesNoPopupProps {
    open: boolean;
    func?: () => void;
    close: () => void;
    title: string;
    paragraph: string;
}

const YesNoPopup = ({
    open,
    func,
    close,
    title,
    paragraph,
}: YesNoPopupProps) => {
    return (
        open === true && (
            <div className="Popup-container">
                <div className="YesNoPopup-container">
                    <div className="YesNoPopup-title">
                        <h1>{title}</h1>
                    </div>
                    <div className="YesNoPopup-content">
                        <p>{paragraph}</p>
                    </div>
                    <div className="YesNoPopup-actions">
                        <div className="Action-cancel">
                            <CancelButton onClick={close}>No</CancelButton>
                        </div>
                        <div className="Action-enter">
                            <EnterButton onClick={func}>Yes</EnterButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default YesNoPopup;
