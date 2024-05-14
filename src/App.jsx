import styled from 'styled-components';
import Menina from './image/Menina.png';
import ImgLogo from './image/logo_Developer.jpeg';
import { IoArrowDownCircleOutline } from "react-icons/io5";
import Mainlanding from './components/mainLanding/Mainlanding';
import Footer from './components/Footer/Footer';

const Background = styled.div`
background-color: #161A1D;
height: 100vh;
overflow-x: hidden; 

`;

const Container = styled.div`
  display: flex;
`;

const ButtonSvg = styled.div`
width: 60px;
height: 60px;
background-color: transparent;
border-radius: 50%;
border: none;
cursor: pointer;

`;

const ConteinerHeader = styled.div`
  background-color: transparent;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 0 20px; 
  position: sticky; 
  top: 0;
  z-index: 1000;

`;


const Logo = styled.img`
width: 40px;
height: 40px;
border-radius: 10px;


`;

const NameLogo = styled.h3`
font-family: Handjet;
font-size: 28px;
font-weight: 400;
color: #000;
margin-left: 10px;
`;



const BoxLogo = styled.div`
display: flex;
align-items: center;
flex-direction: row;
margin-left: 30px;
`;



const ButtonsHeader = styled.a`
font-family: Raleway;
font-size: 28px;
font-weight: 100;
color: #000;
margin-right: 30px;
cursor: pointer;
outline: none;
border: none;
text-decoration: none; 
`;

const ConteinerButtons = styled.div`
display: flex;
align-items: center;
flex-direction: row;

`;

const ConteinerWhite = styled.div`
position: absolute;
width: 963px;
height:700px;
background-color: #CACFE7;
display: flex;
justify-content: flex-start;
top: 0;
`;

const Text = styled.h2`
font-family: Noto Sans;
font-size: 50px;
font-weight: 800;
width: 400px;



`;

const ButtonNow = styled.button`
width: 150px;
height: 40px;
border-radius: 15px;
background-color: #161A1D;
border: 2px solid #CACFE7;
font-family: Raleway;
font-size: 18px;
font-weight: 200;
margin-right: 110px;
color: #CACFE7;
`;


const ButtonStart = styled.button`
color: #CACFE7;
width: 200px;
height: 40px;
border-radius: 15px;
font-family: Raleway;
font-size: 20px;
font-weight: 100;
background-color: #6554E1;
cursor: pointer;



`;



const Conteinerlanding = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
margin-left: 60px;
`;

const BoxArrow = styled.div``;

const Conteinergirl = styled.div`
position: relative;
top: -150px;
right: -850px;
`;


const Img = styled.img`
width: 670px;
height: 490px;

`;


const Boll = styled.div`
  position: relative; 
  top: 150px; 
  left: -40px; 
 background-color: rgba(101, 84, 225, 0.7);
 border-radius: 50%;
 width: 150px;
height: 150px;
box-shadow: 3.67px 1.83px 1.83px 0px #00000040;


`;


const Boll1 = styled.div`
 position: relative; 
  top: -190px;
left: 300px;
 background-color: rgba(101, 84, 225, 0.7);
 border-radius: 50%;
 width: 300px;
height: 300px;
box-shadow: 8px 8px 4px 0px #00000040;
z-index: 1;

`;

const MaiorBoll = styled.div` 
background-color: #6554E1;
 border-radius: 50%;
 width: 500px;
height: 500px;
display: flex;
align-items: center;
justify-content: center;
position: relative;
box-shadow: 10px 4px 6px 0px #00000040;
z-index: 2;
`;

function App() {
 


  return (
    <>
    <Background>
   <ConteinerHeader>
   <BoxLogo>
    <Logo src={ImgLogo} alt='Logo '/>
<NameLogo>Trainee</NameLogo>
</BoxLogo>
<ConteinerButtons>
<ButtonsHeader href='/'>Home</ButtonsHeader>
<ButtonsHeader onClick={() => {
    const historiaSection = document.getElementById('quem-somos');
    if (historiaSection) {
        historiaSection.scrollIntoView({ behavior: 'smooth' });
    }
}}>Quem Somos</ButtonsHeader>
<ButtonsHeader href='/Login'>Login</ButtonsHeader>
</ConteinerButtons>
<ButtonNow href=''>Contact Us</ButtonNow>
   </ConteinerHeader>
   <Container>
   <ConteinerWhite>
<BoxLogo>
  <Conteinerlanding>
  <Text>Dê um passo adiante na sua 
    carreira com nossas oportunidades 
    de estágio!</Text>
    <ButtonStart>Comece Agora</ButtonStart>



    </Conteinerlanding>

<IoArrowDownCircleOutline size={45} color='#000'/>
</BoxLogo>
   </ConteinerWhite>
   <Conteinergirl>
   <Boll/>
    <MaiorBoll>
    <Img src={Menina} alt='Menina ao celular'/>

    </MaiorBoll>
    <Boll1/>
   </Conteinergirl>
   </Container>
   </Background>
   <Mainlanding/>
   <Footer/>
    </>
  );
}

export default App;

