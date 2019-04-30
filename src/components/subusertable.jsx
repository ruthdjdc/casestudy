import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


class AddSubuserTables extends Component{
    render(){
        return(
            <Fragment>
                <div className="passenger-display-container">
                <table className='passenger-table'>
                <tbody>
                    <tr className='passenger-table-head'>
                    <th className='passenger-table-cell'>USER ID</th>
                        <th className='passenger-table-cell'>FIRST NAME</th>
                        <th className='passenger-table-cell'>MIDDLE NAME</th>
                        <th className='passenger-table-cell'>LAST NAME</th>
                        <th className='passenger-table-cell'>BIRTHDATE</th>
                        <th className='passenger-table-cell'>HOME ADDRESS</th>
                        <th className='passenger-table-cell'>OFFICE ADDRESS</th>
                        <th className='passenger-table-cell'>PHONE NUMBER</th>
                        <th className='passenger-table-cell'>RELATIONSHIP </th>
                    </tr>
                    {
                        this.props.subusersList.map((subuser) =>{
                            return (
                                <tr className='passenger-table-row'>
                                    <th className='passenger-table-cell'>{subuser.firstName}</th>
                                    <th className='passenger-table-cell'>{subuser.middleName}</th>
                                    <th className='passenger-table-cell'>{subuser.lastName}</th>
                                    <th className='passenger-table-cell'>{subuser.birthDate}</th>
                                    <th className='passenger-table-cell'>{subuser.hAdd}</th>
                                    <th className='passenger-table-cell'>{subuser.oAdd}</th>
                                    <th className='passenger-table-cell'>{subuser.pNum}</th>
                                    <th className='passenger-table-cell'>{subuser.rel}</th>
                                    
                                </tr>
                            )
                    })
                    }
                </tbody>
                </table>
                
                </div>
            </Fragment>

            
        )
    }
}

AddSubuserTables.propTypes = {
    subuserList: PropTypes.func
}

export default AddSubuserTables;

