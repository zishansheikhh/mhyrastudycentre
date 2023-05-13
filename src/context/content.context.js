import { httpGetAllBlogs, httpGetAllCaseStudies } from "@/utils/api";
import { createContext, useEffect, useState } from "react";

export const ContentContext = createContext({
  allBlogs: [],
  allCaseStudies: [],
  recentBlogs: [],
  setRecentBlogs: () => {},
  recentCaseStudies: [],
  setRecentCaseStudies: () => {},
});

export const ContentProvider = ({ children }) => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [blogComments, setBlogComments] = useState([]);

  const [allCaseStudies, setAllCaseStudies] = useState([]);
  const [recentCaseStudies, setRecentCaseStudies] = useState([]);
  const [caseStudyComments, setCaseStudyComments] = useState([]);

  useEffect(() => {
    async function getAllBlogs() {
      try {
        const blogsArray = await httpGetAllBlogs();
        setAllBlogs(blogsArray);
      } catch (error) {
        console.log("error in getting all blogs", error);
      }
    }
    getAllBlogs();
  }, []);

  useEffect(() => {
    const blogsArray = allBlogs.slice(0, 4);
    setRecentBlogs(blogsArray);
  }, [allBlogs]);

  useEffect(() => {
    async function getAllCaseStudies() {
      try {
        const caseStudyArray = await httpGetAllCaseStudies();
        setAllCaseStudies(caseStudyArray);
      } catch (error) {
        console.log("error in getting all case studies", error);
      }
    }
    getAllCaseStudies();
  }, []);

  useEffect(() => {
    const caseStudyArray = allCaseStudies.slice(0, 4);
    
    setRecentCaseStudies(caseStudyArray);
  }, [allCaseStudies]);


  const value = {
    allBlogs,
    allCaseStudies,
    recentBlogs,
    setRecentBlogs,
    recentCaseStudies,
    setRecentCaseStudies,
  };

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};
