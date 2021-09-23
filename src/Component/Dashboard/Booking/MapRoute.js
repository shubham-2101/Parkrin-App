import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Animated } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MapViewDirections from "react-native-maps-directions";
import { connect } from "react-redux";
import * as Location from "expo-location";
import { mapDarkStyle } from "./mapDarkStyle";
import LoadingModal from '../../../Utils/LoadingModal'
import {checkLocationPermission} from './bookingfuction'

import { Ionicons } from '@expo/vector-icons'; 


const GOOGLE_MAPS_APIKEY = "AIzaSyDy4YDcrHfTyCRV_IVjlBj8TvIkNLK3hVo";



class MapRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapRegion: {latitude: 20.5937,longitude: 78.9629,latitudeDelta: 0.015, longitudeDelta: 0.0121},
      origin: { latitude: 0.0, longitude: 0.0 },
      destination:null,
      isLoading: true,
    };
  }

 
  componentDidMount() {
    checkLocationPermission(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <Ionicons name="arrow-back-circle-sharp" size={45} color="#fff"   onPress={()=>this.props.navigation.goBack()}/>
        </View>
        <MapView
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
        
            <MapView.Marker
             
              coordinate={this.state.origin}
              title="My Marker"
              description="Some description"
            >
              <View style={styles.marker}>
                <Text style={styles.markerText}>S</Text>
              </View>
            </MapView.Marker>
            {this.state.destination!=null?
                    <MapView.Marker
                    coordinate={this.state.destination}
                    title={this.props.booking[0].spot_name}
                    description={this.props.booking[0].address}
                    >
                    <View style={styles.destinationmarker}>
                        <Text style={styles.markerText}>D</Text>
                    </View>
                    </MapView.Marker>
            :null
            }
            {this.state.destination!=null?
                    <MapViewDirections
                        mode="DRIVING"
                        origin={this.state.origin}
                        destination={this.state.destination}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={3}
                        strokeColor="#4d79ff"
                        />
                      :null}  
          
        </MapView>
        <LoadingModal visible={this.state.isLoading} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      booking:state.Booking
    };
  };
  


export default connect(mapStateToProps, null)(MapRoute);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222628",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  marker: {
    height: hp("4%"),
    width: hp("4%"),
    backgroundColor: "blue",
    borderRadius: hp("2%"),
    alignItems: "center",
    justifyContent: "center",
  },
  markerText: {
    color: "#fff",
    fontSize: hp("2.2%"),
    fontWeight: "bold",
  },
  destinationmarker:{
    height: hp("4%"),
    width: hp("4%"),
    backgroundColor: "#FF9F09",
    borderRadius: hp("2%"),
    alignItems: "center",
    justifyContent: "center",
  },
 
  topView: {
    height: hp("13%"),
    width: wp("100%"),
    position: "absolute",
    top: hp("8%"),
    right: 0,
    left: wp('4%'),
    zIndex: 1000,
    
  },
 
});
