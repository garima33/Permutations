import {Actions, raiseAction} from '../actions'



export default store => next => action => {
  let state = store.getState()
  switch (action.type) {
    
  }
  next(action)
}
