import Modal from "react-modal"
import { useContext } from "react"
import { wordContext } from "../../context/context"
import { Container } from "./style"
import {IoCloseCircleSharp} from 'react-icons/io5'

Modal.setAppElement('#root')

function ModalTip(){

  const {isOpen, onRequestClose, definition} = useContext(wordContext)


  return(
    <Modal
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      className="react-modal"
      overlayClassName="react-overlay">
      <Container>
      <h2>{definition}</h2>
      <button onClick={onRequestClose} className="close"><IoCloseCircleSharp/></button>
      </Container>
      </Modal>
  )
}

export default ModalTip