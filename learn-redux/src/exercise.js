import {createStore} from "redux";

const initialState = {
    counter: 0,
    text: '',
    list: []
}


// 액션
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// 액션 생성 함수 (액션을 리턴함)
const increase = () => {
    return {
        type: INCREASE
    }
}

const decrease = () => {
    return {
        type: DECREASE
    }
}

const changeText = text => {
    return {
        type: CHANGE_TEXT,
        text
    }
}

const addToList = item => ({
    type: ADD_TO_LIST,
    item
});

// 리듀서 : 새로운 상태를 만듦 (불변성 지키기)
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            }
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            }
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            };
        default:
            return state;
    }
}

// 스토어
const store = createStore(reducer)
console.log(store.getState())

// 스토어의 상태가 바뀔때마다 호출됨
const listener = () => {
    const state = store.getState()
    console.log(state)
}

const unsubscribe = store.subscribe(listener)

store.dispatch(increase())
store.dispatch(decrease())
store.dispatch(changeText('안녕하세요'))
store.dispatch(addToList({ id: 1, text: '와우' }))