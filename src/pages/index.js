import { useRouter } from 'next/router';
import AboutMe from '@/components/about-me-short/about-me';
import CaseStudies from '@/components/case-studies/case-studies';
import ContactMeForm from '@/components/contact-me-form/contact-me-form';
import Featured from '@/components/featured/featured';
import HeroBanner from '@/components/hero-banner/hero-banner';
import PopularBlogs from '@/components/popular-blogs/popular-blogs';
import Services from '@/components/conceptualizing/conceptualizing';
import Testimonials from '@/components/testimonials/testimonials';
import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { Global } from '@emotion/react';
import { GlobalContext } from '@/context/global.context';
import Conceptualizing from '@/components/conceptualizing/conceptualizing';
import Workflow from '@/components/work-flow/work-flow';
import Tutoring from '@/components/tutoring/tutoring';
import Skills from '@/components/skills/skills';

const metaKeywords = 'a blog site by siayed farhan, powerd by next js';
const metaDesc = 'a blogsite on digital marketing by saiyed farhan marketing correctely';

export default function Home() {
  


  return (
    <>
      <Head>
        {/* <title>Mhyra Study Center</title>
        <meta name="keywords" content={metaKeywords} />
        <meta name="description" content={metaDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta name="robots" content="noindex, nofollow"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroBanner />
      <Conceptualizing />
      <Testimonials />
      <Workflow />
      <Tutoring />
      <Skills />
      <AboutMe />
      <ContactMeForm />
    </>
  );
}