import React from 'react';

function Color(){
  const arrayColori = [
    { nome: 'Rosso', id: '1' },
    { nome: 'Verde', id: '2' },
    { nome: 'Blu', id: '3' }
  ];

  return (
    <div>
      <h1>Lista Colori</h1>
      <ul>
        {arrayColori.map((oggetto, index) => (
          <li key={index}>
            <p>Colore: {oggetto.nome}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Color;
