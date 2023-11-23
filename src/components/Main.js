import Image from "./Image";
import Video from "./Video";
import Description from "./Accordion";
import styled from "styled-components";
// import "./Main.css";

const Container = styled.div`
  width: 60vw;
  margin: 2rem auto;
  border: 2px solid black;
  padding: 1rem;
  border-radius: 0.5rem;
`;

const Title = styled.h1`
color:$(props => (props.type)==="video"?"red":"green"}`;

const Info = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const CriticalInfo = styled(Info)`
  color: red;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: gray;
  }
`;

const Main = (props) => {
  const { data } = props;

  return (
    data && (
      <Container>
        <Title type={data.media_type}>{data.title}</Title>
        {data.media_type === "image" ? (
          <Image url={data.url}></Image>
        ) : (
          <Video url={data.url}></Video>
        )}
        <div className="details-container">
          <Details>
            <Info>{data.copyright}</Info>
            <CriticalInfo>{data.date}</CriticalInfo>
          </Details>
        </div>
        <Description data={data}></Description>
      </Container>
    )
  );
};
export default Main;
