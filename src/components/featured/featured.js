import styled from "styled-components";
import Client1 from "../../assets/images.jpg";
import Client2 from "../../assets/unnamed.png";
import Image from "next/image";
import { Zoom } from "react-reveal";

const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 120px;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const HeadingContainer = styled.div`
  flex: 3;
  width: 100%;
`;

const Heading = styled.div`
  font-size: 40px;
  text-transform: uppercase;
  width: 90%;
  font-weight: bold;
  @media (min-width: 800px) {
    font-size: 55px;
  }
`;

const ImageContainer = styled.div`
  flex: 4;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  margin-top: 50px;
  @media (min-width: 800px) {
    margin-top: 0px;
    grid-gap: 50px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: 100px;
    border-radius: 10px;
    @media (min-width: 800px) {
      height: 120px;
    }
  }
`;

const HR = styled.hr`
  width: 90%;
  margin: auto;
  box-sizing: border-box;
  margin-top: 120px;
`;

const Featured = () => {
  return (
    <Container>
      <Wrapper>
        <HeadingContainer>
          <Heading>clients i have worked with so far</Heading>
        </HeadingContainer>
        <ImageContainer>
          <Zoom>
            <ImageWrapper>
              <Image src={Client1} alt="client 1" />
            </ImageWrapper>
          </Zoom>
          <Zoom>
            <ImageWrapper>
              <Image src={Client2} alt="client 1" />
            </ImageWrapper>
          </Zoom>
          <Zoom>
            <ImageWrapper>
              <Image src={Client1} alt="client 1" />
            </ImageWrapper>
          </Zoom>
          <Zoom>
            <ImageWrapper>
              <Image src={Client2} alt="client 1" />
            </ImageWrapper>
          </Zoom>
          <Zoom>
            <ImageWrapper>
              <Image src={Client1} alt="client 1" />
            </ImageWrapper>
          </Zoom>
          <Zoom>
            <ImageWrapper>
              <Image src={Client2} alt="client 1" />
            </ImageWrapper>
          </Zoom>
        </ImageContainer>
      </Wrapper>
      <HR />
    </Container>
  );
};

export default Featured;
