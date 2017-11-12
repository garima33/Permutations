import {Actions} from '../actions'

function result(state = [], action){
    switch(action.type){
    case Actions.SET_RESULT:
      return action.payload
    case Actions.RESET_DATA:
      return []
    default:
      return state
   } 
}

function inputString(state='', action){
   switch(action.type){
    case Actions.SET_INPUT:
      return action.payload
    case Actions.RESET_INPUT:
      return ''
    default:
      return state
   }   
}

export default {
    result,
    inputString
}