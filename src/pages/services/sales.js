import BrandingComponent from "@/components/services-component/branding-component";
import SalesComponent from "@/components/services-component/sales-component";
import ServicesSideContainer from "@/components/services-side-container/services-side-container";
import { GlobalContext } from "@/context/global.context";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 80px;
  display: flex;
  column-gap: 30px;
`;

const SalesPage = () => {
  
  return (
    <>
    <Head>
    <meta name="robots" content="noindex,nofollow"></meta>
    </Head>
      <Container>
      <SalesComponent />
      <ServicesSideContainer activeService={"sales"} />
    </Container>
    </>
  );
};


export default SalesPage;
