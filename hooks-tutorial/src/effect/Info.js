import React, {useState, useEffect} from 'react'

function Info() {
    const [name,setName] = useState('');
    // 1. 클래스형 컴포넌트의 componentDidMount + componentDidUpdate
    // useEffect(() => {
    //     console.log('렌더링 완료')
    //     console.log(name)
    // })

    // 2. 클래스형 컴포넌트의 componentDidMount
    // useEffect(() => {
    //     console.log('마운트 완료)
    //     console.log(name)
    // }, [])

    // 2. 특정 값에 대한 componentDidMount
    // useEffect(() => {
    //     console.log('마운트 완료')
    //     console.log(name)
    // }, [name])

    // 3. 언마운트전, 업데이트전 클린업 함수
    useEffect(() => {
        console.log('effect')
        console.log(name)
        return () => {
            console.log('clean')
            console.log(name)
        }
    })

    // 3. 언마운트전 클린업 함수
    useEffect(() => {
        console.log('effect')
        console.log(name)
        return () => {
            console.log('clean')
            console.log(name)
        }
    }, [])

    const onChangeName = e => { setName(e.target.value) }

  return (
    <div>
        <p>Info</p>
        <input onChange={onChangeName}></input>

        <div>{name}</div>
    </div>
  )
}

export default Info