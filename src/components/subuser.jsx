import React, { Component, Fragment } from 'react';
import '../css/subuser.css';
import { Grid, Cell } from 'react-mdl';

class Subuser extends Component {
    render() {
        return(
           
<div classNmae="subform">
<button type="button" onClick={this.props.handleAddUser}>Add Supplementary User</button> <br/>
          
          
          
           <Fragment>
            <form>
                <Grid>
                <Cell col={4}>
                <div className="container">
               <input type="text" name="fname" placeholder="First Name" onChange={this.props.handleChangeInfo} /> <br/>
                <input type="text" name="mname" placeholder="Middle Name" onChange={this.props.handleChangeInfo} /> <br/>
                <input type="text" name="lname" placeholder="Last Name" onChange={this.props.handleChangeInfo} /> <br/>
              <input type="text" name="bdate" placeholder="Birthday" onChange={this.props.handleChangeInfo} /> <br/>
                <input type="text" name="hadd" placeholder="Home Address" onChange={this.props.handleChangeInfo} /> <br/>
             <input type="text" name="oadd" placeholder="Office Address" onChange={this.props.handleChangeInfo} /> <br/>
                <input type="text" name="pnum" placeholder="Phone Number" onChange={this.props.handleChangeInfo} /> <br/>
               <input type="text" name="rel" placeholder="Relationship" onChange={this.props.handleChangeInfo} /> <br/>
                <br/><button type="button" onClick={this.props.handleAddUser}>Add</button>
                </div> 
                </Cell>
                </Grid>
                </form>
            </Fragment>

 </div>
        )
      }
}
export default Subuser;