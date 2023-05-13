import { GlobalContext } from "@/context/global.context";
import { convertUnixToDM } from "@/helper-functions";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import styled from "styled-components";

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

const CaseStudyHeadContainer = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 20px;
`;

const CaseStudyHeading = styled.h1``;

const AuthorName = styled(Link)`
  text-transform: uppercase;
  margin-top: 50px;
  text-decoration: underline;
  cursor: pointer;
`;

const HR = styled.hr`
  width: 95%;
  margin: auto;
  margin-top: 20px;
`;

const CaseStudyContent = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 40px;
  letter-spacing: 0.8px;

  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 25px;
  }
  p {
    font-size: 18px;
  }
  blockquote {
    font-size: 18px;
    color: #2f2f2f;
    border-left: 3px solid black;
    padding-left: 10px;
  }
  .ql-syntax {
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
    background-color: #eee;
    border-radius: 5px;
    font-size: 18px;
    box-sizing: border-box;
    padding: 2px 5px;
  }
`;

const CategoriesContainer = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 20px;
  font-size: 18px;

  div {
    &:hover {
      background: ${(props) => (props.theme == "light" ? "black" : "white")};
      color: ${(props) => (props.theme == "light" ? "white" : "black")};
    }
  }
`;

const Category = styled.div`
  padding: 5px 15px;
  border: 1px solid;
  border-radius: 5px;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.15s ease;
`;

const CaseStudy = ({ study }) => {
  const {
    CaseStudyId,
    metaTitle,
    metaDescription,
    Title,
    Content,
    ImageUrl,
    Categories,
    Author,
    ReadTime,
  } = study;

  const newCategories = JSON.parse(Categories);

  const { theme } = useContext(GlobalContext);

  return (
    <Container>
      <Head>
        {/* <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} /> */}
        <meta name="robots" content="noindex,nofollow"></meta>
      </Head>
      <Wrapper>
        <CoverImageContainer>
          <Image src={ImageUrl} width={100} height={100} />
        </CoverImageContainer>
        <CaseStudyHeadContainer>
          <CaseStudyHeading>{Title}</CaseStudyHeading>
          <AuthorName href="/saiyed-farhan">By Saiyed Farhan</AuthorName>
        </CaseStudyHeadContainer>
        <HR />
        <CaseStudyContent>
          <div dangerouslySetInnerHTML={{ __html: Content }}></div>
        </CaseStudyContent>
        <CategoriesContainer theme={theme}>
          {newCategories.map((cate) => {
            return <Category key={cate}>{cate}</Category>;
          })}
        </CategoriesContainer>
        <HR style={{ marginTop: "50px", width: "95%" }} />
      </Wrapper>
    </Container>
  );
};

export default CaseStudy;
