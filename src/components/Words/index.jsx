import { useEffect, useState } from 'react';


function Words() {

  const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'w', 'y', 'z'];
  const [vidas, setVidas] = useState(6);
  const palavra = 'cachorro';
  const palavraSpread = palavra.split('')
  const currentPalavra = new Array(palavra.length).fill(' _ ');
  const [respostas, setRespostas] = useState(currentPalavra);

  const handleChute = (e) => {

    const newCurrentPalavra = respostas.slice();

    palavraSpread.forEach(
      (element, index) => {
        if (element === e) {
          newCurrentPalavra[index] = e;
        }
      }
    )
    setRespostas(newCurrentPalavra)
    if (!palavraSpread.includes(e)) {
      setVidas(vidas - 1)
    }
    console.log(newCurrentPalavra)
  }

    if (vidas <= 0) {
      alert('Você perdeu!')
      setVidas(6)
    }

  return (
    <div className="App">
      {alfabeto.map(letra => <button onClick={() => handleChute(letra)} key={letra}>{letra}</button>)}

      <h2 className="vidas">Vidas: {vidas}</h2>
      <p className="resposta">{respostas}</p>
    </div >
  );
}

export default Words;