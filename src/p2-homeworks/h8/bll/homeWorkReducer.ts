import {initialPeopleType} from "../HW8";

export const homeWorkReducer = (state: Array<initialPeopleType>, action: any): Array<initialPeopleType> => { // need to fix any
    switch (action.type) {
        case 'sort': {

            // need to fix
            return state
        }
        case 'check': {
            // need to fix
            return state
        }
        default: return state
    }
}