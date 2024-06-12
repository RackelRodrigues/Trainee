import HeaderLogged from "../../components/HeaderLogged/HeaderLogged";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
//aqui são dos bototes em sequencia
import { IoIosLink } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { PiGithubLogo } from "react-icons/pi";
import { GoFile } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";

const Background = styled.div`
background-color: #CACFE7;
height: 150vh;

`;


const Button = styled.div`
width: 130px;
height: 40px;
border-radius: 15px;
font-family: Raleway;
font-size: 15px;
font-weight: 100;
color: #FFF;
border: none;
background-color: #6554E1;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`;

const Title = styled.h2`
font-family: Raleway;
font-size: 26px;
font-weight: 700;
color: #000;
text-align: center;
padding: 20px 0 20px 0;

`; 

const ConteinerVagacy = styled.div`
position: relative;
 top: ${props => props.fullHeight ? '32%' : '10%'};
  left: 50%;
  transform: translate(-50%, -50%);
background-color: #B0B7D1;
width: 1194px;
height: ${props => props.fullHeight ? 'auto' : '104px'};
border-radius: 20px ;
display: ${props => props.fullHeight ? 'block' : 'flex'};
align-items: ${props => props.fullHeight ? 'none' : 'center'};
justify-content: space-between;
transition: height 0.3s ease-in-out;
margin-top: 20px;

`;

const Boxbuttons = styled.div`
width: 800px;
display: flex;
align-items: center;
justify-content: space-between;
margin: auto; 
`;

const BoxNames = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 1194px;
`;


const BoxPeople = styled.div`
display: ${props => (props.showArrowUp ? 'flex' : 'none')};
align-items: center;
justify-content: space-between;
`;

const BoxImageName = styled.div`
display: ${props => (props.showArrowUp ? 'flex' : 'none')};
align-items: center;
flex-direction: row;
margin-left: 15px;

`;

const BoxSvg1 = styled.div`
display: ${props => (props.showArrowUp ? 'flex' : 'none')};
flex-direction: row;
margin-right: 30px;
`;

const Titlevagacy = styled.h3`
font-family: Raleway;
font-size: 20px;
font-weight: 700;
color: #000;
margin-left: 10px;
`;

const Numberpeople = styled.p`
font-family: Inter;
font-size: 20px;
font-weight: 100;
color: #000;
margin-right: 30px;

`;

const ButtonSvg = styled.div`
width: ${props => props.width || '60px'};
height: ${props => props.height || '60px'};
background-color: transparent;
border: none;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;

`;

const Boxsvg = styled.div`
 display: ${props => props.fullHeight ? 'none' : 'flex'};

align-items: center;
margin-right: 20px;
`;


const ImagePeople = styled.img`
display: ${props => (props.showArrowUp ? 'flex' : 'none')};
width: 70px;
height: 70px;
border-radius: 50%;


`;

const NamePeople = styled.p`
 display: ${props => props.showArrowUp ? 'none' : 'flex'};
font-family: Raleway;
font-size: 22px;
font-weight: 300;
color: #000;
margin-left: 15px;


`;



const Line = styled.hr`
 display: ${props => (props.showArrowUp ? 'flex' : 'none')};
  width: 1100px;
  border: none;
  border-bottom: 1px solid #000; 
  margin: 20px auto; 
  align-items: center;
  justify-content: center;
