import { GlobalContext } from "@/context/global.context";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Slide } from "react-reveal";
import styled from "styled-components"


const Container = styled.div`
width: 350px;
max-height: 500px;
position: fixed;
top: 100px;
right: 10px;
z-index: 9;
font-size: 18px;
@media (min-width: 800px) {
    right: 50px;
}
`;

const Wrapper = styled.div`
width: 90%;
margin: auto;
padding: ${props => props.isNoti ? '0px' : '30px 10px'};
box-sizing: border-box;
display: flex;
flex-direction: column;
row-gap: 30px;
`;

const NotificationCard = styled.div`
    width: 100%;
    background: ${props => props.type == 'success' ? '#92D293' : 'coral'};
    color: white;
padding: 30px 20px;
border-radius: 7px;
position: relative;
transition: all 1s ease;

svg {
    position: absolute;
    top: 15px;
    right: 17px;
    cursor: pointer;
}
`;




const Notification = () => {

    const {notification, removeNotification} = useContext(GlobalContext)


  return (
    <Container>
        <Wrapper isNoti={notification.length == 0}>
        {
            notification.map((noti) => {
                return (
                    <Slide bottom height={10}>
                    <NotificationCard type={noti.type} key={noti.id}>
                        <FontAwesomeIcon icon={faClose} onClick={() => removeNotification(noti.id)} />
                        {noti.message}
                    </NotificationCard>
                    </Slide>
                )
            })
        }
        </Wrapper>
    </Container>
  )
}

export default Notification;