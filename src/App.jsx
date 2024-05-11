import styled from 'styled-components';
import Menina from './image/Menina.png';
import ImgLogo from './image/logo_Developer.jpeg';
import { IoArrowDownCircleOutline } from "react-icons/io5";



const Background = styled.div`
background-color: #161A1D;
height: 100vh;

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
  position: fixed; 
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
font-size: 20px;
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
width: 963px;
height:700px;
background-color: #CACFE7;

`;

const Text =styled.h2``;

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

const Img = styled.img`
width: 690px;
height: 510px;

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
  top: -150px;
  left: 260px;
 background-color: rgba(101, 84, 225, 0.7);
 border-radius: 50%;
 width: 300px;
height: 300px;
box-shadow: 8px 4px 4px 0px #00000040;

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
<ButtonsHeader>Home</ButtonsHeader>
<ButtonsHeader>Quem Somos</ButtonsHeader>
<ButtonsHeader>Login</ButtonsHeader>
</ConteinerButtons>
<ButtonNow>Contact Us</ButtonNow>
   </ConteinerHeader>
   <ConteinerWhite>
<BoxLogo>
  <IoArrowDownCircleOutline size={60} color='#000'/>
</BoxLogo>
   </ConteinerWhite>
   
   </Background>
    </>
  );
}

export default App;

