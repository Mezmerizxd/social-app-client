// Dependencies
import { useEffect, useReducer, useState } from 'react';
import {
    RiHome2Line,
    RiAccountPinCircleLine,
    RiHome2Fill,
    RiAccountPinCircleFill,
    RiSettings5Line,
    RiSettings5Fill,
} from 'react-icons/ri';

// Reducers
import { initial_data, Reducer } from './reducer';

// Components
import Navigation from './components/Navigation';
import Titlebar from './components/Titlebar';
import YesNoPopup from './components/Popups/YesNoPopup';
import Debug from './components/Debug';

// Styles
import './styles.scss';

// Classes
import Appl from '../classes/App';

// Contexts
import Settings from './Settings';
import Friends from './Friends';

enum ContextPages {
    home = 'Home',
    friends = 'Friends',
    settings = 'Settings',
}

const App = () => {
    const [context, setContext] = useState(ContextPages.home);
    const [state, dispatch] = useReducer(Reducer, initial_data);

    useEffect(() => {
        setTimeout(async () => {
            const userdata = await Appl.getInstance().GetUserData();
            dispatch({ type: 'SET_USERDATA', userData: userdata.data });
        });
    }, [context]);

    return (
        <div className="App-container">
            {state.debugMode === null && (
                <YesNoPopup
                    title="Debug Mode"
                    paragraph="Do you want to go into Debug Mode?"
                    open={state.yesNoPopup.open}
                    func={() => dispatch({ type: 'SET_DEBUGMODE', mode: true })}
                    close={() =>
                        dispatch({ type: 'SET_DEBUGMODE', mode: false })
                    }
                />
            )}

            {process.env.NODE_ENV !== 'production' && (
                <Debug app={{ state: state, dispatch: dispatch }} />
            )}

            <Titlebar
                title={context}
                app={{ state: state, dispatch: dispatch }}
            />

            <div className="Context-container">
                {context === ContextPages.home && <p>home</p>}
                {context === ContextPages.friends && (
                    <Friends app={{ state: state, dispatch: dispatch }} />
                )}
                {context === ContextPages.settings && (
                    <Settings app={{ state: state, dispatch: dispatch }} />
                )}
            </div>

            <Navigation
                app={{ state: state, dispatch: dispatch }}
                actions={[
                    {
                        ctx: ContextPages.home,
                        icons: {
                            line: <RiHome2Line />,
                            fill: <RiHome2Fill />,
                        },
                    },
                    {
                        ctx: ContextPages.friends,
                        icons: {
                            line: <RiAccountPinCircleLine />,
                            fill: <RiAccountPinCircleFill />,
                        },
                    },
                    {
                        ctx: ContextPages.settings,
                        icons: {
                            line: <RiSettings5Line />,
                            fill: <RiSettings5Fill />,
                        },
                    },
                ]}
                context={context}
                setContext={setContext}
            />
        </div>
    );
};

export default App;
