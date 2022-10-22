// Styles
import "./styles.scss";

const Home = () => {

    const updates = [
        {
            repo: 'social-app-client',
            repoUrl: 'https://github.com/Mezmerizxd/social-app-client',
            sender: 'Mezmerizxd',
            pusher: 'Mezmerizxd',
            commits: [
              {
                message: 'test',
                url: 'https://github.com/Mezmerizxd/social-app-client/commit/4d13feef2b9165921205c6251da471406df3fecc',
                timestamp: '2022-10-20T18:10:28+01:00',
                author: 'Mezmerizxd'
              },
              {
                message: 'test',
                url: 'https://github.com/Mezmerizxd/social-app-client/commit/4d13feef2b9165921205c6251da471406df3fecc',
                timestamp: '2022-10-20T18:10:28+01:00',
                author: 'Mezmerizxd'
              },
              {
                message: 'test',
                url: 'https://github.com/Mezmerizxd/social-app-client/commit/4d13feef2b9165921205c6251da471406df3fecc',
                timestamp: '2022-10-20T18:10:28+01:00',
                author: 'Mezmerizxd'
              },
              {
                message: 'test',
                url: 'https://github.com/Mezmerizxd/social-app-client/commit/4d13feef2b9165921205c6251da471406df3fecc',
                timestamp: '2022-10-20T18:10:28+01:00',
                author: 'Mezmerizxd'
              }
            ]
          }
    ]

    return (
        <div className="Home-container">
            <div className="Updates-container">
                <h1>Recent Updates</h1>
                {
                    updates && updates.length > 0 && (
                        updates.map((update, i) => (
                            <div className="Update" key={i}>
                                <p className="Update-repo"><a target="_blank" href={update.repoUrl}>{update.repo}</a></p>
                                <p className="Update-pusher">- {update.pusher}</p>
                                {
                                    update.commits && update.commits.length > 0 && (
                                        update.commits.map((commit, i) => (
                                            <div className="Update-commit" key={i}>
                                                <p className="Commit-message"><a target="_blank" href={commit.url}>{commit.message} - <span>{commit.timestamp}</span></a></p>
                                                <p className="Commit-author">- {commit.author}</p>
                                            </div>
                                        ))
                                    )
                                }
                            </div>
                        ))
                    )

                }
            </div>
        </div>
    )
}

export default Home;