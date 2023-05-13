import AllBlogs from "@/components/all-blogs/all-blogs";
import AllCaseStudies from "@/components/all-casestudies/all-casestudies";
import BlogSideContainer from "@/components/blog-side-container/blog-side-container";
import CaseStudySideContainer from "@/components/case-study-side-container/case-study-side-container";
import { GlobalContext } from "@/context/global.context";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 80px;
  display: flex;
  column-gap: 30px;
`;

const CaseStudies = () => {

  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Container>
        <AllCaseStudies />
        <CaseStudySideContainer />
      </Container>
    </>
  );
};

export default CaseStudies;
