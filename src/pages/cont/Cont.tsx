import { useState } from 'react'
import './Cont.css'

/*  Hooks são funcionais especiais que o React disponibiliza para nós 
    termos melhor controle de algumas ações que ocorrem em nosso projeto.

    useState: cria uma variavel de Estado, conectada ao Componente, sempre 
    que ela mudar o seu valor, o Componente renderiza novamente mostrando
    aquele novo valor.
*/

function Cont() {
  // useState = cria uma variavel de estado
  const [valor, setValor] = useState(0);

  function handleClick() {
    setValor(valor + 1);
  }

  return (
    <div className="container">
      <p>O valor é: {valor}</p>
      <button onClick={handleClick}>Adicionar 1</button>
    </div>
  )
}

export default Cont

/*import Home from './pages/home/Home';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [valor, setValor] = useState(0);

  function handleClick() {
    setValor(valor + 1);
  }
  return (
    //  <Home  title="Componente Home"
    //         description="Este é um componente Home que recebe props."
    //  />

    <div>
      <p>O valor é: {valor}</p>
      <button onClick={handleClick}>Adicionar 1</button>
    </div>
  );
}

export default App;
*/