import React, { useReducer } from 'react'

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    }
}

function ReducerInfo() {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    })
    const { name, nickname } = state
    const onChange = e => {
        dispatch(e.target)
    }

  return (
    <div>
        <p>ReducerInfo</p>
        <input name="name" value={name} onChange={onChange}></input>
        <input name="nickname" value={nickname} onChange={onChange}></input>

        <div>
            <b>이름 : {name}</b>
            <b>닉네임 : {nickname}</b>
        </div>
    </div>
  )
}

export default ReducerInfo