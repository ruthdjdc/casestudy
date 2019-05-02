import React, { Component, Fragment } from 'react';
import '../css/puser.css';
import axios from 'axios';


class PrimUser extends Component {

  constructor(props) {  
    super(props);
    
    this.state = {
        users: []
    };
  }
  componentDidMount() {
    
  axios.get('http://localhost:8080/cpm.rjdc.ccsystem/rest/users')
      .then ( res => {
        this.setState ({
          users: res.data
        })
      });  
      
      

      
}

  render() {
    let users = this.state.users;

    return(
     
        <div className="users">
        <ul>
          {users.map(users => (
    
           
           <div className="container">
           <p>First Name:    {users.firstName}</p>  
           <br/>
           <p>Middle Name:   {users.middleName}</p> 
           <br/>
           <p>Last Name:      {users.lastName}</p> 
           <br/>
           <p>Birthday:        {users.bDate}</p>  
           <br/>
           <p>Home Address:   {users.hAdd}</p>  
           <br/>
           <p>Office Address: {users.oAdd}</p>  
           <br/>
           <p>Phone Number:   {users.pNum}</p>  
           <br/>
           <p>Monthly Income: {users.income}</p>
          
           <br/>



           
           </div>
     
           
           
            
          ))}
          </ul>
        </div>
      
    );
      }
  }



export default PrimUser;

