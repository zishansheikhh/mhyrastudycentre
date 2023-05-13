import { GlobalContext } from "@/context/global.context";
import { makeid } from "@/helper-functions";
import { faArrowRightFromBracket, faClose, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: white;
  position: absolute;
  right: 15px;
  width: 280px;
  max-height: 200px;
  top: ${(props) => props.top};
  visibility: ${(props) => props.visibility};
  opacity: ${(props) => props.opacity};
  z-index: 10;
  border-radius: 12px;
  transition: all 0.35s cubic-bezier(0.645, 0.045, 0.355, 1);
  color: black;
  box-sizing: border-box;
  padding-bottom: 20px;
  box-shadow: 1.4px 1.1px 2.2px rgba(0, 0, 0, 0.028),
    3.3px 2.7px 5.3px rgba(0, 0, 0, 0.04), 6.3px 5px 10px rgba(0, 0, 0, 0.05),
    11.2px 8.9px 17.9px rgba(0, 0, 0, 0.06),
    20.9px 16.7px 33.4px rgba(0, 0, 0, 0.072), 50px 40px 80px rgba(0, 0, 0, 0.1);
`;
const CloseContainer = styled.div`
  width: 85%;
  margin: auto;
  padding-top: 15px;
  box-sizing: border-box;
  text-align: right;
  color: black;
  cursor: pointer;
`;
const InfoContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  text-transform: none;
  align-items: flex-end;
  column-gap: 10px;
  margin-top: 5px;
  img {
    border: 3px solid;
    border-radius: 50%;
  }
`;

const InfoWrapper = styled.div`
  width: 100%;
`;

const UserName = styled.div`
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.3px;
`;

const UserEmail = styled.div`
  font-weight: 400;
  word-wrap: break-word;
  font-size: 15px;
`;

const HR = styled.hr`
  width: 75%;
  margin: auto;
  margin-top: 25px;
  color: lightgray;
`;

const AuthContainer = styled.div`
  display: flex;
  width: 85%;
  margin: auto;
  margin-top: 20px;
  column-gap: 10px;

  svg {
    cursor: pointer;
  }
`;

const AuthAction = styled.div`
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
`;

const ProfileInfo = () => {
  const router = useRouter();

  const {
    isProfileInfoOpen,
    setIsProfileInfoOpen,
    userFace,
    isLogin,
    setIsLogin,
    addNotifiction,
    userInfo,
  } = useContext(GlobalContext);

  const handleLogOutUser = () => {
    setIsLogin(false);
    localStorage.removeItem("admin");
    localStorage.removeItem("sf-user-name");
    localStorage.removeItem("sf-user-email");
    setTimeout(() => {
      addNotifiction(makeid(5), "success", "You have logged Out Successfully");
    }, 500);
    setIsProfileInfoOpen(false);
  };

  const handleLogIn = () => {
    setIsProfileInfoOpen(false)
    router.push("/login")
  }

  return (
    <Container
      top={`${isProfileInfoOpen ? "90px" : "70px"}`}
      opacity={`${isProfileInfoOpen ? "1" : "0"}`}
      visibility={`${isProfileInfoOpen ? "visible" : "hidden"}`}
    >
      <CloseContainer>
        <FontAwesomeIcon
          icon={faClose}
          size="xl"
          onClick={() => setIsProfileInfoOpen(false)}
        />
      </CloseContainer>
      <InfoContainer>
        <Image src={userFace} alt="User" width={50} height={50} />
        <InfoWrapper>
          {!isLogin ? (
            <div style={{marginBottom: '20px', fontSize: '18px', fontWeight: '600'}} >User not logged in</div>
          ) : (
            <>
              <UserName>{userInfo.Name}</UserName>
              <UserEmail>{userInfo.Email}</UserEmail>
            </>
          )}
        </InfoWrapper>
      </InfoContainer>
      <HR />
      <AuthContainer>
        {isLogin ? <FontAwesomeIcon onClick={handleLogOutUser} icon={faPowerOff} size="xl" /> : <FontAwesomeIcon onClick={handleLogIn} icon={faArrowRightFromBracket} size="xl" />}
        {isLogin ? <AuthAction onClick={handleLogOutUser}>Log Out</AuthAction> : <AuthAction onClick={handleLogIn}>Log In</AuthAction>}
      </AuthContainer>
    </Container>
  );
};

export default ProfileInfo;
