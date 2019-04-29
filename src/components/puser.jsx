import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'; 
import {
  getUserList
} from '../util/service-helper';


class PrimUser extends Component {

  constructor(props) {  
    super(props);
    
    this.state = {
        userList: []
    };
  }
  componentDidMount() {
    
    this.getuser(); 
  }
  getuser() {
    getUserList().then(res => {
      this.setState({userList : res.data.data});
    }) 
  }



  render() {

    return(
      <Trans userList={this.state.userList}/>
    );
  }
}

export default PrimUser;

