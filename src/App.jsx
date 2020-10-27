import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);

  function showName() {
    setShow(true);
  }
  
  return (
    <>
      <h1 
        id="titulo"
        data-cy="titulo"
      >
        Criando meu primeiro teste E2E
      </h1>
      <input 
        type="text"
        placeholder="nome"
        value={name}
        id="input"
        data-cy="input"
        onChange={e => setName(e.target.value)}
      />
      <button
        id="botao"
        data-cy="botao"
        onClick={showName}
      >
        Clicar
      </button>
      { show && (
        <h1
          id="nome"
          data-cy="nome"
        >
          Meu nome é: {name}
        </h1>
      )}
    </>
  );
}

export default App;
