import * as React from "react";
import MapViewDirections from "react-native-maps-directions";
import MapView from "react-native-maps";
import styles from "./styles";
import { Text, View, Dimensions } from "react-native";
const GOOGLE_MAPS_APIKEY = "AIzaSyDy4YDcrHfTyCRV_IVjlBj8TvIkNLK3hVo";
const { width, height } = Dimensions.get("window");


export default  SourceDestinationMarker = ({thisObj}) => {
    return (
      <>
        <MapViewDirections
          mode="DRIVING"
          origin={thisObj.state.origin}
          destination={thisObj.state.destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          optimizeWaypoints={true}
          strokeColor="#FFDE6D"
          onStart={(params) => {
            console.log(
              `Started routing between "${params.origin}" and "${params.destination}"`
            );
          }}
          onReady={(result) => { 
            thisObj.setState({
              distanceTime: {
                distance: result.distance,
                duration: result.duration,
              },
            });
            // console.log(result);

            thisObj.mapView.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: width / 20,
                bottom: height / 20,
                left: width / 20,
                top: height / 20,
              },
            });
          }}
        />
        <MapView.Marker
          key={0}
          coordinate={{
            latitude: thisObj.state.destination.latitude,
            longitude: thisObj.state.destination.longitude,
          }}
          title={"Destination"}
          description="Destination"
        >
          <View style={styles.marker}>
            <Text style={styles.markerText}>{"D"}</Text>
          </View>
        </MapView.Marker>
      </>
    );
  };