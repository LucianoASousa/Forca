import { Container } from "./style";
import { getWord } from "../../services/api";
import { useEffect, useContext} from "react";
import {debounce} from "lodash";
import { wordContext } from "../../context/context";

function Word(){
  const { handleWord, currentWord, handleCurrentWord} = useContext(wordContext);
  
  async function handleStart() {
    const word = await getWord();

    if(word.length > 5 && word.length < 10) {
      const newCurrentWord = new Array(word.length).fill(' _ ');

      if(word.includes('-')){
        word.split("").forEach((element, index) => {
          if(element === '-'){
            newCurrentWord[index] = '-'
          }
        })
      }
      handleWord(word);
      handleCurrentWord(newCurrentWord);
      return;
    }
    handleStart()
  }
  
  const debounced = debounce(() => {handleStart()}, 5)

  useEffect(() => {
    debounced()
  }, [])

  return (
    <Container>
      {currentWord}
    </Container>
  )
}

export default Word;