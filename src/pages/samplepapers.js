import SamplePaperForm from "@/components/sample-paper-form/sample-paper-form";
import styled from "styled-components";

const Container = styled.div`
width: 100%;
box-sizing: border-box;
padding: 20px 20px;
margin-top: 100px;
background: white;
@media (min-width: 800px){
  padding: 50px 100px;
}
`;

const Heading  = styled.h1``;

const Content = styled.p`
    margin-top:  30px;

`;

const Wrapper = styled.div``;


const SamplePapers = () => {
  return (
    <Container>
        <Heading>
            Sample Papers
        </Heading>
        <Content>
        Dolor anim ex ullamco labore quis dolore minim dolore mollit non proident sint eu aliquip. Voluptate adipisicing qui sint fugiat. Commodo culpa ut eiusmod ullamco. elit et incididunt laborum do qui anim excepteur laborum voluptate in. Dolor anim ex ullamco labore quis dolore minim dolore mollit non proident sint eu aliquip. Voluptate adipisicing qui sint fugiat. Commodo culpa ut eiusmod ullamco. elit et incididunt laborum do qui anim excepteur laborum voluptate in. Dolor anim ex ullamco labore quis dolore minim dolore mollit non proident sint eu aliquip. Voluptate adipisicing qui sint fugiat. Commodo culpa ut eiusmod ullamco. elit et incididunt laborum do qui anim excepteur laborum voluptate in. Dolor anim ex ullamco labore quis dolore minim dolore mollit non proident sint eu aliquip. Voluptate adipisicing qui sint fugiat. Commodo culpa ut eiusmod ullamco. elit et incididunt laborum do qui anim excepteur laborum voluptate in.
        </Content>
        <Wrapper>
            <SamplePaperForm />
        </Wrapper>
    </Container>
  )
}

export default SamplePapers