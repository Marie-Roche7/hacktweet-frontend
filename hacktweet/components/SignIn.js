import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Home.module.css';
import { login } from '../reducers/user';
import { useRouter } from "next/router"
import Link from "next/link"
function SignIn(props) {

    const router = useRouter()

    const dispatch = useDispatch();
    // const username = useSelector((state) => state.username.value);
    // const token = useSelector((state) => state.token.value);

    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    const handleSignIn = () => {
        fetch('http://localhost:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: signInUsername, password: signInPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch(login({ username: signInUsername, token: data.token }));
                    setSignInUsername('');
                    setSignInPassword('');
                    console.log(signInUsername)
                    console.log(data.token)
                    router.push('/tweetPage')
                }
            });
        };
        

    return (

        <div>
            <img onClick={() => props.changeStep("main")} className={styles.possumpng} src="possum-banner.png"></img>
            <div className={styles.mimimi}>
                <h3>Create your Hacka<span className={styles.one}>c</span><span className={styles.two}>r</span><span className={styles.three}>a</span><span className={styles.four}>a</span><span className={styles.five}>a</span><span className={styles.six}>a</span> account</h3>
                <div className={styles.bibibi}>
                    <div className={styles.inputs}>
                        <input id="signUpUsername" type="text" className={styles.input} onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} placeholder="UserNaaaaaame"></input>
                        <input id="signUpPassword" type="password" className={styles.input} onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} placeholder="Paaaaaassword"></input>
                    </div>
                    <button className={`${styles.signup} ${styles.button}`} onClick={() => handleSignIn()}>Sign In</button>
                </div>
            </div>
        </div>
    );
}

export default SignIn;