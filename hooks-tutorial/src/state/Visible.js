import React, { useState } from 'react'
import Info from './Info'

function Visible() {
    const [visibility, setVisibility] = useState(false)

  return (
    <div>
        <button onClick={() => setVisibility(!visibility)}>
            { visibility ? '숨기기' : '보이기' }
        </button>
        <hr />
        { visibility && <Info />}
    </div>
  )
}

export default Visible