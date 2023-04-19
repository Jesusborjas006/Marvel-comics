import "./Comic.css";

const Comic = (props) => {
  return (
    <div className="comic-card">
      <p>{props.id}</p>
    </div>
  );
};

export default Comic;
