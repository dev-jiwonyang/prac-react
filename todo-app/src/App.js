import './App.css';
import TodoTemplate from './components/TodoTemplate'
import ToInsert from './components/ToDoInsert'
import TodoList from './components/TodoList';
import {useCallback, useRef, useState} from "react";

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text : '리액트 기초 1',
            checked: true
        },
        {
            id: 2,
            text : '리액트 기초 2',
            checked: true
        },
        {
            id: 3,
            text : '리액트 기초 3',
            checked: false
        }
    ])

    const nextId = useRef(4);

    const onInsert = useCallback(
        text => {
            const todo = {
                id : nextId.current,
                text,
                checked: false
            }
            setTodos(todos.concat(todo))
            nextId.current += 1
        },
        [todos]
    );

    const onRemove = useCallback(
        id => {
            setTodos(todos.filter(todo => todo.id !== id))
        },
        [todos]
    )

    const onToggle = useCallback(
        id => {
            setTodos(
                todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
            )
        },
        [todos]
    )

  return (
    <TodoTemplate>
      <ToInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
}

export default App;

