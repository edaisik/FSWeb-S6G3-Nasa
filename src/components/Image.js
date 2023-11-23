import "./Image.css";

const Image = (props) => {
  const { url } = props;
  return (
    <div className="img-container">
      <img src={url} />
    </div>
  );
};
export default Image;
