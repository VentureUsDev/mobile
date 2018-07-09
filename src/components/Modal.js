import { Icon } from 'react-native-material-ui'

export default class Modal extends Component {
  render() {
    const { goBack, state } = this.props.navigation
    console.log("navigation",this.props.navigation)
    const content = state.params ? state.params.content : <Text>Please pass a content object.</Text>
    return (
      <View style={style.modalContainer}>
        <TouchableOpacity style={style.close} onPress={() => goBack()}>
          <Icon
            name="close"
            size={25}
            color="black"
          />
        </TouchableOpacity>
        {content}
      </View>
    )
  }
}

const style = StyleSheet.create({
  modalContainer: {
    flex: 1,
    paddingTop: 25,
  },
  close: {
    flexDirection: 'row-reverse',
    margin: 10,
  }
})
