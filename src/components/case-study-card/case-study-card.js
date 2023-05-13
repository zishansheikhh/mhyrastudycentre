import { convertUnixToDM } from "@/helper-functions";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    background-color:rgb(26, 26, 26);
    color: white;
    img {
        width: 100%;
        height: 180px;
    }
`;

const Wrapper = styled.div`
    width: 100%;
`;

const ImageContainer = styled.div`
    width: 100%;
`

const BodyContainer = styled.div`
    width: 100%;
    padding: 10px 20px;
    padding-bottom: 30px;
`

const ContentTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
`

const ContentBody = styled.p`
    font-size: 15px;
    margin-top: 10px;
`
const InfoContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 20px;
font-size: 15px;
`;

const CategoryType = styled.div`
padding: 3px 10px;
border: 1px solid white;
border-radius: 5px;
text-transform: capitalize;
`;


const AuthorName = styled.div`
    margin-top: 20px;
    padding: 3px 15px;
    background: white;
    color: black;
    font-weight: 600;
    width: max-content;
    border-radius: 20px;
    text-transform: uppercase;
`

const CaseStudyCard = ({study}) => {
    const {CaseStudyId, ImageUrl, Title, MetaDescription, Author, Categories} = study;
    const newCategory = JSON.parse(Categories);

    const router = useRouter();

    const handleOnClick = () => {
        router.push(`/casestudies/${CaseStudyId}`)
    }

  return (
    <Container onClick={handleOnClick}>
        <Wrapper>
            <ImageContainer>
                <Image src={ImageUrl} alt="hwll" width={100} height={100} />
            </ImageContainer>
            <BodyContainer>
                <ContentTitle>
                    {Title}
                </ContentTitle>
                <ContentBody>
                    {MetaDescription.substr(0, 180)}...
                </ContentBody>
                <InfoContainer>
                    <CategoryType>
                        {newCategory[0]}
                    </CategoryType>
                </InfoContainer>
                <AuthorName>
                    BY {Author}
                </AuthorName>
            </BodyContainer>
        </Wrapper>
    </Container>
  )
}

export default CaseStudyCard;