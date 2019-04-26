import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../css/transactions.css';

class Tables extends Component { 

    render() {
    
        return (
            <Fragment>
                <table className='trans-table'>
                <thead>
  
                </thead>
                <tbody>
                    <tr className='trans-table-row'>
                        <th className='trans-table-cell'>Date</th>
                        <th className='trans-table-cell'>Description</th>
                        <th className='trans-table-cell'>Total Amount</th>
                        <th className='trans-table-cell'>Merchant</th>
                        <th className='trans-table-cell'>Transcaction Fee</th>
                        <th className='utrans-table-cell'>Balance</th>
                    </tr>
                    {
                        this.props.transList.map((trans, index) =>{
                            return (
                                <tr className='trans-table-row'>
                                    <th className='trans-table-cell'>{trans.date}</th>
                                    <th className='trans-table-cell'>{trans.desc}</th>
                                    <th className='trans-table-cell'>{trans.amt}</th>
                                    <th className='trans-table-cell'>{trans.merch}</th>
                                    <th className='trans-table-cell'>{trans.tfee}</th>
                                    <th className='trans-table-cell'>{trans.bal}</th>                   
                                </tr>
                            )   
                        }
                        )
                    }
                </tbody>
                </table>
            </Fragment>
        );
    }
  }
  
  Tables.propTypes = {
    transList: PropTypes.func
  }
  
  export {
    Tables
  }