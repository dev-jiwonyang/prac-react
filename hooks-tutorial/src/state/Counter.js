import React, { useState } from 'react';

function Counter() {
    const [value, setValue] = useState(0)

  return (
    <div>
        <p>현재 값 : {value}</p>
        <button onClick={() => setValue(value + 1)}>+1</button>
    </div>
  )
}

export default Counter