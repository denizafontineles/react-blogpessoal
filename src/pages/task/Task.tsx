import { useState, useEffect } from 'react';
import './Task.css'

/*  
  useEffect: cria uma função de Efeitos Colaterais, sempre que uma de suas 
  variaveis de dependência mudar de valor, o useEffect dispara outra função.
*/

function Task() {

  // Variaveis de Estado

  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('');

  // Função de Efeito colateral, quando a variavel completado mudar de valor
  // o useEffect dispara a função () => { if... }

  useEffect(() => {
    if (completed) {
      setTarefa('Parabéns! Você concluiu a tarefa!');
    }
  }, [completed]);

  // Outra maneira de alterar o valor da variavel de Estado sem Arrow Function
  function concluiTarefa() {
    setCompleted(true)
  }

  return (
    <div>
      <h1>Tarefa</h1>
      <h3>{tarefa}</h3>
      <p>Conclua a tarefa</p>
      <button onClick={() => setCompleted(true)}>Concluir Tarefa</button>

      {/* <button onClick={concluiTarefa}>Conclua a Tarefa</button> */}

    </div>
  );
}

export default Task;