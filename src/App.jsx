
import Letters from "./components/Letters"
import Word from "./components/Word"
import { GlobalStyle } from "./style/Global"
import { wordContext } from "./context/context"
import { useState } from "react"
import Force from "./components/Force"

function App() {
  const [word, setWord] = useState('');
  const [currentWord, setCurrentWord] = useState(new Array(word.length).fill(' _ '));
  const [lives, setLives] = useState(6);

  function handleWord(word) {
    setWord(word)
  }

  function handleCurrentWord(currentWord) {
    setCurrentWord(currentWord)
  }

  function handleLives() {
    setLives(lives - 1)
  }

  if(lives < 1){
    alert(` Você perdeu! A palavra era ${word} `)
    window.location.reload()
  }

  if(currentWord.join('') === word && word !== ''){
    alert(`Você ganhou!`)
    window.location.reload()
  }

  return (
    <wordContext.Provider value={
      {word, handleWord, currentWord, handleCurrentWord, lives, handleLives}}>
      <Word/>
      <Letters/>
      <GlobalStyle />
      <Force/>
    </wordContext.Provider>
  )
}

export default App