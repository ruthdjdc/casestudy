import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://image.flaticon.com/icons/svg/349/349243.svg"
              alt="avatar"
              className="avatar-img"/>
            <div className="banner-text">
              <h1>RJDC CREDIT CARDS </h1>
            <hr/>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
