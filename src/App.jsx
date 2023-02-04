
import Letters from "./components/Letters"
import Word from "./components/Word"
import Force from "./components/Force"
import Header from "./components/Header"
import { GlobalStyle } from "./style/Global"
import { wordContext } from "./context/context"
import { useEffect, useState } from "react"
import ModalTip from "./components/ModalTip"
import Swal from 'sweetalert2'

function App() {
  const [word, setWord] = useState('');
  const [currentWord, setCurrentWord] = useState(new Array(word.length).fill(' _ '));
  const [lives, setLives] = useState(6);
  const [definition, setDefinition] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  function handleWord(word) {
    setWord(word)
  }

  function handleCurrentWord(currentWord) {
    setCurrentWord(currentWord)
  }

  function handleLives() {
    setLives(lives - 1)
  }

  function handleDefinition(definition) {
    setDefinition(definition)
  }

  function handleIsOpen() {
    setIsOpen(true)
  }

  function onRequestClose() {
    setIsOpen(false)
  }

  useEffect(() => {

  if(lives < 1){
    alert(` Você perdeu! A palavra era ${word} `)
    window.location.reload()
  }

  if(currentWord.join('') === word && word !== ''){
    alert(`Você ganhou!`)
    window.location.reload()
  }
  }, [lives, currentWord, word])


  return (
    <wordContext.Provider value={
      {word, handleWord, currentWord, handleCurrentWord, lives, handleLives, definition, handleDefinition, isOpen, onRequestClose, handleIsOpen}}>
      <Header/>
      <Word/>
      <Letters/>
      <GlobalStyle />
      <Force/>
      <ModalTip/>
    </wordContext.Provider>
  )
}

export default App