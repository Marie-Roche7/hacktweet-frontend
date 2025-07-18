import styles from '../styles/Tweet.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Tweet() {
    return (
        <div className={styles.container}>
            <div className={styles.userSide}>
                <img/>
                <div className={styles.user}>
                    {/* <Image href='' /> */}
                    <div>
                    <span><p>Name @Name</p></span>
                    </div>
                    <button>Logout</button>
                </div>
            </div>
            <div className={styles.middle}>
                <div className={styles.home}>
                    <h2>Home</h2>
                    <textarea placeholder="let's tweeet"></textarea>
                    <div className={styles.send}>
                        <p>/280</p>
                        <button>Tweet</button>
                    </div>
                </div>
                <br></br>
                <div className={styles.tweetsContainer}>
                    <div className={styles.tweet}>
                        <div className={styles.userInfos}>
                            <img/>
                            <span>Name</span>
                            <span>@Name</span>
                            <span>Time</span>
                        </div>
                        <div className={styles.tweet}>
                            <p>text of tweet #aaaaaah</p>
                        </div>
                        <div className={styles.LikeBtn}>
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


