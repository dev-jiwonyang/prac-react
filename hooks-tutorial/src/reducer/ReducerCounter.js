// useReducer
// 다양한 컴포넌트 상황에 따라 다양한 상태를 업데이트

import React, { useReducer } from 'react'

function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 }
        case 'DECREMENT':
            return { value: state.value - 1}
        default:
            return state;
    }
}

function ReducerCounter() {
    const [state, dispatch] = useReducer(reducer, { value: 0 })

    return (
        <div>
            <p>ReducerCounter</p>
            <p>{state.value}</p>

            <button onClick={() => dispatch({ type: 'INCREMENT'})}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT'})}>-1</button>
        </div>
    )
}

export default ReducerCounter