import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../styles/Home.module.css';
import { login } from '../reducers/user';


function SignUp(props) {

    const dispatch = useDispatch();
    // const user = useSelector((state) => state.user.value);

    const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
    const [signUpFirstName, setSignUpFirstName] = useState('');

    const handleSignUp = () => {
            fetch('http://localhost:3000/users/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: signUpFirstName, username: signUpUsername, password: signUpPassword }),
            }).then(response => response.json())
                .then(data => {
                    if (data.result) {
                        dispatch(login({ username: signUpUsername, token: data.token }));
                        setSignUpUsername('');
                        setSignUpPassword('');
                        setSignUpFirstName('');
                        console.log(data.token)
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
                        <input type="text" id="signUpFirstName" className={styles.input} onChange={(e) => setSignUpFirstName(e.target.value)} value={signUpFirstName} placeholder="FirstNaaaaaaame"></input>
                        <input type="text" id="signUpUsername" className={styles.input} onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} placeholder="UserNaaaaaame"></input>
                        <input type="password" id="signUpPassword" className={styles.input} onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} placeholder="Paaaaaassword"></input>
                    </div>
                    <button onClick={() => handleSignUp()} className={`${styles.signup} ${styles.button}`}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;