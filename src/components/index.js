import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Routes from '../config/routes';

class App extends React.Component {
  render() {
    return <Routes />
  }
}

function mapStateToProps(state) {
  const { account } = state;

  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
