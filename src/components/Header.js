import { Button } from "reactstrap";
import styled from "styled-components";
// import "./Header.css";

const StyHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  align-items: center;
`;
const HeaderImg = styled.img`
  width: 4rem;
`;

const Header = (props) => {
  const { date, setDate, setIsRandom } = props;
  function changeHandler(e) {
    setDate(e.target.value);
    setIsRandom(false);
  }
  const handleClick = () => {
    setIsRandom(true);
  };

  return (
    <StyHeader>
      <HeaderImg src="https://api.nasa.gov/assets/img/favicons/favicon-192.png" />
      <Button color="primary" onClick={handleClick}>
        Random Pick
      </Button>
      <input type="date" onChange={changeHandler} value={date} />
    </StyHeader>
  );
};

export default Header;
