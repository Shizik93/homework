export type initialStateType = {
    loading: boolean
}

const initState = {
    loading: false

}

export const loadingReducer = (state: initialStateType = initState, action: loadingType): initialStateType => {
    switch (action.type) {

        case 'LOADING': {
            debugger
            return {...state, loading: action.boolean}
        }
        default:
            return state
    }
}
type loadingType = {
    type: 'LOADING',
    boolean: boolean,
}
export const loadingAC = (boolean: boolean): loadingType => {
    return {
        type: 'LOADING',
        boolean
    }
}