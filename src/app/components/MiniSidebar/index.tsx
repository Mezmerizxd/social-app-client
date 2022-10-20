// Styles
import './styles.scss';

interface MiniSidebarOptionProps {
    icon: React.ReactNode;
    func: () => void;
    state?: boolean;
}

interface MiniSidebarProps {
    options: MiniSidebarOptionProps[];
}

const MiniSidebar = ({ options }: MiniSidebarProps) => {
    return (
        <div className="Mini-sidebar-container">
            {options &&
                options.map((option) => {
                    if (option?.state === undefined || option?.state === true)
                        return (
                            <div
                                className="Mini-sidebar-option"
                                onClick={option.func}
                            >
                                <i>{option.icon}</i>
                            </div>
                        );
                })}
        </div>
    );
};

export default MiniSidebar;
