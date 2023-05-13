import { convertUnixToDM } from '@/helper-functions';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    margin: 30px 0;
`;

const CaseStudyHeading = styled.h3`
    letter-spacing: 0.5px;
`;

const Wrapper = styled.div`
margin-left: 20px;
`;

const InfoContainer = styled.div`
display: flex;
column-gap: 30px;
font-size: 15px;
margin-top: 8px;
color: gray;
`;

const HR = styled.hr`
width: 100%;
box-sizing: border-box;
margin-top: 20px;
`


const MiniCaseStudyCard = ({study}) => {
    
    const {CaseStudyId, ImageUrl, Title, Author} = study;

    const router = useRouter();

    const handleOnClick = () => {
        router.push(`/casestudies/${CaseStudyId}`)
    }
    
  return (
    <>
    <Container onClick={handleOnClick}>
        <Image src={ImageUrl} alt="case study image" width={100} height={100} />
        <Wrapper>
            <CaseStudyHeading>
                {Title}
            </CaseStudyHeading>
            <InfoContainer>
                By {Author}
            </InfoContainer>
        </Wrapper>
    </Container>
    <HR />
    </>
  )
}

export default MiniCaseStudyCard