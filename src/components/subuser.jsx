import React , {Component, Fragment} from "react"
import PropTypes from 'prop-types';



class SubuserForm extends Component{

  render() {
    
    return (
        <Fragment>
          
    <br/> <input type="text" name="firstName" placeholder="First Name" onChange={this.props.handleChangeInfo} />
    <input type="text" name="middleName" placeholder="Middle Name" onChange={this.props.handleChangeInfo} />
    <input type="text" name="lastName" placeholder="Last Name" onChange={this.props.handleChangeInfo} /><br/>
               <br/> <input type="text" name="bDate" placeholder="Birth Date" onChange={this.props.handleChangeInfo} /><br/>
               
   <br/> <input type="text" name="hAdd" placeholder="Home Address" onChange={this.props.handleChangeInfo} />
    <input type="text" name="oAdd" placeholder="Office Address" onChange={this.props.handleChangeInfo} /><br/>
               <br/> <input type="text" name="pNum" placeholder="Phone Number" onChange={this.props.handleChangeInfo} /><br/>
               <br/> <input type="text" name="rel" placeholder="Relationship with Parent User" onChange={this.props.handleChangeInfo} /><br/>
                <br/>
                <button type="button" onClick={this.props.handleAddUser}>Add Supplementary User</button>
            
        </Fragment>
    );
}
}

SubuserForm.propTypes = {
handleChangeInfo: PropTypes.func,
handleAddUser: PropTypes.func
}



export default SubuserForm;