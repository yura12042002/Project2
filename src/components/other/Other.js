import React, { useState } from 'react';

function Other() {
  let counter = 0 
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>CHECK</button>
      <p>{count}</p>
    </div>
  );
}

export default Other

