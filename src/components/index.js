import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Routes from '../config/routes';
import { getFriends, getGroups } from '../actions/friends';

class App extends React.Component {
  componentWillMount() {
    this.props.getFriends();
    this.props.getGroups();
  }
  render() {
    console.log(this.props.friends);
    console.log(this.props.groups);
    return <Routes />
  }
}

function mapStateToProps(state) {
  const { account, friends: { friends, groups } } = state;

  return {
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
