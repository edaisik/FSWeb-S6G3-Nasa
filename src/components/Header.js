import "./Header.css";

const Header = (props) => {
  const { date, setDate } = props;
  function changeHandler(e) {
    setDate(e.target.value);
  }

  return (
    <header>
      <img src="https://api.nasa.gov/assets/img/favicons/favicon-192.png" />
      <input type="date" onChange={changeHandler} value={date} />
    </header>
  );
};

export default Header;
