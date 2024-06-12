import styled from "styled-components";



const Conteiner = styled.div``;

const Label = styled.label`
font-family: Raleway;
font-size: 25px;
font-weight: 300;


`;

const Conteinerinput = styled.div`
 width: ${props => props.width || '400px'};
height: ${props => props.height || '50px'};
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


const Forms = ()=>{
    return(<>
    <Label>Qual o título da vaga ?</Label>
    <Conteinerinput>
        <Input/>
    </Conteinerinput>

    <Label>Qual o prazo de inscrição para a vaga ofertada ?</Label>
    <Conteinerinput>
        <Input/>
    </Conteinerinput>
    <Label>Qual é o modelo de trabalho para esta posição ?</Label> 
    <Conteinerinput>
        <Input/>
    </Conteinerinput>
    <Label>Qual é a descrição para essa vaga de estágio ?</Label> 
    <Conteinerinput>
        <Input/>
    </Conteinerinput>
    <Label>Quais são  as  princiapais responsabilidades do estagiário ?</Label> 
    <Conteinerinput>
        <Input/>
    </Conteinerinput>
    <Label>Quais são as exigências necessárias para se inscrever na vaga?</Label>
    <Conteinerinput>
        <Input/>
    </Conteinerinput>
    <Label>Quais são os benefícios ofericidos aos estagiários selecionados ?</Label>
    <Conteinerinput>
        <Input/>
    </Conteinerinput>
     <Label>Quais são as linguagens de programação, hard skills e soft skills 
    necessárias para este estágio?</Label>
    <Conteinerinput>
        <Input/>
    </Conteinerinput>
    
    </>)
}


export default Forms;