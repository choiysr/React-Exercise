// reducer는 순수함수. 

// 맨 처음에 내가 유지해야하는 값. undefined면 안되니까. 
const initState = {count:0} 

// 만약 state에 해당하는 파라미터가 있다면 그것을 쓰고, 아니면 기본 파라미터로 initState를 써라 
function countReducer(state = initState,action){
    console.log("countRedcuer is running..." , state, action)
    
    if(action.type === 'INC') {
        return {count:state.count+1}
    } else if(action.type === 'DEC') {
        return {count:state.count-1}
    }
    return state
}

export default countReducer