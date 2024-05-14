import styled from 'styled-components';
import ImgLogo from '../../image/logo_Developer.jpeg';
import { IoSearch } from "react-icons/io5";

const Conteiner = styled.div`
 background-color: #161A1D;
  height: 80px;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 0 20px; 
  position: sticky; 
  top: 0;
  

`;

const Divider = styled.span`
  flex-grow: 1;
  height: 1px;
  background-color: #fff;

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
font-size: 27px;
font-weight: 100;
color: #CACFE7;
margin-right: 40px;
cursor: pointer;
outline: none;
border: none;
text-decoration: none; 
`;

const ConteinerButtons = styled.div`
display: flex;
flex-direction: row;


`;

const Conteinerinput = styled.div`
width: 390px;
height: 34px;
border-radius: 7px;
background-color: #A8A29E;
display: flex;
align-items: center;

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


const ButtonSearch = styled.button`
width: 30px;
height: 30px;
background-color: #6554E1;
border-radius: 6px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 2px;
cursor: pointer;
`;



const BoxLogo = styled.div`
display: flex;
align-items: center;
flex-direction: row;
`;

const Header = ()=>{
    return(<>
    
    <Conteiner>
      <BoxLogo>
<Logo src={ImgLogo} alt='Logo '/>
<NameLogo>Trainee</NameLogo>
</BoxLogo>
<ConteinerButtons>
<ButtonsHeader href="/Home">Home</ButtonsHeader>
<ButtonsHeader id='quem-somos'>Quem Somos</ButtonsHeader>
<ButtonsHeader href="/Login">Login</ButtonsHeader>


<Conteinerinput>
  <Input placeholder='Buscar vagas'/>
  <ButtonSearch>
    <IoSearch size={50} color='#000'/>
  </ButtonSearch>
</Conteinerinput>
</ConteinerButtons>
    </Conteiner>
 
    </>)
}

export default Header;