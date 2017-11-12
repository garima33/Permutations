import React from 'react'

export default class Permutation extends React.Component{
    constructor(props){
      super(props)
    }

    
    render(){
      const {
        result,
        inputString,
        onChangeHandler,
        onClickHandler,
        resetHandler
       } = this.props

      
       let TableUI = (<tr></tr>)
        if(result.length>0){
           TableUI = result.map((data, index)=>{
               return(
                  <tr key= {'row'+index}className="result-row">
                    {data.map((item, index1)=>{
                    return(<td key={'column'+index+index1}>{item}</td>)      
                     })}
                  </tr>
               )

           })
       }
      

      return(
      <div>
        <nav className="navbar">
          <a className="navbar-brand" href="#">Generate Permutations for a String</a>
        </nav>
        <div className="row text-center">
          <div className="col-xs-12">
            <h4>Enter the string</h4>
          </div>
          <div className="col-xs-12">
            <input id="string-input-main" type="text" value={inputString} onChange= {(e)=>{onChangeHandler(e.target.value)}}/>
            <span className="glyphicon glyphicon-refresh" onClick={resetHandler}></span>
          </div>
          <div className="col-xs-12">
            <button type="submit" className="btn btn-primary" onClick={onClickHandler}>
                Generate
            </button>
          </div>
        </div>
        {result.length>0&&<div className="container" id="results-container">
          <h4>Resulted Permutations</h4>
          <table className="table table-stripped table-bordered">
            <thead>
              <tr>
              </tr>
          </thead>
          <tbody>
            {TableUI}
          </tbody>
        </table>
      </div>}
    </div>
)
    }
}

