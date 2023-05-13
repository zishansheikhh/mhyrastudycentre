import { convertUnixToDM } from "@/helper-functions";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import CoverImage from "../../assets/cover_image.jpg";
import BlogComments from "../blog-comments/blog-comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  flex: 8;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
`;

const CoverImageContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;

const BlogHeadContainer = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 20px;
`;

const BlogHeading = styled.h1`
  text-transform: uppercase;
  font-size: 40px;
`;

const HR = styled.hr`
  width: 95%;
  margin: auto;
  margin-top: 40px;
  background: lightgrey;

`;

const PageContent = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 40px;
  font-size: 18px;
letter-spacing: 1px;
line-height: 1.5;
`;

const KeyPointsContainer = styled.div`
  font-size: 18px;
letter-spacing: 1px;
line-height: 1.5;
width: 95%;
margin: auto;
margin-top: 40px;
`;

const KeyPoint = styled.div`
display: flex;
align-items: center;
column-gap: 20px;
margin-top: 7px;
`;


const TrafficComponent = () => {
  return (
    <Container>
      <Head>
        <title>Traffic Page</title>
        <meta name="description" content="Branding Page" />
      </Head>
      <Wrapper>
        <CoverImageContainer>
          <Image
            src={CoverImage}
            alt="blog cover image"
            width={100}
            height={100}
          />
        </CoverImageContainer>
        <BlogHeadContainer>
          <BlogHeading>Traffic</BlogHeading>
        </BlogHeadContainer>
        <HR />
        <PageContent>
          Deserunt dolor adipisicing in id ipsum dolor ea esse qui quis culpa
          anim laborum amet. Elit quis ullamco nulla adipisicing laboris velit
          est duis anim officia. Do laboris reprehenderit mollit aute. Cupidatat
          Lorem id cupidatat nisi exercitation veniam nostrud tempor ad. Dolor
          excepteur in proident eiusmod sunt ipsum.
        </PageContent>

        <PageContent>
          Deserunt dolor adipisicing in id ipsum dolor ea esse qui quis culpa
          anim laborum amet. Elit quis ullamco nulla adipisicing laboris velit
          est duis anim officia. Do laboris reprehenderit mollit aute. Cupidatat
          Lorem id cupidatat nisi exercitation veniam nostrud tempor ad. Dolor
          excepteur in proident eiusmod sunt ipsum.
        </PageContent>

        <PageContent>
          Deserunt dolor adipisicing in id ipsum dolor ea esse qui quis culpa
          anim laborum amet. Elit quis ullamco nulla adipisicing laboris velit
          est duis anim officia. Do laboris reprehenderit mollit aute. Cupidatat
          Lorem id cupidatat nisi exercitation veniam nostrud tempor ad. Dolor
          excepteur in proident eiusmod sunt ipsum.
        </PageContent>

        <KeyPointsContainer>
            <KeyPoint>
                <FontAwesomeIcon icon={faCheck} size="xl" />
                Lorem ipsum dolor
            </KeyPoint>

            <KeyPoint>
                <FontAwesomeIcon icon={faCheck} size="xl" />
                Lorem ipsum dolor
            </KeyPoint>

            <KeyPoint>
                <FontAwesomeIcon icon={faCheck} size="xl" />
                Lorem ipsum dolor
            </KeyPoint>
        </KeyPointsContainer>

        <HR style={{ marginTop: "50px", width: "95%" }} />
      </Wrapper>
    </Container>
  );
};

export default TrafficComponent;