`;

const ManageBusiness =()=>{

        const [fullHeight, setFullHeight] = useState(false);
        const [showArrowUp, setShowArrowUp] = useState(false);
        
        const toggleHeight = () => {
          setFullHeight(!fullHeight);
          setShowArrowUp(!showArrowUp);
        };
      
    return(<>
    <HeaderLogged/>
    <Background>
       
<Title>Nossa Vagas</Title>
<Boxbuttons>
<Button>Remover Vagas</Button>
<Button>Publicar vaga</Button>
</Boxbuttons>
<ConteinerVagacy fullHeight={fullHeight}>
<BoxNames>
<Titlevagacy> Estágio Desenvolvedor Full Stack</Titlevagacy>
<Boxsvg>
<Numberpeople>Total de pessoas: 4</Numberpeople>
<ButtonSvg onClick={toggleHeight}>
{showArrowUp ? <IoIosArrowUp size={30} color="#000" /> : < IoIosArrowDown size={30} color="#000" />}
</ButtonSvg>
</Boxsvg>
</BoxNames>
<BoxPeople showArrowUp={showArrowUp}>
    <BoxImageName showArrowUp={showArrowUp}>
<ImagePeople src="https://i.ibb.co/yhsRX3w/ruiva.webp" 
alt="foto de pessoas" 
showArrowUp={showArrowUp}/>
<NamePeople>Liam oliveira rodrigues</NamePeople></BoxImageName>
<BoxSvg1 showArrowUp={showArrowUp}>
<ButtonSvg width="40px" height="40px">
<GoFile size={26} color="#000"/>
</ButtonSvg>
<ButtonSvg width="40px" height="40px">
    <IoIosLink size={26} color="#000"/>
    </ButtonSvg>
<ButtonSvg width="40px" height="40px">
    <CiLinkedin  size={26}  color="#000"/>
</ButtonSvg>

<ButtonSvg width="40px" height="40px">
    < PiGithubLogo size={26} color="#000"/>
    </ButtonSvg>
<ButtonSvg width="40px" height="40px"> 
    <AiOutlineMail size={26} color="#000"/>
    </ButtonSvg>
   
    </BoxSvg1>
    
</BoxPeople>
 <Line showArrowUp={showArrowUp}/>

 <BoxPeople showArrowUp={showArrowUp}>
    <BoxImageName showArrowUp={showArrowUp}>
<ImagePeople src="https://i.ibb.co/yhsRX3w/ruiva.webp" 
alt="foto de pessoas" 
showArrowUp={showArrowUp}/>
<NamePeople>Liam oliveira rodrigues</NamePeople></BoxImageName>
<BoxSvg1 showArrowUp={showArrowUp}>
<ButtonSvg width="40px" height="40px">
<GoFile size={26} color="#000"/>
</ButtonSvg>
<ButtonSvg width="40px" height="40px">
    <IoIosLink size={26} color="#000"/>
    </ButtonSvg>
<ButtonSvg width="40px" height="40px">
    <CiLinkedin  size={26}  color="#000"/>
</ButtonSvg>

<ButtonSvg width="40px" height="40px">
    < PiGithubLogo size={26} color="#000"/>
    </ButtonSvg>
<ButtonSvg width="40px" height="40px"> 
    <AiOutlineMail size={26} color="#000"/>
    </ButtonSvg>
   
    </BoxSvg1>
    
</BoxPeople>
 <Line showArrowUp={showArrowUp}/>

 <BoxPeople showArrowUp={showArrowUp}>
    <BoxImageName showArrowUp={showArrowUp}>
<ImagePeople src="https://i.ibb.co/yhsRX3w/ruiva.webp" 
alt="foto de pessoas" 
showArrowUp={showArrowUp}/>
<NamePeople>Liam oliveira rodrigues</NamePeople></BoxImageName>
<BoxSvg1 showArrowUp={showArrowUp}>
<ButtonSvg width="40px" height="40px">
<GoFile size={26} color="#000"/>
</ButtonSvg>
<ButtonSvg width="40px" height="40px">
    <IoIosLink size={26} color="#000"/>
    </ButtonSvg>
<ButtonSvg width="40px" height="40px">
    <CiLinkedin  size={26}  color="#000"/>
</ButtonSvg>

<ButtonSvg width="40px" height="40px">
    < PiGithubLogo size={26} color="#000"/>
    </ButtonSvg>
<ButtonSvg width="40px" height="40px"> 
    <AiOutlineMail size={26} color="#000"/>
    </ButtonSvg>
   
    </BoxSvg1>
    
</BoxPeople>
 <Line showArrowUp={showArrowUp}/>

 <BoxPeople showArrowUp={showArrowUp}>
    <BoxImageName showArrowUp={showArrowUp}>
<ImagePeople src="https://i.ibb.co/yhsRX3w/ruiva.webp" 
alt="foto de pessoas" 
showArrowUp={showArrowUp}/>
<NamePeople>Liam oliveira rodrigues</NamePeople></BoxImageName>
<BoxSvg1 showArrowUp={showArrowUp}>
<ButtonSvg width="40px" height="40px">
<GoFile size={26} color="#000"/>
</ButtonSvg>
<ButtonSvg width="40px" height="40px">
    <IoIosLink size={26} color="#000"/>
    </ButtonSvg>
<ButtonSvg width="40px" height="40px">
    <CiLinkedin  size={26}  color="#000"/>
</ButtonSvg>

<ButtonSvg width="40px" height="40px">
    < PiGithubLogo size={26} color="#000"/>
    </ButtonSvg>
<ButtonSvg width="40px" height="40px"> 
    <AiOutlineMail size={26} color="#000"/>
    </ButtonSvg>
   
    </BoxSvg1>
    
</BoxPeople>
 <Line showArrowUp={showArrowUp}/>

 <BoxPeople showArrowUp={showArrowUp}>
    <BoxImageName showArrowUp={showArrowUp}>
<ImagePeople src="https://i.ibb.co/yhsRX3w/ruiva.webp" 
alt="foto de pessoas" 
showArrowUp={showArrowUp}/>
<NamePeople>Liam oliveira rodrigues</NamePeople></BoxImageName>
<BoxSvg1 showArrowUp={showArrowUp}>
<ButtonSvg width="40px" height="40px">
<GoFile size={26} color="#000"/>
</ButtonSvg>
<ButtonSvg width="40px" height="40px">
    <IoIosLink size={26} color="#000"/>
    </ButtonSvg>
<ButtonSvg width="40px" height="40px">
    <CiLinkedin  size={26}  color="#000"/>
</ButtonSvg>

<ButtonSvg width="40px" height="40px">
    < PiGithubLogo size={26} color="#000"/>
    </ButtonSvg>
<ButtonSvg width="40px" height="40px"> 
    <AiOutlineMail size={26} color="#000"/>
    </ButtonSvg>
   
    </BoxSvg1>
    
</BoxPeople>
 <Line showArrowUp={showArrowUp}/>


</ConteinerVagacy>



    </Background>
    </>)
}



export default ManageBusiness;