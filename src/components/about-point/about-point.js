import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";

const PointContainer = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: flex-start;
`;

const ImageContainer = styled.div``;


const ContentPoint = styled.li`
  margin-top: 10px;
  color: #000;
  list-style: none;
`;

const BoldPoint = styled.span`
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
`
const InfoPoint = styled.p`
  font-size: 15px;
  color: #3c3c3c;
`

const ActionButton = styled.span`
    cursor: pointer;
    margin-left: 5px;
    font-size: 12px;
    font-weight: bold;
    color: #888;
`

const AboutPoint = ({ Keypoint }) => {

    const {id, Key, Point, Icon} = Keypoint

  const [message, setMessage] = useState(Point.slice(0, 20)+'...');

    const handleShowMore = () => {
    setMessage(Point)
  }

  const handleShowLess = () => {
    setMessage(message.slice(0,20) + '...')
  }

  return (
    <PointContainer>
        <ImageContainer>
            <Image src={Icon} alt="image" width={50} unoptimized />
        </ImageContainer>
        <ContentPoint key={id}>
      <BoldPoint> {Key} : </BoldPoint>
      <InfoPoint> {message} </InfoPoint>
      {
        (message.length <= 25) ? (
            <ActionButton onClick={handleShowMore}>read more
              </ActionButton>
        ) : (
            <ActionButton onClick={handleShowLess}>read less
              </ActionButton>
        )
      }
    </ContentPoint>
    </PointContainer>
  );
};

export default AboutPoint;
