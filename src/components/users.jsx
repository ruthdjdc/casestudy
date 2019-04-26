import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell,  CardText} from 'react-mdl';
import Primuser from './primuser';
import Subuser from './subuser';

class Users extends Component {
  
constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="primuser">
            <CardText> Profile Information</CardText>
          
              

        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="subuser">
        <Subuser/>

         </div>
      )
    } 
  }
  render() {
    return(
      <div>

        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Primary User</Tab>
          <Tab>Supplementary User</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    )
  }
}

export default Users;