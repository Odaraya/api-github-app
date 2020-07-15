import React from 'react';
import Main from "./Pages/Main/Main"
import Result from "./Pages/Result/Result"
import { Route, Switch } from "react-router-dom"
import './app.css'

function App() {
  return (
  <div className="App">
    <Switch>
    <Route exact path="/" render={props => <Main{...props}/>} />
   <Result path="/result" render={props => <Result{...props}/>}/>
   </Switch>
    </div>
  )

}   

  


export default App;
