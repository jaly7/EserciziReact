import React from 'react';

function Age({ age }) {
    return <div>YOUR AGE IS: {age}</div>;
  }
function Hello({name, age}) {
  return (
    <div>
      <h3>Welcome, {name}!</h3>
      {age > 18 && <Age age={age} />}
      {age !== undefined && <Age age={age} />}
      {age > 18 && age < 65 && <Age age={age} />}
      {age > 18 && age < 65 && name === 'John' && <Age age={age} />}
      {age > 18 && age < 30 && <Age age={age} />}
    </div>
  );
};

export default Hello;
