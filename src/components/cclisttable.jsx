import React, { Component, Fragment } from 'react';
import '../css/transactions.css'


class CCListTable extends Component {

  constructor(props) {  
    super(props);
    
    this.state = {
        cclist: [],
        isLoaded: false,
    };
  }
  componentDidMount() {
    
  fetch('http://localhost:8080/cpm.rjdc.ccsystem/rest/cclist')
      .then ( res => res.json())
      .then (json => {
        this.setState ({
          isLoaded: true,
          cclist: json,
        })
      });     
}

  render() {
    var { isLoaded, cclist } = this.state;
      if (!isLoaded) {
        return <div>Loading..</div>
      }
      else {

    return(
     
        <div className="cclist">
        <ul>
          {cclist.map(cclist => (
           
  
           
             <Fragment>
                <table className='cclist-table'>
                <thead>

                </thead>
                <tbody>
                    <tr className='cclist-table-row'>
                        <th className='cclist-table-cell'>Card ID</th>
                        <th className='cclist-table-cell'>Card Type</th>
                        <th className='cclist-table-cell'>Balance</th>
                        <th className='cclist-table-cell'>Credit Limit</th>
                     
                    </tr>

                

                    <tr className='cclist-table-row'>
                    <th className='cclist-table-cell'>{cclist.id}</th>
                        <th className='cclist-table-cell'>{cclist.cardtype}</th>
                        <th className='cclist-table-cell'>{cclist.bal}</th>
                        <th className='cclist-table-cell'>{cclist.limit}</th>
                   
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

export default CCListTable;

