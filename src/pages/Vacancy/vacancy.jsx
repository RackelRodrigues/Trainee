import styled from "styled-components";
import HeaderLogged from "../../components/HeaderLogged/HeaderLogged";
import { IoLocationOutline } from "react-icons/io5";
import { CgScreen } from "react-icons/cg";
import { IoCodeSlashOutline } from "react-icons/io5";
import { BiSolidBusiness } from "react-icons/bi";


const Background = styled.div`
background-color: #161A1D;
height: 100%;
`;

const Titulo = styled.h2`
font-family: Raleway;
font-size: 35px;
font-weight: 500;
color: #fff;
display: flex;
align-items: center;
justify-content: center;
height: 5vh;

`;



const Vacancy = ()=>{
    return(<>
    <HeaderLogged/>
    </>)
}


export default Vacancy;