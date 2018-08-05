import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import BaseInfo from './components/BaseInfo'
import Grid from '@material-ui/core/Grid';
import CenteredTabs from './components/CenteredTabs'

class App extends Component {
  state = {
    BaseInfo: {},
};
onUpdate = (state) => {
  // console.log(this.props.BaseInfo.class!=null);
  this.setState({ [state.compName]: state});
};
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <BaseInfo onUpdate={this.onUpdate} />
        <Grid container alignItems="center" justify="center" >
          <Grid item xs={6}>
            <CenteredTabs onUpdate={this.onUpdate} BaseInfo={this.state.BaseInfo}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
