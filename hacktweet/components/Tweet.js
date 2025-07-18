import styles from '../styles/Home.module.css';


function Tweet() {
    return (
        <div className={styles.container}>
            <div className={styles.userSide}>
                <img/>
                <div className={styles.user}>
                    <img/>
                    <div>
                    <p>Name</p>
                    <p>@Name</p>
                    </div>
                    <button>Logout</button>
                </div>
            </div>
            <div className={styles.middle}>
                <div className={styles.home}>
                    <input placeholder="let's tweeet"></input>
                    <div>
                        <p>Nmb de Tweets</p>
                        <button>Tweet</button>
                    </div>
                </div>
                <div className={styles.tweetsContainer}>
                    <div className={styles.tweet}>
                        <div>
                            <img/>
                            <p>Name</p>
                            <p>@Name</p>
                            <p>Time</p>
                        </div>
                        <p>text of tweet #aaaaaah</p>
                        <div className={styles.LikeBin}>
                            <button>coeur</button>
                            <button>trash</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.trends}>
                <h2>Trends!!</h2>
                <div>
                    <p>#hackathon</p>
                    <p>2 Tweets</p>
                </div>
            </div>
        </div>
    );
}

export default Tweet;


