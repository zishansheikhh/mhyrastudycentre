import AdminMessages from "@/components/admin-messages/admin-messages";
import VisionAndMissionMessage from "@/components/visionandmissionmessages/visionandmissionmessages";
import styled from "styled-components"

const Container = styled.div`
    background: white;
    box-sizing: border-box;
    padding: 150px 30px 10px 30px;
    @media (min-width: 800px) {
      padding: 170px 70px 70px 70px;
    }
`;

const HeaderContainer = styled.div`
  width: 100%;
  margin: auto;
  @media (min-width: 800px) {
    width: 90%;
  }
`;

const Header = styled.h1`
  font-size: 27px;
  @media (min-width: 800px) {
    font-size: 35px;
  }
`;


const VisionAndMission = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header>
          About / Vision And Mission
        </Header>
      </HeaderContainer>
        <VisionAndMissionMessage />
    </Container>
  )
}

export default VisionAndMission