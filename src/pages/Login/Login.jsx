<<<<<<< HEAD
import styled from "styled-components";
import ImgLogo from '../../image/logo_Developer.jpeg';
import { MdOutlineMailOutline } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { FiLock } from "react-icons/fi";


const Background = styled.div`
background-color: #161A1D;
height: 100vh;
display: flex;
justify-content: center;
`;

const Conteiner = styled.div`
width: 600px;
height: 600px;
background-color: #D9D9D9;
border-radius: 15px;
margin-top: 35px;
`;

const BoxSvg = styled.div`
width: 25px;
height: 25px;
background-color: transparent;
border-right: 2px solid #000;
`;


const Logo = styled.img`
width: 50px;
height: 50px;
border-radius: 7px;

`;

const NameLogo = styled.h3`
font-family: Handjet;
font-size: 30px;
font-weight: 400;
color: #fff;
margin-left: 10px;
`;

const Conteinerinput = styled.div`
width: 482px;
height: 50px;
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
    color: #52525B; 
    
  }
`;


const Forget = styled.a`
font-family: Inter;
font-size: 15px;
font-weight: 200;
color: ${(props) => props.color};
cursor: pointer;
`;



const Button = styled.button`
width: 482px;
height: 45px;
border-radius: 5px;
background-color: #000;
color: #fff;
cursor: pointer;

`;



const BoxLogo = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
padding: 20px;
`;

const Conteinerall = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const LinkBusiness = styled.a`
font-family: Raleway;
font-size: 15px;
font-weight: 200;
color: ${(props) => props.color};
cursor: pointer;

`;

const Login =()=>{
    return (
        <>
        <Background>
            <Conteinerall>
            <Conteiner>
                <BoxLogo>
                <Logo src={ImgLogo} alt="logo"/>
                <NameLogo>Trainee</NameLogo>
                </BoxLogo>

                <Conteinerinput>
                    <BoxSvg>
            <MdOutlineMailOutline size={25} color='#000'/>
                    </BoxSvg>
                    
                    <Input
                    placeholder="Email"
                    />
                </Conteinerinput>
                <Conteinerinput>
                    <BoxSvg>
                        <FiLock size={25} color='#000'/>
                    </BoxSvg>
                    
                    <Input
                    placeholder="Senha"
                    />
                </Conteinerinput>
                 <Forget color="#000">Esqueceu a </Forget> <Forget color="#6554E1">senha</Forget>
                 <Button>Inscrever-se</Button>
            </Conteiner>
            <LinkBusiness color="#fff">Publique suas vagas conosco!</LinkBusiness>
            <LinkBusiness color="#6554E1"> Inscreva sua empresa aqui</LinkBusiness>
      </Conteinerall>  
      </Background>
        </>
    )
}


=======
import styled from "styled-components";
import ImgLogo from '../../image/logo_Developer.jpeg';
import { MdOutlineMailOutline } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { FiLock } from "react-icons/fi";


const Background = styled.div`
background-color: #161A1D;
height: 100vh;
display: flex;
justify-content: center;
`;

const Conteiner = styled.div`
width: 600px;
height: 600px;
background-color: #D9D9D9;
border-radius: 15px;
margin-top: 35px;
`;

const BoxSvg = styled.div`
width: 25px;
height: 25px;
background-color: transparent;
border-right: 2px solid #000;
`;


const Logo = styled.img`
width: 50px;
height: 50px;
border-radius: 7px;

`;

const NameLogo = styled.h3`
font-family: Handjet;
font-size: 30px;
font-weight: 400;
color: #fff;
margin-left: 10px;
`;

const Conteinerinput = styled.div`
width: 482px;
height: 50px;
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
    color: #52525B; 
    
  }
`;


const Forget = styled.a`
font-family: Inter;
font-size: 15px;
font-weight: 200;
color: ${(props) => props.color};
cursor: pointer;
`;



const Button = styled.button`
width: 482px;
height: 45px;
border-radius: 5px;
background-color: #000;
color: #fff;
cursor: pointer;

`;



const BoxLogo = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
padding: 20px;
`;

const Conteinerall = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const LinkBusiness = styled.a`
font-family: Raleway;
font-size: 15px;
font-weight: 200;
color: ${(props) => props.color};
cursor: pointer;

`;

const Login =()=>{
    return (
        <>
        <Background>
            <Conteinerall>
            <Conteiner>
                <BoxLogo>
                <Logo src={ImgLogo} alt="logo"/>
                <NameLogo>Trainee</NameLogo>
                </BoxLogo>

                <Conteinerinput>
                    <BoxSvg>
            <MdOutlineMailOutline size={25} color='#000'/>
                    </BoxSvg>
                    
                    <Input
                    placeholder="Email"
                    />
                </Conteinerinput>
                <Conteinerinput>
                    <BoxSvg>
                        <FiLock size={25} color='#000'/>
                    </BoxSvg>
                    
                    <Input
                    placeholder="Senha"
                    />
                </Conteinerinput>
                 <Forget color="#000">Esqueceu a </Forget> <Forget color="#6554E1">senha</Forget>
                 <Button>Inscrever-se</Button>
            </Conteiner>
            <LinkBusiness color="#fff">Publique suas vagas conosco!</LinkBusiness>
            <LinkBusiness color="#6554E1"> Inscreva sua empresa aqui</LinkBusiness>
      </Conteinerall>  
      </Background>
        </>
    )
}


>>>>>>> 540d07b5129557805023eeb8217691786bb3d9b1
export default Login;