import styled from "styled-components"


const ConteinerAll = styled.div`
display: flex;
align-items: center;
justify-content: center;

`;

const Card = styled.div`
width: 1200px;
height: 120px;
background-color: #CACFE7;
display: flex;
flex-direction: column;
justify-content: center;
border-radius: 20px;
padding-left: 35px;
margin: 20px 0 0 0;
`;


const Titulo = styled.h2`
font-family: Raleway;
font-size: 18px;
font-weight: 600;
color: #000;


`;

const Content = styled.p`
font-family: Raleway;
font-size: 18px;
font-weight: 100;
width: 900px;

`;

const Button = styled.button`
width: 100px;
height: 30px;
border-radius: 30px;
background-color: #6554E1;
color: #CACFE7;
font-family: Raleway;
font-size: 13px;
font-weight: 100;
margin-right: 20px;
cursor: pointer;
`;

const Prazo = styled.p`
font-family: Raleway;
font-size: 17px;
font-weight: 300;



`;



const Conteiner = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;

`;

const Conteiner2 = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 880px;

`;

const ConteinerTags = styled.div`
display: flex;
align-items: center;
flex-direction: row;
`;

const Tags = styled.div`
width: 70px;
height: 30px;
border-radius: 20px;
background-color: #C026D3;
color: #fff;
font-family: Raleway;
font-size: 10px;
font-weight: 500;
display: flex;
align-items: center;
justify-content: center;
margin-right: 15px;
`;

const Cardvacancy = ()=>{
    return(
    <>
    <ConteinerAll>
    <Card>
<Titulo>Estagio em desenvolvimento web</Titulo>
<Conteiner>
<Content>O estagiário irá auxiliar no desenvolvimento e
manutenção de aplicações web, colaborando com a equipe de desenvolvimento e aprendendo novas 
tecnologias.</Content>
<Button>Aplicar</Button>
</Conteiner>
<Conteiner2>
<ConteinerTags>
<Tags>HTML</Tags>
<Tags>Photoshop</Tags>
<Tags>Javascript</Tags>
<Tags>ReactJS</Tags></ConteinerTags>
<Prazo>Prazo: 23/12</Prazo>
</Conteiner2>

    </Card></ConteinerAll>
    </>)
}

export default Cardvacancy;