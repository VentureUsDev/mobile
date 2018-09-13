import { connect } from 'react-redux'
import { MapView, Location, Permissions } from 'expo'
import { getVentureMarkers } from '../../actions'
import Header from '../common/Header'
import VentureMarker from './VentureMarker'
import { mapStyles as m } from './style'

const { width, height } = Dimensions.get('window')

class VentureMap extends Component {
  state = {
    region: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0922 * width / height,
    },
  }

  componentDidMount() {
    this.getLocationAsync()
    this.props.getVentureMarkers()
  }

  render() {
    const { ventureMarkers } = this.props
    return (
      <View style={m.outerContainer}>
        <View style={m.innerContainer}>
          <View
            style={StyleSheet.absoluteFill}
            contentContainerStyle={m.mapView}
          >
            <MapView
              style={m.map}
              scrollEnabled={true}
              zoomEnabled={true}
              pitchEnabled={true}
              rotateEnabled={true}
              region={this.state.region}
            >
              {ventureMarkers.map((marker, index) => (
                <VentureMarker
                  key={index}
                  markerData={marker}
                />
              ))}
            </MapView>
          </View>
        </View>
      </View>
    )
  }
  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      this.setState({
        region: {
          latitude: 0,
          longitude: 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0922 * width / height
        }
      })
    }

    let location = await Location.getCurrentPositionAsync({})
    const { coords: { latitude, longitude } } = location
    this.setState({
      region: {
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0922 * width / height
      }
    })
  }
}

const mapStateToProps = state => {
  const { ventureMap } = state
  return {
    ventureMarkers: ventureMap.ventureMarkers
  }
}

export default connect(mapStateToProps, { getVentureMarkers })(VentureMap)
