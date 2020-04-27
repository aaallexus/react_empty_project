var initialState={
}
export default function (state, action) {
    if(!state)
        state=initialState
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {
                ...state,
            }
        default :
            return state
    }
}

