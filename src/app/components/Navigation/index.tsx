// Styles
import './styles.scss';

interface ActionsProps {
    ctx: any;
    icons: {
        line: React.ReactNode;
        fill: React.ReactNode;
    };
}

interface NavigationProps {
    app: any;
    actions: ActionsProps[];
    context: any;
    setContext: React.Dispatch<React.SetStateAction<any>>;
}

const Navigation = ({ app, actions, context, setContext }: NavigationProps) => {
    const handleClick = (ctx: any): void => {
        setContext(ctx);
        app.dispatch({ type: 'SET_CONTEXT', context: ctx });
    };
    return (
        <div className="Navigation-container">
            <div className="Navigation-actions">
                {actions &&
                    actions.map((action) => {
                        return (
                            <button
                                onClick={() => handleClick(action.ctx)}
                                id={action.ctx}
                                key={action.ctx}
                                style={
                                    action.ctx === context
                                        ? { backgroundColor: '#1B1B1B' }
                                        : { backgroundColor: '#111111' }
                                }
                            >
                                <i>
                                    {action.ctx === context
                                        ? action.icons.fill
                                        : action.icons.line}
                                </i>
                            </button>
                        );
                    })}
            </div>
        </div>
    );
};

export default Navigation;
