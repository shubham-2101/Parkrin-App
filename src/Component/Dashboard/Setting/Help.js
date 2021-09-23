import React from 'react';
import { Text, StyleSheet,View ,TouchableOpacity} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Help = (props) => {



  const logOut=async()=>{
    try{
         await AsyncStorage.removeItem("parkrin_token");
         props.navigation.reset({
          index: 1,
          routes: [{ name: "Account" }],
        });
    }
    catch(e){

    }
  }
  return (
    <View style={{flex:1,backgroundColor:'#222628',padding:20}}>
       <Text style={styles.head}>F.A.Q</Text>
      <Text style={styles.text}>Topics</Text>
      <Text style={styles.text}>Signing up</Text>
      <Text style={styles.text}>Contacting us</Text>
      <Text style={styles.text}>Spot not available.</Text>
      <Text style={styles.text}>Location not as described</Text>
      <Text style={styles.text}>Cant get a hold of host</Text>
      <Text style={styles.text}>Chat</Text>
      <TouchableOpacity onPress={()=>logOut()}>
      <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  head: {
    color: '#FFE166',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  text: {
    paddingBottom: 20,
    color: 'white',
    fontSize: 16,
  },
});
