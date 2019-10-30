import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios'
import { NavLink } from 'react-router-dom'


class Register extends Component {

constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  }

  
 }

 handleClick = () => {

        axios({
            method: 'post',
            url: 'http://localhost:59074/api/auth/register',
            headers: {'Access-Control-Allow-Origin': '*'}, 
            data: {
              'Username': this.state.username,
              'Password': this.state.password
            }
          })

}

render() {
  
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar className="center"
             title="Register"
           />
           <TextField className="center"
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField className="center"
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" className="center" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Register;