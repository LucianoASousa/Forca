import { useState } from 'react';
import {getWord, getDefinition} from '../../services/api';
import { Alphabet } from '../../utils/alphabet';
import { Container, Letters } from './style';


function Words() {

  const [alphabet, setAlphabet] = useState(Object.keys(Alphabet));
  const [word, setWord] = useState('');
  const [vidas, setVidas] = useState(6);
  const currentWord = new Array(word.length).fill(' _ ');
  const [respostas, setRespostas] = useState(currentWord);
  const [definition, setDefinition] = useState('');


  const handleChute = (e) => {
    const newCurrentWord = respostas.slice();
    const newAlphabet = alphabet.filter((letra) => letra !== e);
    setAlphabet(newAlphabet);

    word.split("").forEach(
      (element, index) => {
        if (element === Alphabet[e][Alphabet[e].indexOf(element)]) {
          newCurrentWord[index] = Alphabet[e][Alphabet[e].indexOf(element)];
        }
      }
    )
    setRespostas(newCurrentWord)
    if (!word.includes(e)) {
      setVidas(vidas - 1)
    }
  }


  async function handleStart() {
    const word = await getWord();
    const definition = await getDefinition(word);
    setDefinition(definition);

    if(word.length > 5) {
      const newCurrentWord = new Array(word.length).fill(' _ ');

      if(word.includes('-')){
        word.split("").forEach((element, index) => {
          if(element === '-'){
            newCurrentWord[index] = '-'
          }
        })
      }
        setWord(word);
        setRespostas(newCurrentWord);
        setVidas(6);
        setAlphabet(Object.keys(Alphabet));
        console.log(word)
        return;
    }
    handleStart()
  }

    if (vidas <= 0) {
      alert(`Você perdeu! A palavra era ${word}`)
      setVidas(6)
      setRespostas(currentWord)
      setAlphabet(Object.keys(Alphabet))
    }

  return (
    <Container>
    <Letters>
    {alphabet.map((letra) => (<button onClick={() => handleChute(letra)} key={letra}>{letra}</button>))}
    </Letters>
    
      <h2 className="vidas">Vidas: {vidas}</h2>
      <p className="resposta">{respostas}</p>
      <button onClick={handleStart}>Start</button>

      <h1>{definition}</h1>
      </Container>
      
  
  );
}

export default Words;