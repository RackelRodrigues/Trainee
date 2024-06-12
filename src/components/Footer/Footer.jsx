import styled from "styled-components";
import ImgLogo from '../../image/logo_Developer.jpeg';
import { FaInstagram } from "react-icons/fa";
import { PiLinkedinLogo } from "react-icons/pi";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

const Background = styled.div`
height: 320px;
width: 100%;
background-color: #CACFE7;
overflow-x: hidden;
`;


const Logo = styled.img`
width: 50px;
height: 50px;
border-radius: 10px;


`;

const NameLogo = styled.h3`
font-family: Handjet;
font-size: 30px;
font-weight: 400;
color: #fff;
margin-left: 10px;
`;


const BoxLogo = styled.div`
display: flex;
align-items: center;
flex-direction: row;
margin: 10px 0 0 18px;
`;


const ConteinerSvg = styled.div`
display: flex;
align-items: end;
margin-left: 18px;
position: relative;
bottom: -120px;

`;

const H2 = styled.h2`
font-family: Handjet;
font-size: 75px;
font-weight: 400;



`;


const ConteinerInput = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
position: relative;
top: 3px;
left: 80px;
`;

const Input = styled.input`
width: 340px;
height: 45px;
border-radius: 15px;
background-color: #A8A29E;
border: none;
outline: none;
font-size: 17px;
padding-left: 8px;
`;

const Buttonsvg = styled.button`
width: 50px;
height: 50px;
border: none;
border-radius: 50%;
background-color: transparent;
cursor: pointer;

`;

const ButtonRedes = styled.button`
width: 50px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
background-color: #6554E1;
border: none;
margin-right: 23px;

`;

const ConteinerContact = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
left: 160px;

`;



const Footer = ()=>{
    return(<>
    <Background>
<BoxLogo>
    <Logo src={ImgLogo} alt='Logo '/>
<NameLogo>Trainee</NameLogo>
</BoxLogo>
<ConteinerContact>
<H2>Contact us</H2>
<ConteinerInput>
<Input placeholder="Envie um email"/>
<Buttonsvg>
    <FaCircleArrowRight size={49} color="#000"/>
</Buttonsvg>
</ConteinerInput>
</ConteinerContact>

<ConteinerSvg>
<ButtonRedes>
<FaInstagram size={28}color="#000"/>
</ButtonRedes>

<ButtonRedes>
<PiLinkedinLogo size={28} color="#000"/>
</ButtonRedes>

<ButtonRedes>
<CiFacebook size={35} color="#000"/>
</ButtonRedes>
<ButtonRedes>

    <FaXTwitter size={23} color="#000"/>
</ButtonRedes>
</ConteinerSvg>
    </Background>


    
    </>)
}


export default Footer;