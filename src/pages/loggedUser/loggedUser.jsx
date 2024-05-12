import styled from "styled-components";
import Cardvacancy from "../../components/CardVacancy/CardVacancy";
import HeaderLogged from "../../components/HeaderLogged/HeaderLogged";
import ImgLogo from '../../image/logo_Developer.jpeg';

const Background = styled.div`
background-color: #161A1D;
height: 100%;

`;

const Titulo = styled.h2`
font-family: Raleway;
font-size: 35px;
font-weight: 500;
color: #fff;


`;

const LoggedUser = ()=>{
    return(<>
    <HeaderLogged/>
    <Background>
    <Titulo>Estágios Disponíveis</Titulo>
    <Cardvacancy/>
    <Cardvacancy/>
    <Cardvacancy/>
    <Cardvacancy/>
    <Cardvacancy/>
    <Cardvacancy/>
    </Background>

    </>)
}


export default LoggedUser;