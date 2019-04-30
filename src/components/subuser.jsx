import React , {Component} from "react"
import PropTypes from 'prop-types';



class AddSubuser extends Component{
    render(){
        return(
          <div className='passenger-form-wrapper'> 
      
     
        <form>
          <h2><center>Add Subuser</center></h2>
          <br/>
          <div className="row">
            <div className="col-25">
              <p><bold>User ID: 0001</bold></p>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>First Name: </label>
            </div>
            <div className="col-75">
              <input 
                type="text" 
                name="firstName" 
                placeholder="Enter Your First Name" 
                onChange={this.props.handleChangeInfo} 
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Middle Name: </label>
            </div>
            <div className="col-75">
              <input 
                type="text" 
                name="middleName" 
                placeholder="Enter Your Middle Name" 
                onChange={this.props.handleChangeInfo} 
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Last Name:</label>
            </div>
            <div className="col-75">
              <input 
              type="text" 
              name="lastName" 
              placeholder="Enter Your Last Name" 
              onChange={this.props.handleChangeInfo} 
              />
            </div>
          </div>
          
          <div className="row">
            <div className="col-25">
              <label>Birth Date: </label>
            </div>

            <div className="col-75">
              <input 
                type="date" 
                name="bDate" 
                placeholder="Enter Your Birthdate" 
                onChange={this.props.handleChangeInfo} 
              />
            </div>
          </div>  

          <div className="row">
            <div className="col-25">
              <label>Home Address: </label>
            </div>

            <div className="col-75">
              <input 
                type="text" 
                name="hAdd" 
                placeholder="Enter Your Home Address" 
                onChange={this.props.handleChangeInfo} 
              />
            </div>
          </div>  
          <div className="row">
            <div className="col-25">
              <label>Office address: </label>
            </div>

            <div className="col-75">
              <input 
                type="text" 
                name="oAdd" 
                placeholder="Enter Your office Address" 
                onChange={this.props.handleChangeInfo} 
              />
            </div>
          </div>  

          <div className="row">
            <div className="col-25">
              <label>Phone Number: </label>
            </div>

            <div className="col-75">
              <input 
                type="text" 
                name="pNum" 
                placeholder="Enter Your Phone Number" 
                onChange={this.props.handleChangeInfo} 
              />
            </div>
          </div>  

          <div className="row">
            <div className="col-25">
              <label>Relationship: </label>
            </div>

            <div className="col-75">
              <input 
                type="text" 
                name="rel" 
                placeholder="Enter Your relationship to the Parent User" 
                onChange={this.props.handleChangeInfo} 
              />
            </div>
          </div>  

          <div className="row">
            <div className="col-25">
            </div>
            <div className="col-75">
              <button 
                type="button" 
                className="button" 
                onClick={this.props.handleAddUser}>Add
              </button>
            </div>
          </div>
        </form> 
            
      </div>
        )
    }
}

AddSubuser.propTypes = {
    handleChangeInfo: PropTypes.func,
    handleAddUser: PropTypes.func
}

export default AddSubuser;