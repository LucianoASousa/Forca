import { useState, useContext} from "react";
import { Container } from "./style";
import { Alphabet } from "../../utils/alphabet";
import { wordContext } from "../../context/context";


function Letters(){
  const alphabet = Object.keys(Alphabet);
  const { word, currentWord, handleCurrentWord, handleLives} = useContext(wordContext);

  const handleChute = (e) => {
    const targetLetter = e.target.innerText;
    const newCurrentWord = currentWord.slice();
    let isCorrect = false;

    e.target.setAttribute('disabled', true)
    
    word.split("").forEach(
      (element, index) => {
        if (element === Alphabet[targetLetter][Alphabet[targetLetter].indexOf(element)]) {
          newCurrentWord[index] = Alphabet[targetLetter][Alphabet[targetLetter].indexOf(element)];
          isCorrect = true;
        }
      }
    )

    if(isCorrect){
      e.target.style.backgroundColor = 'green'
    }else{
      e.target.style.backgroundColor = 'red'
      handleLives()
    }

    handleCurrentWord(newCurrentWord)
  }

  return (
    <Container>
      <div>{alphabet.slice(0,11).map((letter) => (<button onClick={(e) => {handleChute(e)}} key={letter}>{letter}</button>))}</div>
      <div>{alphabet.slice(11,20).map((letter) => (<button onClick={(e) => {handleChute(e)}} key={letter}>{letter}</button>))}</div>
      <div>{alphabet.slice(20,26).map((letter) => (<button onClick={(e) => {handleChute(e)}} key={letter}>{letter}</button>))}</div>
    </Container>
  )
}

export default Letters;