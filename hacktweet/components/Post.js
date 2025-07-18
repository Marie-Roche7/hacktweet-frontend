import styles from '../styles/Tweet.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function Post(props) {
	const user = useSelector((state) => state.user.value);
	const [likeLen, setLikeLen] = useState(props.likes.length);

	let isVisible = false;
	if(props.username === user.username)
		isVisible = true;

	const likedIt = () => {
		const like = {
        token : user.token,
        tweetId: props.tweetId,
      };
    fetch('http://localhost:3000/tweets', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(like),
    }).then(res => res.json())
      .then(data => {
        if(data.result) {
          setLikeLen(data.likes);
					console.log(likeLen);
        }
      });
	}

	return (
		<div className={styles.tweet}>
			<div className={styles.userInfos}>
				<img/>
				<span>{props.name}</span>
				<span>@{props.username}</span>
				<span>{props.time}</span>
			</div>
			<div className={styles.tweet}>
				<p>{props.text}</p>
			</div>
			<div className={styles.LikeBtn}>
				<button onClick={() => likedIt()}>coeur</button>{likeLen}
				{isVisible && <button>trash</button>}
			</div>
		</div>
	);
};