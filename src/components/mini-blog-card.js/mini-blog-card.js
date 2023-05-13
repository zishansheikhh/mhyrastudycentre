import { convertUnixToDM } from '@/helper-functions';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    margin: 30px 0;
    cursor: pointer;
`;

const BlogHeading = styled.h3`
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
color: grey;
`;

const PulishDate = styled.div``;

const ReadingTime = styled.div``;
const HR = styled.hr`
width: 100%;
box-sizing: border-box;
margin-top: 20px;
`


const MiniBlogCard = ({blog}) => {
    
    const {BlogId, ImageUrl, Title, CreatedAt, ReadTime} = blog;
    
    const { date, month } = convertUnixToDM(CreatedAt);

    const router = useRouter();

    const handleOnClick = () => {
        router.push(`/blogs/${BlogId}`)
    }


  return (
    <>
    <Container onClick={handleOnClick} >
        <Image src={ImageUrl} alt="blog image" width={100} height={100} />
        <Wrapper>
            <BlogHeading>
                {Title}
            </BlogHeading>
            <InfoContainer>
                <PulishDate>
                    {date + " " + month}
                </PulishDate>
                <ReadingTime>
                    {ReadTime} min Read
                </ReadingTime>
            </InfoContainer>
        </Wrapper>
    </Container>
    <HR />
    </>
  )
}

export default MiniBlogCard