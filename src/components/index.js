import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Routes, LoginRoutes } from '../config/routes';
import { getFriends, getGroups } from '../actions/friends';

class App extends React.Component {
  componentWillMount() {
    this.props.getFriends();
    this.props.getGroups();
  }
  render() {
    if (this.props.accessToken) return <Routes />;

    return <LoginRoutes />;
  }
}

function mapStateToProps(state) {
  const {
    account: { accessToken },
    friends: { friends, groups },
  } = state;

  return {
    accessToken,
    friends,
    groups,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getFriends,
    getGroups,
  }, dispatch);
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
