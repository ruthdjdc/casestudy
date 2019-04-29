import React, { Component, Fragment } from 'react';
import Trans from './trans';
import {
  getTransList
} from '../util/service-helper';



class Transactions extends Component {

  constructor(props) {  
    super(props);
    
    this.state = {
        transList: []
    };
  }
  componentDidMount() {
    
    this.getTrans(); 
  }
  getTrans() {
    getTransList().then(res => {
      this.setState({transList : res.data.data});
    }) 
  }

  render() {

    return(
      <Trans transList={this.state.transList}/>
      
    );
  }
}

export default Transactions;

