import React, {Component} from 'react';
import Searchbar from '../../Componentes/organismo/SearchBar/Searchbar';
import Api from "../../ApiService/ApiService"
import './main.css';


class Main extends Component {
    constructor(){
        super();
        this.state={
            inputValue: "",
            user:"",
            error:""
        };
    };

    setUser = e => {
        this.setState({inputValue: e.target.value})
    } 

    searchUser = async() => {
        const user = this.state.inputValue;
        // if (user){
        //     try{
                const getUser = await Api.get(`/users/${user}`);
                this.props.history.push({ 
                    pathname: "./result",
                    state: getUser.data
                }) 
                console.log("pegar usuario na api ", getUser.data)

        // }
      
    };

 render(){
    //  console.log(this.props.location.state)
     return(
         <div className="main--div">
        <h1> Search Github User </h1>
        <Searchbar
            placeholder="qual o seu usuario?"
            type="text"
            value={this.state.inputValue}
            onChange={this.setUser}
            onClick={this.searchUser}
            />
        </div>
     )
 } 
}


export default Main;