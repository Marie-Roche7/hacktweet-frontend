import styles from '../styles/Tweet.module.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../reducers/user';
import Post from './Post';
import { useRouter } from "next/router"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Tweet() {
  const [tweets, setTweets] = useState([]);
  const [input, setInput] = useState('');
  const [newTweet, setNewTweet] = useState(false);

  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
      fetch('http://localhost:3000/tweets').then(res => res.json())
          .then(data => {
              if(data.result) {
                  setTweets(data.tweets);
                  // console.log(tweets);
              };
          });
  }, []);

  const sendTweet = () => {
    // console.log(user.token);
    // console.log(input);
    if(input !== '') {
      const tweet = {
        token : user.token,
        tweet: input,
      };
    fetch('http://localhost:3000/tweets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(tweet),
    }).then(res => res.json())
      .then(data => {
        if(data.result) {
          console.log(data.tweets);
          setTweets(data.tweets);
          setNewTweet(!newTweet);
          setInput('');
        }
      });
    }
  };

  const quitLife = () => {
    dispatch(logout());
    router.push('/')
  }

  const post = tweets.map((e, i) => {
    return <Post key={i} text={e.text} time={e.createdAt} likes={e.likes} name={e.user.name} username={e.user.username} pp={e.user.pp} tweetId={e._id} />;
  })

  return (
      <div className={styles.container}>
          <div className={styles.userSide}>
              <img/>
              <div className={styles.user}>
                  {/* <Image href='' /> */}
                  <div>
                  <span><p>{user.username} @{user.username}</p></span>
                  </div>
                  <button onClick={() => quitLife()}>Logout</button>
              </div>
          </div>
          <div className={styles.middle}>
              <div className={styles.home}>
                  <h2>Home</h2>
                  <textarea placeholder="let's tweeet" onChange={e => setInput(e.target.value)} value={input} ></textarea>
                  <div className={styles.send}>
                      <p>{input.length}/280</p>
                      <button onClick={() => sendTweet()}>Tweet</button>
                  </div>
              </div>
              <br></br>
              <div className={styles.tweetsContainer}>
                  {post}
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


