import "./Comic.css";

const Comic = (props) => {
  console.log("Comic Props<>>>>", props);
  return (
    <div className="comic-card">
      <h2>{props.title}</h2>
    </div>
  );
};

export default Comic;
