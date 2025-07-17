import styles from '../styles/Home.module.css';
import Main from './Main';
import SignUp from './SignUp';
import SignIn from './SignIn';

function Home() {
  const isVisible = true;
  return (
    <div>
        <div className={styles.container}>
          <div className={styles.left}></div>
          <div className={styles.center}>
           {isVisible && <Main/>}
           {<SignIn/>}
           {<SignUp/>}
          </div>
        </div>
    </div>
  );
}

export default Home;