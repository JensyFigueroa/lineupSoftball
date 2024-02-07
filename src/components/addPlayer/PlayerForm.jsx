// PlayerForm.js

import { useState } from "react";

const PlayerForm = ({ addOrUpdatePlayer }) => {
  const [name, setName] = useState('');
  const [atBats, setAtBats] = useState(0);
  const [hits, setHits] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const average = atBats > 0 ? hits / atBats * 1000: 0; // Calcula el average si hay al menos una aparición al bate
    addOrUpdatePlayer({ name, average });
    setName('');
    setAtBats(0);
    setHits(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del jugador"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Apariciones al bate"
        value={atBats}
        onChange={(e) => setAtBats(parseInt(e.target.value))}
      />
      <input
        type="number"
        placeholder="Hits conectados"
        value={hits}
        onChange={(e) => setHits(parseInt(e.target.value))}
      />
      <button type="submit">Agregar/Actualizar Jugador</button>
    </form>
  );
};

export default PlayerForm;
