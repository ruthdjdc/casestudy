import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'; 


class Trans extends Component {

  render() {

    return(
      <div className="trans-list">
    <h1>Your transactions here</h1>
    <div className='table-panel'>

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
                        <th className='trans-table-cell'>TRANSACTION FEE</th>
                        <th className='trans-table-cell'>AMOUNT</th>
                    </tr>
                    <tr className='trans-table-row'>
                        <th className='trans-table-cell'>{this.props.date}</th>
                        <th className='trans-table-cell'>{this.props.desc}</th>
                        <th className='trans-table-cell'>{this.props.merch}</th>
                        <th className='trans-table-cell'>{this.props.fee}</th>
                        <th className='trans-table-cell'>{this.props.amt}</th>
                    </tr>

                    </tbody>
                </table>
            </Fragment>
          </div>     
    </div>
    );
  }
}

Trans.propTypes = {
  date: PropTypes.string,
  desc: PropTypes.string,
  merch: PropTypes.string,
  fee: PropTypes.string,
  amt: PropTypes.string
}

export default Trans;

