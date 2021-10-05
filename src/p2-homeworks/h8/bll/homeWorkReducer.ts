import {initialPeopleType} from "../HW8";

type ActionType = { type: 'sort', payload: 'up' | 'down' } | { type: 'check', payload: 18 }

export const homeWorkReducer = (state: Array<initialPeopleType>, action: ActionType): Array<initialPeopleType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return action.payload === 'up'? [...state].sort((a, b) => a.age - b.age):action.payload==='down'?[...state].sort((a, b) => b.age - a.age):state

            }
    /*    case
            'sort-age-18'
        :
            {
                return [...state.filter(f => f.age > 18)]
            }*/
        case 'check': {
              return state.filter(f=>f.age>action.payload)
        }
        default:
            return state
        }
    }
