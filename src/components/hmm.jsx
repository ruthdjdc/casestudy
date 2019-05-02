import React, { Component } from 'react';
import { Container, Button, Alert } from 'react';
import UserList from './userlist';
import AddUser from './adduser';

class Hmm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddUser: false,
      error: null,
      response: {},
      user: {},
      isEditUser: false
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onCreate() {
    this.setState({ isAddUser: true });
  }

  onFormSubmit(data) {
    let apiUrl;

    if(this.state.isEditUser){
      apiUrl = 'http://localhost:8080/cpm.rjdc.ccsystem/rest/addusers';
    } else {
      apiUrl = 'http://localhost:8080/cpm.rjdc.ccsystem/rest/editusers';
    }

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      myHeaders
    };

    fetch(apiUrl, options)
      .then(res => res.json())
      .then(result => {
        this.setState({
          response: result,
          isAddUser: false,
          isEditUser: false
        })
      },
      (error) => {
        this.setState({ error });
      }
    )
  }

  isEditUser = id => {

    const apiUrl = 'http://localhost:8080/cpm.rjdc.ccsystem/rest/getusers';
    const formData = new FormData();
    formData.append('id', id);

    const options = {
      method: 'POST',
      body: formData
    }

    fetch(apiUrl, options)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            user: result,
            isEditUSer: true,
            isAddUSer: true
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

  render() {

    let userForm;
    if(this.state.isAddUser || this.state.isEditUser) {
      userForm = <AddUser onFormSubmit={this.onFormSubmit} User={this.state.User} />
    }

    return (
      <div className="Hmm">
        <Container>
          <h1 style={{textAlign:'center'}}>React Tutorial</h1>
          {!this.state.isAddUser && <Button variant="primary" onClick={() => this.onCreate()}>Add User</Button>}
          {this.state.response.status === 'success' && <div><br /><Alert variant="info">{this.state.response.message}</Alert></div>}
          {!this.state.isAddUser && <UserList editUser={this.editUSer}/>}
          { userForm }
          {this.state.error && <div>Error: {this.state.error.message}</div>}
        </Container>
      </div>
    );
  }
}

export default Hmm;