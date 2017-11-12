export const Actions = {
    SET_RESULT: 'SET_RESULT',
    RESET_DATA: 'RESET_DATA',
    RESET_INPUT: 'RESET_INPUT',
    SET_INPUT: 'SET_INPUT',
    COMPONENT_INITIALIZING : 'COMPONENT_INITIALIZING'
}

export function raiseAction( type, payload){
    return{
      type,
      payload
    }
}