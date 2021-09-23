import * as React from "react";
import MapView from "react-native-maps";
import { Text, View, AppState } from "react-native";
import { connect } from "react-redux";
import { mapDarkStyle } from "../mapDarkStyle";
import BottomSheet from "../BottomSheet";
import BottomLine from "../../Modules/BottomLine";
import SlotComponent from "./SlotComponent";
import SearchView from "../TopView/SearchView";
import RouteTimeDistance from "../TopView/RouteTimeDistance";
import LoadingModal from "../../../../Utils/LoadingModal";
import SpotInfo from "../SpotInfo";
import styles from "./styles";
import SourceDestinationMarker from "./SourceDestinationMarker";
import MyMarker from "./MyMarker";
import {
  checkLocationPermission,
  bookSlot,
  handleAppStateChange,
  backBottom,
} from "./localFunction";
class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      botomSheetType: "SpotList",
      bottomSheetTitle: "Parking Nearby",
      selectedSlot: null,
      active: false,
      mapRegion: {
        latitude: 20.5937,
        longitude: 78.9629,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      origin: { latitude: 0.0, longitude: 0.0 },
      destination: null,
      isLoading: true,
      searchDistance: 1000,
      spotList: [],
      distanceTime: { distance: 0, duration: 0 },
     

    };
    this.mapView = null;
    this._interval;

  }

  componentDidMount() {
    AppState.addEventListener("change", this.handleAppStateChange);
    checkLocationPermission(this);
    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      checkLocationPermission(this);
    });
  }
  componentWillUnmount() {
    AppState.removeEventListener("change", this.handleAppStateChange);
  }

 handleAppStateChange = async (nextAppState) => {
   if(this.state.origin.latitude==0.0 && this.state.origin.longitude==0.0 ){
    checkLocationPermission(this);
   }
 
  };
  bookEvent = (spot) => {

    console.log(this.props.user)
   if(this.props.user.cardInfo){
    bookSlot(this, spot);
   }
    else{
      this.props.navigation.navigate('Card')
    }
  };

  backEvent = (heading) => {
    backBottom(this, heading);
  };

  MySubComponent = () => {
    switch (this.state.botomSheetType) {
      case "SpotList":
        return (
          <SlotComponent
            items={this.state.spotList}
            bookEvent={this.bookEvent}
          />
        );
        break;
      case "SpotInfo":
        return <SpotInfo thatObj={this} />;
        break;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.destination == null ? (
          <SearchView />
        ) : (
          <RouteTimeDistance distanceTime={this.state.distanceTime} />
        )}

        <MapView
          ref={(c) => (this.mapView = c)}
          style={styles.map}
          showsUserLocation={true}
          followUserLocation={true}
          zoomEnabled={true}
          pitchEnabled={true}
          showsCompass={true}
          showsBuildings={true}
          showsTraffic={false}
          showsIndoors={true}
          customMapStyle={mapDarkStyle}
          region={this.state.mapRegion}
        >
          {this.state.destination != null ? (
            <SourceDestinationMarker thisObj={this} />
          ) : (
            <MyMarker thisObj={this} />
          )}
        </MapView>

        <BottomSheet
          headerTiltle={this.state.bottomSheetTitle}
          child={this.MySubComponent()}
          type={this.state.botomSheetType}
          backEvent={this.backEvent}
        />

        <BottomLine />
        <LoadingModal visible={this.state.isLoading} />
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    booking:state.Booking,
    user:state.UserInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSlot: (slot) =>
      dispatch({
        type: "SET_SLOT",
        payload: slot,
      }),
    addBooking: (booking) =>
      dispatch({
        type: "SET_BOOKING",
        payload: booking,
      }),  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
