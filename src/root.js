import { Provider } from 'react-redux'
import { AsyncStorage, StatusBar } from 'react-native'

import configureStore from './config/store'
import AppContainer from './components'

import { ThemeProvider } from 'react-native-material-ui'

const store = configureStore()
export default class ConnectedApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <StatusBar
            backgroundColor="white"
            barStyle="dark-content"
          />
          <AppContainer />
        </ThemeProvider>
      </Provider>
    )
  }
}
