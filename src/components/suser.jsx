import React, { Component } from 'react';
import SubuserForm  from './subuser';
import SubuserTable from './addsubuser';
import axios from 'axios';

class MainSub extends Component {
  constructor(props) {  
    super(props);
    
    this.state = {
        usersList: [],
        user: {
          firstName: '',
          middleName: '',
          lastName: '',
          bDate: '',
          hAdd: '',
          oAdd: '',
          pNum: '',
          rel:''
        }
    };

  }

  getUsers(){
    axios.get(`http://localhost:8080/cpm.rjdc.ccsystem/rest/subusers`)
      .then(res => {
          const usersList = res.data;
          this.setState({usersList:usersList});
      })
}

componentDidMount(){
  this.getUsers();
}



  handleChangeInfo = e => {
    const {name, value} = e.target;

    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value
      }
    }));
  }

  // (POST METHOD) ADD PASSENGER
  handleAddUser = e => {
    let user = this.state.user;
    let usersList = [...this.state.usersList];
    usersList.push(user);
    this.setState({usersList : usersList});
    e.preventDefault();
    console.log("post");
    console.log(user);
    let headers = {
      'Content-Type': 'application/json',
    }

    axios.post(`http://localhost:8080/cpm.rjdc.ccsystem/rest/subusers`,user, {headers:headers})
    .then(res =>{
        console.log(res);
        console.log(res.data);
    })
  }



  deleteUser = rowIndex => {

    let usersList = [...this.state.usersList];

    usersList.splice(rowIndex, 1);

    this.setState({usersList: usersList});
  }


  render() {

    return (
      <div className="App">


          <div className='forms-panel'>
            <SubuserForm 
              handleChangeInfo={this.handleChangeInfo} 
              handleAddUser={this.handleAddUser} 
            />
          </div>
          
          <br/>

          <div className='table-panel'>
            <SubuserTable usersList={this.state.usersList} deleteUser={this.deleteUser} />
          </div>
      </div>
    );
  }
}

export default MainSub;
