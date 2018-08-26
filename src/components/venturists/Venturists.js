import React from 'react'
import { connect } from 'react-redux'
import { ListItem, Avatar, Subheader, Icon } from 'react-native-material-ui'
import Header from '../common/Header'
import { getFriends } from '../../actions'
import Venturist from './Venturist'
import ActionButton from 'react-native-action-button'

import { venturistStyles as style } from './style'

class Venturists extends React.Component {
  componentDidMount() {
    this.props.getFriends()
  }
  render() {
    const { fetchingUsers, friendsList } = this.props
    return (
      <View style={{flex: 1}}>
        {fetchingUsers
          ? <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <ActivityIndicator size="large" />
            </View>
          : <View style={{flex: 1}}>
              {friendsList.length > 0
                ? <ScrollView>
                    <FlatList
                      data={friendsList}
                      keyExtractor={() => uniqueId()}
                      renderItem={this.renderUser}
                      ListHeaderComponent={<Subheader text="Friends" />}
                    />
                  </ScrollView>
                : <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                    <Text>A lone wolf will be devoured by the pack.</Text>
                  </View>
              }
              <ActionButton buttonColor="black">
                <ActionButton.Item buttonColor='#9b59b6' title="Find Friends" onPress={() => this.props.navigation.navigate('AllVenturists')}>
                  <Icon name="person-add" style={style.iconStyle} />
                </ActionButton.Item>
              </ActionButton>
            </View>
        }
      </View>
    )
  }
  renderUser = data => {
    return <Venturist user={data.item} friend {...this.props} />
  }
}

const mapStateToProps = state => {
  const { friendsList, fetchingUsers } = state.friends
  return {
    friendsList,
    fetchingUsers
  }
}

export default connect(mapStateToProps, { getFriends })(Venturists)
