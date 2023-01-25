import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Letters = styled.div`
  display: grid;
  padding: 10px;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  
  button{
    
  }
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
  }
  `