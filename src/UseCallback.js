import React, { useState, useCallback } from 'react';
import List from './List';

export default function UseClalback() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (incrementor) => {
      return [
        number + incrementor,
        number + 1 + incrementor,
        number + 2 + incrementor,
      ];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}
