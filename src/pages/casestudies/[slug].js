import CaseStudySideContainer from "@/components/case-study-side-container/case-study-side-container";
import CaseStudy from "@/components/case-study/case-study";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 80px;
  display: flex;
  column-gap: 30px;
`;

const CaseStudyPage = (props) => {


  return (
    <>
    <Head>
    <meta name="robots" content="noindex,nofollow"></meta>
    </Head>
    <Container>
      <CaseStudy study={props} />
      <CaseStudySideContainer />
    </Container>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  let response = await fetch(`https://api.saiyedfarhan.com/customer/casestudies/${slug}`);
  let caseStudyData = await response.json();
  return { props: caseStudyData };
}

export default CaseStudyPage;
