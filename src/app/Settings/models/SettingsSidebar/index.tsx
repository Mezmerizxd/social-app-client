// Styles
import './styles.scss';

interface OptionProps {
    ctx: any;
}

interface SectionProps {
    title: string;
    options: OptionProps[];
}

interface SidebarProps {
    sections: SectionProps[];
    context: any;
    setContext: any;
}

const SettingsSidebar = ({ sections, context, setContext }: SidebarProps) => {
    const handleClick = (ctx: any): void => {
        setContext(ctx);
    };

    return (
        <div className="Settings-sidebar-container">
            {/* sidebar section to be used in a map? */}
            {sections &&
                sections.map((section) => (
                    <div className="Settings-sidebar-section">
                        <div
                            className="Settings-section-title"
                            id={section.title}
                            key={section.title}
                        >
                            <h1>{section.title}</h1>
                        </div>
                        <div className="Settings-section-options">
                            {section.options &&
                                section.options.map((option) => {
                                    return (
                                        <p
                                            onClick={() =>
                                                handleClick(option.ctx)
                                            }
                                            id={option.ctx}
                                            key={option.ctx}
                                            style={
                                                option.ctx &&
                                                option.ctx === context
                                                    ? {
                                                          backgroundColor:
                                                              '#292929',
                                                          color: 'white',
                                                      }
                                                    : {
                                                          backgroundColor:
                                                              '#1c1c1c',
                                                      }
                                            }
                                        >
                                            {option.ctx}
                                        </p>
                                    );
                                })}
                        </div>
                        <div className="Settings-section-border"></div>
                    </div>
                ))}
        </div>
    );
};

export default SettingsSidebar;
