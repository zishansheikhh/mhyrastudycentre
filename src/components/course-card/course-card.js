import { faArrowDown, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background: white;
`;

const ImageContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px 10px 0 0;
  }
`;

const InfoContainer = styled.div`
  box-sizing: border-box;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CourseHead = styled.h3`
width: 90%;
margin: auto;
  margin-top: 20px;
  font-size: 25px;
`;

const CourseDescriptionContainer = styled.div`
width: 90%;
margin: auto;
  margin-top: 30px;
  font-size: 17px;
`;

const CourseDescription = styled.p`
  margin: 10px 0;
`;

const ActionButton = styled.div`
    width: 90%;
  margin: auto;
  margin-top: 30px;
  text-align: center;
  box-sizing: border-box;
  padding: 13px 60px;
  font-size: 20px;
  font-weight: 500;
  background: #183b72;
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    background: #204d94;
  }
`;

const CourseCard = ({ course }) => {
  const {
    CourseId,
    CourseImage,
    CourseTitle,
    Description,
    Subjects,
    Note,
    Duration,
  } = course;

  const router = useRouter();

  const handleOnClickRouteChange = () => {
    router.push(`/courses/${CourseId}`)
  }

  return (
    <Container onClick={handleOnClickRouteChange}>
      <ImageContainer>
        <Image src={CourseImage} width={100} alt={CourseTitle} />
      </ImageContainer>
      <InfoContainer>
        <CourseHead>{CourseTitle}</CourseHead>
        {/* <CourseDescriptionContainer>
          <CourseDescription>
            <b>Course Subjects : </b>
            {Subjects}
          </CourseDescription>
          <CourseDescription>
            <b>Batch Duration : </b>
            {Duration}
          </CourseDescription>
          <CourseDescription>
            <b>Course Description : </b>
            {Description.slice(0, 300)}...
          </CourseDescription>
          {Note && (
            <CourseDescription>
              <b>Note : </b>
              {Note}
            </CourseDescription>
          )}
        </CourseDescriptionContainer> */}
        <ActionButton>Enroll Now !</ActionButton>
      </InfoContainer>
    </Container>
  );
};

export default CourseCard;
