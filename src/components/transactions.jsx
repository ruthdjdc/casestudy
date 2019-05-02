import React, { Component, Fragment } from 'react';
import '../css/transactions.css'
import axios from 'axios';


class Transactions extends Component {

  constructor(props) {  
    super(props);
    
    this.state = {
        trans: [],
        isLoaded: false,
    };
  }
  componentDidMount() {
    
  fetch('http://localhost:8080/cpm.rjdc.ccsystem/rest/trans')
      .then ( res => res.json())
      .then (json => {
        this.setState ({
          isLoaded: true,
          trans: json,
        })
      });     
}



  render() {
    var { isLoaded, trans } = this.state;
      if (!isLoaded) {
        return <div>Loading..

        </div>
        
      }
      else {

    return(
      
        <div className="trans">
        <ul>
          {trans.map(trans => (
           
             <Fragment>
                <table className='trans-table'>
                <thead>

                </thead>
                <tbody>
                    <tr className='trans-table-row'>
                        <th className='trans-table-cell'>Transaction ID</th>
                        <th className='trans-table-cell'>DATE</th>
                        <th className='trans-table-cell'>DESCRIPTION</th>
                        <th className='trans-table-cell'>MERCHANT</th>
                        <th className='trans-table-cell'>AMOUNT</th>
                    </tr>

                

                    <tr className='trans-table-row'>
                    <th className='trans-table-cell'>{trans.id}</th>
                        <th className='trans-table-cell'>{trans.date}</th>
                        <th className='trans-table-cell'>{trans.desc}</th>
                        <th className='trans-table-cell'>{trans.merch}</th>
                        <th className='trans-table-cell'>{trans.amt}</th>
                    </tr>

                    </tbody>
                </table>
            </Fragment>
           
          ))}
          </ul>
        </div>
      
    );
      }
  }

}
export default Transactions;

