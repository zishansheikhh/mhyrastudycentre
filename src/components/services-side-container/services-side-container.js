import { GlobalContext } from "@/context/global.context";
import { useRouter } from "next/router";
import { useContext } from "react";
import styled from "styled-components"


const Container = styled.div`
    display: none;
    @media (min-width: 800px) {
        display: inline;
        flex: 3;
        width: 90%;
        margin: auto;
        margin-top: 100px;
    }
`;

const ServicesWrapper = styled.div`
width: 85%;
margin: auto;
font-size: 22px;
`;

const ServicesHeading = styled.div`
text-transform: uppercase;
font-size: 30px;
font-weight: 600;
letter-spacing: 1px;
text-decoration: underline;
`;

const ServicesList = styled.div`
margin-top: 40px;
text-transform: capitalize;
`;

const ServiceItem = styled.div`
width: 90%;
margin: 10px 0;
letter-spacing: 0.7px;
padding: 7px 10px;
box-sizing: border-box;
font-weight: 600;
cursor: pointer;
`;

const ActiveServiceItem = styled.div`
    width: 90%;
    margin: 10px 0;
    letter-spacing: 0.7px;
    padding: 7px 10px;
    box-sizing: border-box;  
    font-weight: 600; 
    cursor: pointer;
    background: ${(props) => (props.theme == "light" ? "black" : "white")};
    color: ${(props) => (props.theme == "light" ? "white" : "black")};
    border-radius: 7px;
`;

const GetInTouchCard = styled.div`
width: 95%;
margin: auto;
margin-top: 400px;
background: #2F2F2F;
padding: 50px 10px;
box-sizing: border-box;
`;

const TouchHeader = styled.div`
font-size: 25px;
text-align: center;
font-weight: bold;
letter-spacing: 0.5px;
color: white;
`;

const TouchButton = styled.div`
text-align: center;
padding: 10px 30px;
background: #95DE4C;
width: fit-content;
margin: auto;
margin-top: 50px;
color: black;
font-size: 20px;
font-weight: 600;
cursor: pointer;
`;


const ALL_SERVICES = ["branding","sales", "traffic", "leads"];



const ServicesSideContainer = ({activeService}) => {

    const router = useRouter();
    const {theme} = useContext(GlobalContext)

    const handleTouchButtonClick = () => {
        router.push('/')
        setTimeout(() => {
            window.scrollTo({ top: 6000, behavior: 'smooth' })
        }, 500);
    }

  return (
    <Container>
        <ServicesWrapper>
            <ServicesHeading>
                More Services
            </ServicesHeading>
            <ServicesList>
                {
                    ALL_SERVICES.map((service) => {

                        if (service == activeService) {
                            return (
                                <ActiveServiceItem theme={theme}>
                                    {service}
                                </ActiveServiceItem>
                            )
                        }
                        return (
                            <ServiceItem onClick={() => router.push(`/services/${service}`)} >
                                {service}
                            </ServiceItem>
                        )
                    })
                }
            </ServicesList>
        </ServicesWrapper>
        <GetInTouchCard>
            <TouchHeader>
                Let's Work Together
            </TouchHeader>
            <TouchButton onClick={handleTouchButtonClick}>
                Get in Touch
            </TouchButton>
        </GetInTouchCard>
    </Container>
  )
}

export default ServicesSideContainer