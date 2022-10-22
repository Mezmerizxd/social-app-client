// Dependencies
import { useEffect, useState } from 'react';

// Classes
import Api from '../../classes/Api';

// Styles
import './styles.scss';

const Home = () => {
    const [updates, setUpdates] = useState(null);

    useEffect(() => {
        setTimeout(async () => {
            const response = await Api.POST('/services/check-for-updates');
            if (response?.data) {
                setUpdates(JSON.parse(response.data));
            }
        });
    }, []);

    return (
        <div className="Home-container">
            <div className="Updates-container">
                <h1>Recent Updates</h1>
                {updates &&
                    updates.length > 0 &&
                    updates.map((update, i) => (
                        <div className="Update" key={i}>
                            <p className="Update-repo">
                                <a target="_blank" href={update.repoUrl}>
                                    {update.repo}
                                </a>
                            </p>
                            <p className="Update-pusher">- {update.pusher}</p>
                            {JSON.stringify(update.commits, null, 4)}
                            {/* {
                                    update.commits && update.commits.length > 0 && (
                                        update.commits.map((commit, i) => (
                                            <div className="Update-commit" key={i}>
                                                <p>ASDA</p>
                                                {JSON.stringify(update.commits[i])}
                                                <p className="Commit-message"><a target="_blank" href={commit.url}>{commit.message} - <span>{commit.timestamp}</span></a></p>
                                                <p className="Commit-author">- {commit.author}</p>
                                            </div>
                                        ))
                                    )
                                } */}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Home;
