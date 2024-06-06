import { useState } from "react";
import "./App.css";
import Comment from "./Comment";

export default function App() {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const commentObj = {
      id: Math.floor(Math.random() * 1_000_000),
      email: email,
      comment: comment,
      date: new Date().toLocaleString(),
    };

    setComments([commentObj, ...comments]);
    setEmail("");
    setComment("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="comment">Comentário</label>
        <input
          type="text"
          name="comment"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>

      {comments.length > 0 ? (
        comments.map((c) => (
          <Comment
            key={c.id}
            email={c.email}
            comment={c.comment}
            date={c.date}
          />
        ))
      ) : (
        <h1 style={{ textAlign: 'center', marginTop: '10px' }}>Nenhum comentário ainda</h1>
      )}
    </>
  );
}
