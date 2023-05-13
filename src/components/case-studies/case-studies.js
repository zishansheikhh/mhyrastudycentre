import styled from "styled-components"
import CaseStudyImg1 from "../../assets/images.jpg";
import CaseStudyImg2 from "../../assets/unnamed.png";
import CaseStudyCard from "../case-study-card/case-study-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ContentContext } from "@/context/content.context";
import Link from "next/link";

const Container = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 100px;
    cursor: pointer;
`

const Wrapper = styled.div`
    width: 90%;
    margin: auto;
`

const Title = styled.h3`
font-size: 30px;
line-height: 1.5;
text-transform: uppercase;
text-decoration: underline;
text-align: center;
font-weight: 600;
letter-spacing: 1px;
@media (min-width: 800px) {
    font-size: 50px;
    
}
`;

const CaseStudiesContainer = styled.div`
    width: 100%;
    margin-top: 70px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 70px;
    padding: 20px 0;
    box-sizing: border-box;
    @media (min-width: 800px) {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 70px;
    }
`

const ActionButton = styled.div`
    text-align: center;
    padding: 5px 35px;
    background: #95DE4C;
    color: white;
    font-size: 17px;
    font-weight: 600;
    width: max-content;
    margin: auto;
    margin-top: 50px;
    border-radius: 20px;
    text-transform: uppercase;
    cursor: pointer;
    a {
        color: white;
    }
`
const HR = styled.hr`
width: 90%;
margin: auto;
box-sizing: border-box;
margin-top: 50px;
`


const CASESTUDIES = [
    {
        Id: 1,
        ImageUrl: CaseStudyImg1,
        Title: 'Zomato Case Study',
        Content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        Author: 'Saiyed Farhan',
        Category: 'Finance Business'
    },
    {
        Id: 2,
        ImageUrl: CaseStudyImg2,
        Title: 'Zomato Case Study',
        Content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        Author: 'Saiyed Farhan',
        Category: 'Education Business'
    },
    {
        Id: 3,
        ImageUrl: CaseStudyImg1,
        Title: 'Zomato Case Study',
        Content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        Author: 'Saiyed Farhan',
        Category: 'Event Business'
    },
    {
        Id: 4,
        ImageUrl: CaseStudyImg2,
        Title: 'Zomato Case Study',
        Content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        Author: 'Saiyed Farhan',
        Category: 'Ecom Business'
    },
    {
        Id: 5,
        ImageUrl: CaseStudyImg1,
        Title: 'Zomato Case Study',
        Content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        Author: 'Saiyed Farhan',
        Category: 'Recycling Business'
    },
    {
        Id: 6,
        ImageUrl: CaseStudyImg2,
        Title: 'Zomato Case Study',
        Content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        Author: 'Saiyed Farhan',
        Category: 'Finance Business'
    },

]

const CaseStudies = () => {

    const {recentCaseStudies} = useContext(ContentContext)

  return (
    <Container>
        <Wrapper>
            <Title>Some Case studies</Title>
            <CaseStudiesContainer>
            {
                recentCaseStudies.slice(0, 3).map((study) => {
                    return (
                        <div key={study.CaseStudyId} >
                            <CaseStudyCard study={study} />
                        </div>
                    )
                })
            }
            </CaseStudiesContainer>
            <ActionButton>
            <Link href="/casestudies">More Case Studies</Link>
                <FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}} />
            </ActionButton>
            <HR/>
        </Wrapper>
    </Container>
  )
}

export default CaseStudies