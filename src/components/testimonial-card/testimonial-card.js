import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faQuoteRightAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-reveal";

const Container = styled.div`
  width: 280px;
  margin: 10px 20px;
  background-color: white;
  padding: 40px 20px;
  @media (min-width: 800px) {
    width: 320px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

const ReviewContainer = styled.div`
  position: relative;
  color:black;
  box-sizing: border-box;
  padding: 20px;
  @media (min-width: 800px) {
  }
`;
const Review = styled.p`
  font-size: 15px;
  letter-spacing: 1px;
  line-height: 1.3;
  text-align: center;
  margin-top: 15px;
`;

const ReviewerContainer = styled.div`
  display: flex;
  margin-top: 20px;
  box-sizing: border-box;
  padding: 5px 10px;
  justify-content: center;
  flex-direction: column;
`;
const ReviewerImageContainer = styled.div``;

const ReviewerImage = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 2px 6px;
  color: black;
  margin: auto;
`;
const ReviewerInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ReviewerName = styled.p`
  letter-spacing: 0.5px;
  margin: 0 0 0 10px;
  font-weight: 600;
  font-size: 17px;
  width: fit-content;
`;

const ReviewerWork = styled.p`
  margin: 0 0 0 10px;
  font-size: 14px;
  color: gray;
  font-weight: 600;
  width: fit-content;
`;

const TestimonailCard = ({ id }) => {
  return (
    <Fade right>
      <Container>
      <Wrapper>
        <ReviewContainer>
            <FontAwesomeIcon
              icon={faQuoteRightAlt}
              size="3x"
              style={{width: '100%', textAlign: 'center' }}
            />
          <Review>
            Excepteur consectetur aliqua ex commodo id labore enim sit aute ex
            cillum.px 20Nulla occaecat magna consectetur aliqua ex
          </Review>
        </ReviewContainer>
        <ReviewerContainer>
          <ReviewerImageContainer>
            <ReviewerImage>
              <FontAwesomeIcon icon={faUser} size="2xl" />
            </ReviewerImage>
          </ReviewerImageContainer>
          <ReviewerInfo>
            <ReviewerName>Anushray Saini</ReviewerName>
            <ReviewerWork>Class 10</ReviewerWork>
          </ReviewerInfo>
        </ReviewerContainer>
      </Wrapper>
    </Container>
    </Fade>
  );
};

export default TestimonailCard;
