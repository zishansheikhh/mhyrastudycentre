import AllBlogs from "@/components/all-blogs/all-blogs";
import BlogSideContainer from "@/components/blog-side-container/blog-side-container";
import { GlobalContext } from "@/context/global.context";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import styled from "styled-components"

const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 80px;
  display: flex;
  column-gap: 30px;
`;


const Blogs = () => {

  const router = useRouter();

  const {isLogin} = useContext(GlobalContext)

  if (!isLogin) {
    useEffect(() => {
      if (!isLogin) {
        router.push('/login');
      }
    }, [isLogin, router])
    return null;
  }


  return (
    <>
    <Head>
      <meta name="robots" content="noindex,nofollow" />
    </Head>
    <Container>
      <AllBlogs />
      <BlogSideContainer />
    </Container>
    </>
  )
}

export default Blogs