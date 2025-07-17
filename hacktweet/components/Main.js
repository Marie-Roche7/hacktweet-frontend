import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styles from '../styles/Home.module.css';

function Main() {

    return (

        <div>
            <img className={styles.possumpng} src="possum-banner.png"></img>
            <div className={styles.mimimi}>
                <h3>SEE WHAT'S HAPPENING</h3>
                <div className={styles.lalala}>
                    <div className={styles.text}>
                        <h4>JOIN HACKA<span className={styles.one}>C</span><span className={styles.two}>R</span><span className={styles.three}>A</span><span className={styles.four}>A</span><span className={styles.five}>A</span><span className={styles.six}>A</span> TODAY <p>*internal screaming intensified*</p></h4>
                    </div>
                    <div className={`${styles.signup} ${styles.button}`}>Sign Up</div>
                    <div>
                        <p>Already have an account?</p>
                        <div className={`${styles.signin} ${styles.button}`}>Sign In</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;