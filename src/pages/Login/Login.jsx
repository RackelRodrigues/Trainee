import styled from "styled-components";
import { useState } from "react";
import ImgLogo from '../../image/logo_Developer.jpeg';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import Header from "../../components/Header/header";

const Background = styled.div`
background-color: #161A1D;
height: 90vh;
display: flex;
justify-content: center;
`;

const Conteiner = styled.div`
width: 530px;
height: 500px;
background-color: #D9D9D9;
border-radius: 15px;

`;

const BoxSvg = styled.div`
width: 25px;
height: 25px;
background-color: transparent;
border-right: 2px solid #000;
margin-left: 10px;
display: flex;
align-items: center;
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
width: 400px;
height: 50px;
border-radius: 7px;
background-color: #A8A29E;
display: flex;
align-items: center;
margin-top: 40px;
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
margin-left: 5px;
text-decoration: none;
`;



const Button = styled.button`
width: 400px;
height: 45px;
border-radius: 5px;
background-color: #000;
color: #fff;
cursor: pointer;

`;

const AlignCenter = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
margin-top: 23px;
`;

const ConteinerForget = styled.div`
display: flex;
justify-content: flex-end;
width: 400px;
margin: 20px 0 20px 0;
`;


const BoxLogo = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
padding: 20px;
`;

const ConteinerLink = styled.div`
margin-top: 30px;


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
cursor: Pointer;
text-decoration: none;
`;
const ToggleButton = styled.button`
  margin-right: 15px;
  background: none;
  border: none;
  cursor: pointer;
`;


const Login = () =>{
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
};
    return (
        <>
        <Header/>
        <Background>
            <Conteinerall>
            <Conteiner>
                <BoxLogo>
                <Logo src={ImgLogo} alt="logo"/>
                <NameLogo>Trainee</NameLogo>
                </BoxLogo>
< AlignCenter>
                <Conteinerinput>
                    <BoxSvg>
            <MdOutlineMailOutline size={25} color='#000'/>
                    </BoxSvg>
                    
                    <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Conteinerinput>
                <Conteinerinput>
                    <BoxSvg>
                        <FiLock size={25} color='#000'/>
                    </BoxSvg>
                    
                    <Input
                    placeholder="Senha"
                    type={showPassword ? "text" : "password"}
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    />
                      <ToggleButton onClick={togglePasswordVisibility}>
                {showPassword ? <FaRegEye size={20}/> : <FaRegEyeSlash  size={20}/>}
              </ToggleButton>
                </Conteinerinput>
                <ConteinerForget>
                 <Forget color="#000">Esqueceu a </Forget> <Forget color="#6554E1">senha</Forget>
               </ConteinerForget>  
               <Button>Inscrever-se</Button>
               <ConteinerLink>
                 <Forget color="#000" href="/CriarConta">Não tem uma conta?</Forget> <Forget color="#6554E1">Inscreva-se</Forget>
              </ConteinerLink>
</AlignCenter>
            </Conteiner>
            <ConteinerLink>
            <LinkBusiness color="#fff" href="/CriarCempresa">Publique suas vagas conosco!</LinkBusiness>
            <LinkBusiness color="#6554E1" href="/CriarCempresa"> Inscreva sua empresa aqui</LinkBusiness>
    </ConteinerLink> 
     </Conteinerall>  
      </Background>
        </>
    )
}


export default Login;