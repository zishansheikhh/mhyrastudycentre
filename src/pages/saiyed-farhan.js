import Head from "next/head";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 100px;
`;

const Heading  = styled.h1`
    font-size: 40px;
    @media (min-width: 800px) {
        font-size: 5vw;
    }
`

const Wrapper = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
        align-items: flex-start;
    column-gap: 50px;
    @media (min-width: 800px) {
        margin-top: 80px;
        flex-direction: row;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    margin: auto;
    flex: 1;
    @media (min-width: 800px) {
        width: 90%;
    }

    img {
        width: 100%;
    }
`;

const AboutContainer = styled.div`
    flex: 2;
    margin-top: 50px;
    font-size: 20px;
    letter-spacing: 1px;
    line-height: 1.5;
    @media (min-width: 800px) {
        margin-top:0px;
    }

    p {
        margin-bottom: 25px;
    }
`;

const SaiyedFarhan = () => {
  return (
    <>
    <Head>
    <meta name="robots" content="noindex,nofollow"></meta>
    </Head>
    <Container>
        <Heading>Saiyed Farhan</Heading>
      <Wrapper>
        <ImageContainer>
          <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg" />
        </ImageContainer>
        <AboutContainer>
          <p>Veniam esse nostrud consequat qui officia ex incididunt. Labore ut
          deserunt non officia nulla ad dolore qui. Enim minim culpa dolore aute
          magna ut. Consectetur adipisicing ex adipisicing occaecat ex eu
          exercitation ea labore enim consequat ex. Nostrud eiusmod in minim
          cupidatat elit veniam cillum sint magna. Et deserunt occaecat ipsum
          aliqua.</p> 
          <p>Irure deserunt deserunt do aliqua cillum est occaecat
          incididunt. Fugiat dolor ut dolore aliqua ut deserunt mollit cupidatat
          est ea ad exercitation. Nisi veniam officia dolore pariatur. Ut est et
          anim et et voluptate adipisicing veniam sit ea voluptate velit veniam
          exercitation. Dolor nostrud ad laboris cillum id eu quis velit
          incididunt et minim officia sint minim.
          </p>
            <p>Lorem nisi mollit fugiat
          aliquip duis sit officia dolor ex qui laborum aliqua fugiat. Dolor qui
          incididunt exercitation reprehenderit quis ex voluptate cillum id. Sit
          eu quis do magna anim dolore. Nostrud voluptate incididunt voluptate
          proident quis dolor.
          </p>
        </AboutContainer>
      </Wrapper>
    </Container>
    </>
  );
};

export default SaiyedFarhan;
