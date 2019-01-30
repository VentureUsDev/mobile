import React from 'react'
import { connect } from 'react-redux'
import { ListItem, Avatar, Subheader, Icon } from 'react-native-material-ui'
import Header from '../common/Header'
import { getFriends } from '../../actions'
import Venturist from './Venturist'

import { venturistStyles as style } from './style'

class Venturists extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerRight: (
        <Button
          onPress={() => navigation.navigate('AllVenturists')}
          title="Search"
          color="white"
        />
      )
    }
  }
  componentDidMount() {
    this.props.getFriends()
  }
  render() {
    const { fetchingUsers, friendsList, select, navigation } = this.props
    return (
      <View style={{flex: 1}}>
        {fetchingUsers
          ? <View style={style.noUserContainer}>
              <ActivityIndicator size="large" />
            </View>
          : <View style={{flex: 1}}>
              {friendsList.length > 0
                ? <ScrollView>
                    <FlatList
                      data={friendsList}
                      keyExtractor={() => uniqueId()}
                      renderItem={this.renderUser}
                      ListHeaderComponent={<Subheader style={{container: style.subheaderContainer, text: style.subheaderText}} text="Friends" />}
                    />
                  </ScrollView>
                : <TouchableOpacity onPress={() => navigation.navigate('AllVenturists')} style={style.noFriends}>
                    <Text style={style.noTxt}>You have no friends! Tap here to add friends to invite.</Text>
                  </TouchableOpacity>
              }
            </View>
        }
      </View>
    )
  }
  renderUser = data => {
    return !!data.item && <Venturist user={data.item} friend {...this.props} />
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
