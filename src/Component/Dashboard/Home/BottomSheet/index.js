import React, { Component } from "react";
import { Animated, StyleSheet, Text, View, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import {
  PanGestureHandler,
  NativeViewGestureHandler,
  State,
  TapGestureHandler,
  TouchableOpacity,
} from "react-native-gesture-handler";

const HEADER_HEIGHT = 50;
const windowHeight = Dimensions.get("window").height;
const SNAP_POINTS_FROM_TOP = [hp("54%"), windowHeight, windowHeight * 0.82];

export default class index extends Component {
  masterdrawer = React.createRef();
  drawer = React.createRef();
  drawerheader = React.createRef();
  scroll = React.createRef();
  constructor(props) {
    super(props);
    const START = SNAP_POINTS_FROM_TOP[0];
    const END = SNAP_POINTS_FROM_TOP[SNAP_POINTS_FROM_TOP.length - 1];

    this.state = {
      lastSnap: END,
    };

    this._lastScrollYValue = 0;
    this._lastScrollY = new Animated.Value(0);
    this._onRegisterLastScroll = Animated.event(
      [{ nativeEvent: { contentOffset: { y: this._lastScrollY } } }],
      { useNativeDriver: true }
    );
    this._lastScrollY.addListener(({ value }) => {
      this._lastScrollYValue = value;
    });

    this._dragY = new Animated.Value(0);
    this._onGestureEvent = Animated.event(
      [{ nativeEvent: { translationY: this._dragY } }],
      { useNativeDriver: true }
    );

    this._reverseLastScrollY = Animated.multiply(
      new Animated.Value(-1),
      this._lastScrollY
    );

    this._translateYOffset = new Animated.Value(END);
    this._translateY = Animated.add(
      this._translateYOffset,
      Animated.add(this._dragY, this._reverseLastScrollY)
    ).interpolate({
      inputRange: [START, END],
      outputRange: [START, END],
      extrapolate: "clamp",
    });
  }
  _onHeaderHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.oldState === State.BEGAN) {
      this._lastScrollY.setValue(0);
    }
    this._onHandlerStateChange({ nativeEvent });
  };
  _onHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.oldState === State.ACTIVE) {
      let { velocityY, translationY } = nativeEvent;
      translationY -= this._lastScrollYValue;
      const dragToss = 0.05;
      const endOffsetY =
        this.state.lastSnap + translationY + dragToss * velocityY;

      let destSnapPoint = SNAP_POINTS_FROM_TOP[0];
      for (let i = 0; i < SNAP_POINTS_FROM_TOP.length; i++) {
        const snapPoint = SNAP_POINTS_FROM_TOP[i];
        const distFromSnap = Math.abs(snapPoint - endOffsetY);
        if (distFromSnap < Math.abs(destSnapPoint - endOffsetY)) {
          destSnapPoint = snapPoint;
        }
      }
      this.setState({ lastSnap: destSnapPoint });
      this._translateYOffset.extractOffset();
      this._translateYOffset.setValue(translationY);
      this._translateYOffset.flattenOffset();
      this._dragY.setValue(0);
      Animated.spring(this._translateYOffset, {
        velocity: velocityY,
        tension: 68,
        friction: 12,
        toValue: destSnapPoint,
        useNativeDriver: true,
      }).start();
    }
  };
  render() {
    return (
      <TapGestureHandler
        maxDurationMs={100000}
        ref={this.masterdrawer}
        maxDeltaY={this.state.lastSnap - SNAP_POINTS_FROM_TOP[0]}
      >
        <View style={StyleSheet.absoluteFillObject} pointerEvents="box-none">
          <Animated.View
            style={[
              StyleSheet.absoluteFillObject,
              {
                transform: [{ translateY: this._translateY }],
              },
            ]}
          >
            <PanGestureHandler
              ref={this.drawerheader}
              simultaneousHandlers={[this.scroll, this.masterdrawer]}
              shouldCancelWhenOutside={false}
              onGestureEvent={this._onGestureEvent}
              onHandlerStateChange={this._onHeaderHandlerStateChange}
            >
              <Animated.View>
                {/* <TouchableOpacity
                  style={styles.fabContainer}
                  onPress={()=>this.props.fabEvent } >
                  <View style={styles.fabSub}>
                    <Text style={styles.fabText}>Schedule</Text>
                    <AntDesign
                      name="calendar"
                      size={15}
                      color="#FF9F09"
                      style={styles.fabIcon}
                    />
                  </View>
                </TouchableOpacity> */}

                <View style={styles.header}>
                  <View style={styles.headerTop} />
                  {this.props.type == "SpotInfo" ? (
                    <Ionicons
                      name="arrow-back"
                      size={24}
                      color="#fff"
                      style={{
                        position: "absolute",
                        top: hp("2%"),
                        left: wp("5%"),
                      }}
                      onPress={() => this.props.backEvent(this.props.type)}
                    />
                  ) : null}
                  <Text style={styles.headingTitle}>
                    {this.props.headerTiltle.toUpperCase()}
                  </Text>
                </View>
              </Animated.View>
            </PanGestureHandler>
            <PanGestureHandler
              ref={this.drawer}
              simultaneousHandlers={[this.scroll, this.masterdrawer]}
              shouldCancelWhenOutside={false}
              onGestureEvent={this._onGestureEvent}
              onHandlerStateChange={this._onHandlerStateChange}
            >
              <Animated.View style={styles.container}>
                <NativeViewGestureHandler
                  ref={this.scroll}
                  waitFor={this.masterdrawer}
                  simultaneousHandlers={this.drawer}
                >
                  <Animated.ScrollView
                    style={[styles.scrollView]}
                    horizontal={this.props.type == "SpotList"}
                    bounces={false}
                    onScrollBeginDrag={this._onRegisterLastScroll}
                    scrollEventThrottle={1}
                  >
                    {this.props.child}
                  </Animated.ScrollView>
                </NativeViewGestureHandler>
              </Animated.View>
            </PanGestureHandler>
            <PanGestureHandler>
              <Animated.View style={styles.header}>
                <View style={styles.bottomView} />
              </Animated.View>
            </PanGestureHandler>
          </Animated.View>
        </View>
      </TapGestureHandler>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222628",
  },
  header: {
    flexDirection: "column",
    height: hp("8%"),
    backgroundColor: "#222628",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headingTitle: {
    color: "#fff",
    fontSize: hp("2.5%"),
    paddingTop: hp("1%"),
  },
  headerTop: {
    width: wp("10%"),
    height: 1,
    backgroundColor: "#fff",
    position: "absolute",
    top: hp("2%"),
  },
  fabContainer: {
    backgroundColor: "#222628",
    width: wp("30%"),
    height: hp("6%"),
    borderWidth: 1,
    borderColor: "#FF9F09",
    alignSelf: "flex-end",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("2%"),
    marginRight: wp("5%"),
  },
  fabText: {
    color: "#FF9F09",
    fontSize: hp("2.2%"),
  },
  fabSub: {
    flexDirection: "row",
  },
  fabIcon: {
    paddingLeft: wp("2%"),
  },
});
