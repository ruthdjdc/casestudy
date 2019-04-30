import React, { Component, Fragment } from 'react';
import '../css/puser.css';


class PrimUser extends Component {

  constructor(props) {  
    super(props);
    
    this.state = {
        users: [],
        isLoaded: false,
    };
  }
  componentDidMount() {
    
  fetch('http://localhost:8080/cpm.rjdc.ccsystem/rest/users')
      .then ( res => res.json())
      .then (json => {
        this.setState ({
          isLoaded: true,
          users: json,
        })
      });     
}

  render() {
    var { isLoaded, users } = this.state;
      if (!isLoaded) {
        return <div>Loading..</div>
      }
      else {

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
}


export default PrimUser;

