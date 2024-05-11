import styled from "styled-components";
import { useState } from "react";
import ImgLogo from '../../image/logo_Developer.jpeg';
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosBusiness } from "react-icons/io";
import { TbNumbers } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { RxLockOpen1 } from "react-icons/rx";
import { RxLockClosed } from "react-icons/rx";
import Header from "../../components/Header/header";

const Background = styled.div`
background-color: #161A1D;
height: 100vh;
display: flex;
justify-content: center;
`;

const Conteiner = styled.div`
width: 650px;
height: 600px;
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
margin-top: 20px;
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
margin-top: 30px;
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

`;

const ToggleButton = styled.button`
  margin-right: 15px;
  background: none;
  border: none;
  cursor: pointer;
`;




const BusinessCreate = () =>{
    const [senha, setSenha] = useState('');
    const [confirmesenha, setConfirmeSenha] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };
    const PasswordVisibility2 = () => {
      setShowPassword2(prev => !prev);
  };

  return(
  <>
  <Header/>
  <Background>
<Conteiner>
<Conteinerall>
<BoxLogo>
                <Logo src={ImgLogo} alt="logo"/>
                <NameLogo>Trainee</NameLogo>
                </BoxLogo>


                <Conteinerinput>
                    <BoxSvg>
            <IoIosBusiness size={25} color='#000'/>
                    </BoxSvg>
                    
                    <Input
                    placeholder="Nome da empresa"
                      />
                </Conteinerinput>

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
            <TbNumbers size={25} color='#000'/>
                    </BoxSvg>
                    
                    <Input
                    placeholder="CNPJ"
                    
                      />
                </Conteinerinput>

                <Conteinerinput>
                    <BoxSvg>
            <RxLockOpen1 size={25} color='#000'/>
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
                <Conteinerinput>
                    <BoxSvg>
            <RxLockClosed size={25} color='#000'/>
                    </BoxSvg>
                    
                    <Input
                    placeholder="Confirme sua Senha"
                    onChange={(e) => setConfirmeSenha(e.target.value)}
                    type={showPassword2 ? "text" : "password"}
                    value={confirmesenha}
                      />
                         <ToggleButton onClick={PasswordVisibility2}>
                {showPassword2 ? <FaRegEye size={20}/> : <FaRegEyeSlash  size={20}/>}
              </ToggleButton>
                </Conteinerinput>
                 <Button>Criar Conta</Button>
                <ConteinerLink>
                 <Forget color="#000" href="/Login">Já tem uma conta?</Forget> <Forget color="#6554E1" href="/Login">Faça Login</Forget>
              </ConteinerLink>
              </Conteinerall>
</Conteiner>


  </Background>
  
  
  </>)
}

export default BusinessCreate;