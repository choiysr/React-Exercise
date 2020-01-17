const initState = {arr:[]}

// 만약 state에 해당하는 파라미터가 있다면 그것을 쓰고, 아니면 기본 파라미터로 initState를 써라 
export default function todoReucer(state = initState, action) {

    const {type, payload} = action

    if(type !== "TODO") {
        return state
    }

    console.log("IN todoReducer.js...", action)

    return state

}