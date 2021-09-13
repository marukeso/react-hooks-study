import React, { useState, useEffect, useRef } from 'react';

export default function UseRef() {
  const [name, setName] = useState('');

  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const inputRef = useRef();
  function focus() {
    inputRef.current.focus();
  }

  const prevName = useRef('');
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name in {name} and it used to be {prevName.current}
      </div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={focus}>Focus</button>
    </>
  );
}
