
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Actions,
  raiseAction
} from '../actions'

class App extends Component {
  constructor(props) {
      super(props);
      this.onChangeHandler = this.onChangeHandler.bind(this)
      this.onClickHandler = this.onClickHandler.bind(this)
      this.swap = this.swap.bind(this)
      this.Permutations = this.Permutations.bind(this)
      this.resetHandler = this.resetHandler.bind(this)
  }

  onChangeHandler(value) {
      const { actions} = this.props
      actions.raiseAction(Actions.SET_INPUT, value)
  }

  swap(a, i, j){ 
        var temp = a[j];
        a[j]=a[i];
        a[i]= temp
  };


  Permutations(a,i,result){
      const{      
          actions
      } = this.props
     if(i===a.length){
        result.push(a.join(''));
        return;
     } 
    for(let j= i; j<a.length; j++){
        this.swap(a,i,j);
        this.Permutations(a,i+1,result);
        this.swap(a,i,j)
        }
    }
  


  onClickHandler() {
    const { actions, inputString } = this.props
    actions.raiseAction(Actions.RESET_DATA)
    if(inputString!==''){
         var resultArray = []
      this.Permutations(inputString.split(''),0,resultArray)
      var manipulatedArray = new Array(inputString)
      let counter= 0;
      for (let i =0; i< inputString.length; i++){
          let size= resultArray.length/inputString.length
          manipulatedArray[i] = new Array(size) 
          for(let j=0; j<manipulatedArray[i].length;j++){
             manipulatedArray[i][j]= resultArray[counter];
             counter++; 
          }
      }
      actions.raiseAction(Actions.SET_RESULT, manipulatedArray)
    }
  }

 resetHandler(){
     const { actions} = this.props
     actions.raiseAction(Actions.RESET_DATA)
     actions.raiseAction(Actions.RESET_INPUT)
 }

  render() {
      const {
        result,
        inputString
      } = this.props

      const props = {
        result,
        inputString,
        onChangeHandler: this.onChangeHandler,
        onClickHandler: this.onClickHandler,
        resetHandler: this.resetHandler
      }

      return React.cloneElement(this.props.children, props)
  }
}

function mapStateToProps(state, ownProps) {
    return {
      ...state,
      ...ownProps
    }
}

function mapDispatchToProps(dispatch, ownprops) {
    return {
        actions: bindActionCreators({
          raiseAction
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
