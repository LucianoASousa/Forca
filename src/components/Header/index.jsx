import { Container,Tip } from "./style";
import { useContext } from "react";
import { wordContext } from "../../context/context";
import { getDefinition } from "../../services/api";

function Header() {

  const {word, handleDefinition, handleIsOpen} = useContext(wordContext);

  async function handleGetDefinition() {
    const definition = await getDefinition(word);
    handleDefinition(definition)
    handleIsOpen()
  }

  return (
  <Container>
      <h1>F O R C A</h1>
      <Tip onClick={handleGetDefinition}/>
    </Container>
  );
}

export default Header;