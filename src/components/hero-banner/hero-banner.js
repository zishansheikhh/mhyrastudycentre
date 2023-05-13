import banner1 from "../../assets/mhyra-banner-mobile.png";
import pcbanner from '../../assets/mhyra-banner-pc.png'

import styled from "styled-components";
import Head from "next/head";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from "next/link";
import Image from "next/image";
import { Slide } from "react-reveal";

const Container = styled.div`
  width: 100%;
  padding-top: 115px;
  background-color: #fff;
  background-image: url(${(props) => props.image.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 680px;

  @media (min-width: 800px) {
  display: none !important;
}
`;

const Desktopcontainer = styled.div`
  display: none;
  background-color: #fff;
  @media (min-width: 800px) {
  display: block !important; 
  width: 100%;
  padding-top: 100px;
  background-image: url(${(props) => props.image.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: #fff;
  height: 715px;
}
`;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column-reverse;
  justify-content: space-between;
  @media (min-width: 800px) {
    flex-direction: row;
    align-items: flex-end;
    height: 400px;
}
`;

const InnerWrapper = styled.div`
@media (min-width: 800px) {
  margin-top: 115px !important;
}
`;

const HeroBannerContainer = styled.div`
margin-top: -30px;
`;

const Title = styled.h1`
font-size: 5rem !important;
font-weight: 100;
color: #1c3d72 !important;
letter-spacing: 5px;
text-align: right;
font-family: ALGERIA  !important;
   @media(min-width: 800px) {
  font-size: 120px;
    letter-spacing: 27px;
    text-align: left;
   }
`;

const Subtitle = styled.h2`
color: #000;
text-transform: uppercase;
font-size: 1.6rem !important;
text-align: right;
letter-spacing: 2px;
margin-top: 10px !important;
text-transform: uppercase;
font-weight: 100;
font-family: BrushScriptMt !important;
letter-spacing: 5px !important;
@media(min-width: 800px) {
    font-size: 40px;
    letter-spacing: 20px;
    margin-top: -20px;
    margin-right: 10px;
    text-align: left;
    letter-spacing: 10px !important;
   }

`;

const HeroBanner = () => {
  

  return (
    <div>
    <Container image={banner1}>
      <Wrapper>
        <HeroBannerContainer>
            <Title style={{marginTop: '20px'}}>MHYRA </Title>
            <br />
            <Title style={{marginTop: '-10px'}}>Study</Title>
            <br />
            <Title style={{marginTop: '-10px'}}>Centre</Title>
            <Subtitle>Truly Education</Subtitle>
        </HeroBannerContainer>
      </Wrapper>
    </Container>
    <Desktopcontainer image={pcbanner}>
      <Wrapper>
        <HeroBannerContainer>
            <Title style={{marginTop: '20px'}}>MHYRA </Title>
            <br />
            <Title style={{marginTop: '-10px'}}>Study</Title>
            <br />
            <Title style={{marginTop: '-10px'}}>Centre</Title>
            <Subtitle>Truly Education</Subtitle>
        </HeroBannerContainer>
      </Wrapper>
    </Desktopcontainer>
      </div>
  );
};

export default HeroBanner;
