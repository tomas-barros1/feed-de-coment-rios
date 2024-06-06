export default function Comment({ email, date, comment }) {
  return (
    <div id="comments">
      <div className="comment">
        <h1>{email}</h1>
        <p>{date}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
}
