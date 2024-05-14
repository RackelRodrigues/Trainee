import styled from "styled-components";


const Background = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #161A1D;
height: 80vh;
width: 100%;
color: #CACFE7;
`;

const H2 = styled.h2`
font-family: Raleway;
font-size: 38px;
font-weight: 800;
text-align: center;
color: #CACFE7;
;
width: 800px;
`;

const Trainee = styled.span`
font-family: Handjet;
font-size: 38px;
font-weight: 500;
color: #6554E1;
margin: 0 3px 0 3px;
`;


const P = styled.p`
font-family: Raleway;
font-size: 20px;
font-weight: 200;
text-align: center;
color: #CACFE7;
width: 800px;


`;








const Mainlanding = ()=>{
    return(
        <>
        <Background id='quem-somos'>
            <H2>A 
                <Trainee>Trainee</Trainee>
             é um site de estágio exclusivo para 
             estudantes da UEPB, conectando talentos 
             a oportunidades que impulsionam suas carreiras
                </H2>

                <P> Nosso objetivo é fornecer uma experiência de busca de estágio fácil e eficiente, garantindo que os estudantes da UEPB encontrem oportunidades que correspondam às suas habilidades e interesses. Junte-se a nós e comece a 
                    sua jornada rumo ao sucesso profissional!</P>
        </Background>
        </>
    )
}

export default Mainlanding;