import React from 'react';

function Clock({ onBtnClick }) {
  return (
    <button onClick={onBtnClick}>
      ORA ESATTA
    </button>
  );
}

export default Clock;