import "./Comic.css";

const Comic = (props) => {
  return (
    <div className="comic-card">
      <img className="comic-img" src={`${props.img.path}.${props.img.extension}`} alt="poster" />
      <h2 className="comic-title">{props.title}</h2>
    </div>
  );
};

export default Comic;
