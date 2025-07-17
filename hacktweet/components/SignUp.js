import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styles from '../styles/Home.module.css';

function SignUp() {

    return (

        <div>
            <img className={styles.possumpng} src="possum-banner.png"></img>
            <div className={styles.mimimi}>
                <h3>Create your Hacka<span className={styles.one}>c</span><span className={styles.two}>r</span><span className={styles.three}>a</span><span className={styles.four}>a</span><span className={styles.five}>a</span><span className={styles.six}>a</span> account</h3>
                <div className={styles.bibibi}>
                    <div className={styles.inputs}>
                        <input className={styles.input} placeholder="FirstNaaaaaaame"></input>
                        <input className={styles.input} placeholder="UserNaaaaaame"></input>
                        <input className={styles.input} placeholder="Paaaaaassword"></input>
                    </div>
                    <div className={`${styles.signup} ${styles.button}`}>Sign Up</div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;