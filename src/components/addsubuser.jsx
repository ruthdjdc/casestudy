import React, { Component, Fragment} from "react";
import PropTypes from 'prop-types';

class SubuserTable extends Component {
  render() {
    
    return (
        <Fragment>
            <table className='user-table'>
            <thead>
                Supplementary Users
            </thead>
            <tbody>
                <tr className='user-table-row'>
                    <th className='user-table-cell'>First Name</th>
                    <th className='user-table-cell'>Middle Name</th>
                    <th className='user-table-cell'>Last Name</th>
                    <th className='user-table-cell'>Birthdate</th>
                    <th className='user-table-cell'>Home Address</th>
                    <th className='user-table-cell'>Ofice Address</th>
                    <th className='user-table-cell'>Phone Number</th>
                    <th className='user-table-cell'>Relationship</th>
                   
                </tr>
                {
                    this.props.usersList.map((user, index) =>{
                        return (
                            <tr className='user-table-row'>
                                <th className='user-table-cell'>{user.firstName}</th>
                                <th className='user-table-cell'>{user.middleName}</th>
                                <th className='user-table-cell'>{user.lastName}</th>
                                <th className='user-table-cell'>{user.bDate}</th>
                                <th className='user-table-cell'>{user.hAdd}</th>
                                <th className='user-table-cell'>{user.oAdd}</th>
                                <th className='user-table-cell'>{user.pNum}</th>
                                <th className='user-table-cell'>{user.rel}</th>
                                
                            </tr>
                        )
                })
                }
            </tbody>
            </table>
        </Fragment>
    );
}
}

SubuserTable.propTypes = {
deleteUser: PropTypes.func,
usersList: PropTypes.func
}


export default SubuserTable;
