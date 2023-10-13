import React from 'react'
import { useCounter } from '../castomHooks/useCounter'

function UsingCastomHooks() {
  const [count, increase, reset] = useCounter(0)  
 
  return (
    <div>
      <p>{count}</p>
      <div>
      <button onClick={increase}>увеличить</button>
      <button onClick={reset}>очистить</button>
      </div>
    </div>
  );
}

export default UsingCastomHooks
