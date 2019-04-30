import React, { Component, Fragment } from "react";
import  AddSubuserTables  from './subusertable';
import AddSubuser from "../components/Asubuser";
import axios from "axios";

class Subuser extends Component {
  constructor(props) {  
    super(props);
    
    this.state = {
       subusersList: [

        
        ],
        subuser: {
          firstName: '',
          middleName: '',
          lastName: '',
          bDate: '',
          hAdd: '',
          oAdd: '',
          pNum: '',
          rel: ''
        }
    };

    //this.handleAddUser2 = this.handleAddUser2.bind(this);
  }

  getSubUsers(){
    axios.get(`http://localhost:8080/cpm.rjdc.ccsystem/rest/subusers`)
      .then(res => {
          const subusersList = res.data;
          this.setState({subusersList:subusersList});
      })
}

componentDidMount(){
  this.getsubUsers();
}

// postUsers(){
// axios.get('http://localhost:8080/restsample01/rest/users',user)
//     .then(res =>{
//         console.log(res);
//         console.log(res.data);
//     })
// }

  handleChangeInfo = e => {
    const {name, value} = e.target;

    this.setState((prevState) => ({
      subuser: {
        ...prevState.subuser,
        [name]: value
      }
    }));
  }

  // (POST METHOD) ADD PASSENGER
  handleAddSubUser = e => {
    let subuser = this.state.subuser;
    let subusersList = [...this.state.subusersList];
    subusersList.push(subuser);
    this.setState({subusersList : subusersList});
    e.preventDefault();
    console.log("post");
    console.log(subuser);
    let headers = {
      'Content-Type': 'application/json',
    }

    axios.post(`http://localhost:8080/restsample01/rest/users`, subuser, {headers:headers})
    .then(res =>{
        console.log(res);
        console.log(res.data);
    })
  }

  // handleAddUser2(e) {
  //   let user = this.state.user;
  //   let usersList = [...this.state.usersList];

  //   usersList.push(user);

  //   this.setState({usersList : usersList});

  //   e.preventDefault();
  // }



  render() {

    return (

    
      <div className="body-wrapper">
      

      {/* Display Passenger Table */}
          <div className='forms-panel'>
            <AddSubuser
              handleChangeInfo={this.handleChangeInfo} 
              handleAddSubUser={this.handleAddSubUser} 
            />
     </div>
     </div>
    );
  }
}

export default Subuser
