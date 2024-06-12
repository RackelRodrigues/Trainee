import styled from "styled-components";
import ImgLogo from '../../image/logo_Developer.jpeg';
import { PiUserCircleLight } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";



const Conteiner = styled.div`
background-color: #161A1D;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px; 
  position: sticky; 
  top: 0;
  z-index: 10; 
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
color: #fff;
margin-left: 10px;
`;  


const ButtonsHeader = styled.a`
font-family: Raleway;
font-size: 20px;
font-weight: 100;
color: #CACFE7;
margin-right: 30px;
cursor: pointer;
outline: none;
border: none;
text-decoration: none; 
`;

const Conteinerinput = styled.div`
width: 600px;
height: 40px;
border-radius: 7px;
background-color: #CACFE7;
display: flex;
align-items: center;
align-self: center;
`;

const Input = styled.input`
background-color: transparent;
color: #18181b;
width: 100%;
height: 100%;
outline: none;
border: none;

::placeholder {
    color: #000; 
    
  }
`;

const ConteinerButtons = styled.div`
display: flex;
align-items: center;
flex-direction: row;

`;


const BoxLogo = styled.div`
display: flex;
align-items: center;
flex-direction: row;
`;

const ButtonSearch = styled.button`
width: 35px;
height: 35px;
background-color: #6554E1;
border-radius: 6px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 2px;
cursor: pointer;
`;


const ButtonSvg = styled.div`
width: 60px;
height: 60px;
background-color: transparent;
border-radius: 50%;
border: none;
cursor: pointer;

`;
const HeaderLogged = () =>{

const Navegate = useNavigate()

  const ChangePage = () => {
  Navegate("/User")
  };
    return(
    <>
    <Conteiner>
      <BoxLogo>
    <Logo src={ImgLogo} alt='Logo '/>
<NameLogo>Trainee</NameLogo>
</BoxLogo>
<Conteinerinput>
    <Input placeholder="Buscar vagas"/>
    <ButtonSearch>
    <IoSearch size={60} color='#000'/>
  </ButtonSearch>
</Conteinerinput>
<ConteinerButtons>
<ButtonsHeader href="/Home">Home</ButtonsHeader>
<ButtonsHeader>Quem somos</ButtonsHeader>
        <ButtonSvg onClick={ChangePage}>
        <PiUserCircleLight size={60} color="#fff"/>
        </ButtonSvg>
        </ConteinerButtons>
    </Conteiner>
    
    
    </>)
}


export default HeaderLogged;