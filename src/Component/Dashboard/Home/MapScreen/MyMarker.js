import * as React from "react";

import MapView from "react-native-maps";
import styles from "./styles";
import { Text, View } from "react-native";



export default MyMarker = ({thisObj}) => {
    return thisObj.state.spotList.map((item) => (
      <MapView.Marker
        key={item.id}
        coordinate={{
          latitude: item.latitute,
          longitude: item.longitute,
        }}
        title={item.marker}
        description="Some description"
      >
        <View style={styles.marker}>
          <Text style={styles.markerText}>{item.spot_name.charAt(0)}</Text>
        </View>
      </MapView.Marker>
    ));
  };