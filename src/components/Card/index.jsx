import React, { useState } from "react";
import "./Card.css";

const Card = ({ image }) => {
  const [like, setLike] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault(); 
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="card">
      <img src="https://i.pinimg.com/originals/e4/d7/5b/e4d75be6a28b19b6a22ee814a8e57af3.jpg" alt="Post" className="post-image" />
      <div className="actions">
        <button onClick={() => setLike(like + 1)} className="action-button like">
          {like}
        </button>
        <form onSubmit={handleCommentSubmit}>
          <input
            className="action-button comment"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Comentar"
          />
          <button type="submit" className="action-button send">Enviar</button>
        </form>
      </div>
      {comments.map((comment, index) => (
        <p key={index}>{comment}</p>
      ))}
    </div>
  );
};

export default Card;
