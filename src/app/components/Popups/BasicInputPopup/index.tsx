// Styles
import '../styles.scss';
import './styles.scss';
import { StyledInputField, CancelButton, EnterButton } from '../styles';

interface BasicInputPopupProps {
    open: boolean;
    func?: () => void;
    change?: (e) => void;
    close: () => void;
    title: string;
    placeholder: string;
    id: string;
    error?: string;
}

const BasicInputPopup = ({
    open,
    func,
    change,
    close,
    title,
    id,
    placeholder,
    error,
}: BasicInputPopupProps) => {
    return (
        open === true && (
            <div className="Popup-container" onClick={close}>
                <div
                    className="BasicInputPopup-container"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="BasicInputPopup-title">
                        <h1>{title}</h1>
                    </div>
                    <div className="BasicInputPopup-content">
                        <StyledInputField
                            label={placeholder}
                            type={placeholder}
                            id={id}
                            key={id}
                            name={placeholder}
                            autoFocus={true}
                            autoCapitalize="false"
                            autoCorrect="false"
                            autoComplete="false"
                            autoSave="false"
                            onChange={(e) => change(e)}
                        />
                    </div>
                    {error && error !== null && (
                        <div className="BasicInputPopup-error">
                            <p>{error}</p>
                        </div>
                    )}
                    <div className="BasicInputPopup-actions">
                        <div className="Action-cancel">
                            <CancelButton onClick={close}>Cancel</CancelButton>
                        </div>
                        <div className="Action-enter">
                            <EnterButton onClick={func}>Enter</EnterButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default BasicInputPopup;
