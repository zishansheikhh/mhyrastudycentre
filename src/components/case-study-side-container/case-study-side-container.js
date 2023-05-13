import { ContentContext } from "@/context/content.context";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import MiniCaseStudyCard from "../mini-case-study-card/mini-case-study-card";
import { GlobalContext } from "@/context/global.context";

const Container = styled.div`
  display: none;
  @media (min-width: 800px) {
    display: inline;
    flex: 3;
    width: 90%;
    margin: auto;
    margin-top: 180px;
  }
`;

const Wrapper = styled.div``;

const RecentsContainer = styled.div``;

const RecentTitle = styled.div`
  font-size: 30px;
  text-transform: uppercase;
  text-decoration: underline;
  font-weight: 600;
`;

const RecentsWrapper = styled.div`
  margin-top: 50px;
`;

const CategoriesContainer = styled.div`
  margin-top: 100px;
  width: 100%;
`;

const CategoryTitle = styled.div`
  font-size: 25px;
  text-transform: uppercase;
  text-decoration: underline;
  font-weight: 600;
`;

const CategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 20px;
  font-size: 19px;
  margin-top: 25px;

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

const CaseStudyCategories = [
"Health & Fitness Business",
  "Finance Business",
  "Event Business",
  "ECom Business",
  "Recycling Business",
  "Education Business",
];

const CaseStudySideContainer = () => {
  const { recentCaseStudies } = useContext(ContentContext);
  const { theme } = useContext(GlobalContext);

  const [newRecents, setNewRecents] = useState([]);

  useEffect(() => {
    if (recentCaseStudies.length != 0) {
      let caseStudyArray = [];
      for (let i = 0; i < 4; i++) {
        caseStudyArray.push(recentCaseStudies[i]);
      }
      setNewRecents(caseStudyArray);
    }
  }, [recentCaseStudies]);

  return (
    <Container>
      <Wrapper>
        <RecentsContainer>
          <RecentTitle>recent posts</RecentTitle>
          <RecentsWrapper>
            {newRecents.length != 0 &&
              newRecents.map((study) => {
                return (
                  <MiniCaseStudyCard key={study.CasStudyId} study={study} />
                );
              })}
          </RecentsWrapper>
        </RecentsContainer>
        <CategoriesContainer>
          <CategoryTitle>Categories</CategoryTitle>
          <CategoriesWrapper theme={theme}>
            {CaseStudyCategories.map((cate) => {
              return <Category key={cate}>{cate}</Category>;
            })}
          </CategoriesWrapper>
        </CategoriesContainer>
      </Wrapper>
    </Container>
  );
};

export default CaseStudySideContainer;
