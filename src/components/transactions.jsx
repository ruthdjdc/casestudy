import React, { Component } from 'react';
import { Tables } from './Tables';

class Transactions extends Component {
  
  constructor(props) {  
    super(props);
    
    this.state = {
        transList: [
          {
            date: '04-25-19',
            desc: 'Plane Ticket',
            amt: 'P10000',
            merch: 'PAL',
            tfee: 'P150',
            bal: 'P10150'
          },
          {
            date: '04-25-19',
            desc: 'Plane Ticket',
            amt: 'P10000',
            merch: 'PAL',
            tfee: 'P150',
            bal: 'P10150'
          },
          {
            date: '04-25-19',
            desc: 'Plane Ticket',
            amt: 'P10000',
            merch: 'PAL',
            tfee: 'P150',
            bal: 'P10150'
          },
        ],
        trans: {
          date: '',
          desc: '',
          amt: '' ,
          merch: '' ,
          tfee: '',
          bal: ''
        }
    };

  }

  handleChangeInfo = e => {
    const {name, value} = e.target;

    this.setState((prevState) => ({
      trans: {
        ...prevState.trans,
        [name]: value
      }
    }));
  }


  render() {
    return(
      <div className="trans-list">
    <h1>Your transactions here</h1>
    <div className='table-panel'>
            <Tables transList={this.state.transList}  />
          </div>     
    </div>
    );
  }
}

export default Transactions;

