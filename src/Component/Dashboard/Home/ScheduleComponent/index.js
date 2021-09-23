import * as React from "react";
import { StyleSheet, Text, View, Dimensions, Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { selectDate,hourAction,scheduleSubmit } from "../homeScreenfunction";
import {connect} from 'react-redux';
import moment from "moment";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from "react-native-responsive-screen";

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: moment(),
      startTime: moment(),
      endTime:  moment(new Date()).add(1, "hours"),
      hourCount: 1,
      daySelect: 0,
      showTimer:false,
      timer: null,
      counter: '00',
      miliseconds: '00'
    };
    this.start = this.start.bind(this);
  }

  getDate = (countDate) => {
    let d = new Date();
    return moment(d).add(countDate, "days").format("Do MMMM");
  };


  start() {
    var self = this;
    let timer = setInterval(() => {
        var num = (Number(this.state.miliseconds) + 1).toString(),
            count = this.state.counter;

        if( Number(this.state.miliseconds) == 99 ) {
            count = (Number(this.state.counter) + 1).toString();
            num = '00';
        }

        self.setState({
            counter: count.length == 1 ? '0'+count : count,
            miliseconds: num.length == 1 ? '0'+num : num
        });
    }, 1000);
    this.setState({timer});
}


  render() {
    return (
     
      <View style={styles.container}>
         {!this.state.showTimer?
         <>
        
        <Text
          style={styles.timeSlot}
        >{`${this.state.selectedDate.format(" ddd MMMM Do")} ${this.state.startTime.format("h:mm a")} - ${this.state.endTime.format("h:mm a")} ( ${this.state.hourCount} hours)  `}</Text>

        <View style={[styles.selectDateView, { backgroundColor: "#000000" }]}>
          <View style={styles.TabView}>
            <TouchableOpacity
              style={
                this.state.daySelect == 0
                  ? styles.activeTab
                  : styles.inactiveTab
              }
              onPress={() => selectDate(this, 0)}
            >
              <Text style={styles.dateText}>
                {`Today, ${this.getDate(0)}`}{" "}
              </Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.TabView}>
            <TouchableOpacity
              style={
                this.state.daySelect == 1
                  ? styles.activeTab
                  : styles.inactiveTab
              }
              onPress={() => selectDate(this, 1)}
            >
              <Text style={styles.dateText}>
                {`Tomorrow, ${this.getDate(1)}`}{" "}
              </Text>
            </TouchableOpacity>
          </View> */}
        </View>
        <View style={styles.selectDateView}>
          <View style={styles.timeTabView}>
            <Text style={styles.dateText}>{`Start Date`} </Text>
            <Text style={styles.dateText}>{`${this.state.startTime.format("h:mm a")}`} </Text>
          </View>
         
          <View style={[styles.timeTabView,{flexDirection:'row'}]}>
            <TouchableOpacity  style={styles.actionButton}onPress={() =>hourAction(this,"sub")} >
              <Text style={styles.actionText}>-</Text>  
            </TouchableOpacity>
            <View style={styles.endView}>
                    <Text style={styles.dateText}>{`Start Date`} </Text>
                    <Text style={styles.dateText}>{`${this.state.endTime.format("h:mm a")}`} </Text>
             </View>
            <TouchableOpacity  style={styles.actionButton}onPress={() =>hourAction(this,"add")}>
              <Text style={styles.actionText}>+</Text>
              
            </TouchableOpacity>
          </View>
      
      
      
      
        </View>
       
       
        <TouchableOpacity style={styles.bottonView} onPress={()=>scheduleSubmit(this)}>
          <Text style={styles.bottonText}>Done</Text>
        </TouchableOpacity>
      
        </>
        :
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:heightPercentageToDP('7%'),color:'#fff'}}>{this.state.counter}:{this.state.miliseconds}</Text>
          <Text style={{fontSize:heightPercentageToDP('3%'),color:'#fff'}}>MM:SS</Text>
          </View>
        }
      </View>
  
    );
  }
}

const mapStateToProps = (state) => {
  return {
    slot: state.Slot,
 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSlot: (slot) =>
      dispatch({
        type: 'SET_SLOT',
        payload: slot,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);

const styles = StyleSheet.create({
  container: {
    height: hp("26%"),
    justifyContent: "center",
    alignItems: "center",
  },
  timeSlot: {
    color: "#fff",
    textAlign: "center",
    fontSize: hp("2.2%"),
  },
  selectDateView: {
    flexDirection: "row",
    width: wp("70%"),
    height: hp("6%"),

    marginTop: hp("1%"),
    justifyContent: "space-between",
    borderRadius: 10,
  },
  TabView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timeTabView: {
    width: wp("30%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    borderRadius:10,
    paddingVertical:hp('1%')
  },
  dateText: {
    color: "#fff",
  },
  activeTab: {
    backgroundColor: "#3F2E00",
    width: wp("32%"),
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: hp("1%"),
    borderRadius: 5,
  },
  bottonText: {
    fontSize: hp("2.2%"),
    color: "#fff",
  },
  bottonView: {
    width: wp("20%"),
    backgroundColor: "#3F2E00",
    paddingVertical: hp("1%"),
    borderRadius: 10,
    alignItems: "center",
    marginTop: hp("2%"),
    marginBottom: hp("1%"),
  },
  actionButton:{
      alignSelf:'flex-start',
      width:wp('8%'),
      alignItems:'center'
      
  },
  actionText:{
      fontSize:hp('3%'),
      color:'#fff'
  },
  endView:{
      width:wp('15%'),
      alignItems:'center'
  }
});
