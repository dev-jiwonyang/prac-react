import React, { useCallback, useMemo, useState } from 'react'

const getAverage = numbers => {
    console.log('평균값 계산 중...')
    if (numbers.length == 0) return 0
    const sum = numbers.reduce((a, b) => a + b)
    return sum / numbers.length
}

function Average() {
    const [list, setList] = useState([])
    const [number, setNumber] = useState('')

    // 컴포넌트가 처음 렌더링될 때만 함수 생성
    const onChange = useCallback(e => {
        setNumber(e.target.value)
    }, [])

    // number, list가 바뀌었을 때만 함수 생성
    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number))
        setList(nextList)
        setNumber('')
    }, [number, list])

    const avg = useMemo(() => getAverage(list), [list])

  return (
    <div>
        Average
        <input value={number} onChange={onChange}></input>
        <button onClick={onInsert}>SUBMIT</button>

        <ul>
            {list.map((value, idx) => {
                <li key={idx}>{value}</li>
            })}
        </ul>

        <div>AVG: {avg}</div>
    </div>
  )
}

export default Average