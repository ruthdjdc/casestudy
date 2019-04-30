import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, CardText } from 'react-mdl';


class Cards extends Component {

  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
            <CardText>Apply for a Credit Card</CardText>  

        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><CardText>Credit Card Lists</CardText> </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><CardText>View/Update Credit Card details</CardText></div>
      )
    } 
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Apply Credit Card</Tab>
          <Tab>Credit Card List</Tab>
          <Tab>Credit Card Details</Tab>
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

export default Cards;
