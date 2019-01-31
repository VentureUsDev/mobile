import React from 'react'
import { connect } from 'react-redux'
import { ListItem, Avatar, Subheader, Icon } from 'react-native-material-ui'
import Header from '../common/Header'
import { getFriends } from '../../actions'
import Venturist from './Venturist'
import { LinearGradient } from 'expo'

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
                : <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('AllVenturists')} style={style.noFriends}>
                      <LinearGradient
                        colors={['#0065ff', '#21c0ff']}
                        style={style.noFriendsBtn}
                      >
                        <Image style={{ height: 70, width: 70 }} source={require('../../assets/clearlogo.png')} />
                        <Text style={style.noTxt}>FIND FRIENDS</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
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
