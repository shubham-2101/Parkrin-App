import React, {useState,useEffect} from 'react';
import { Text, StyleSheet,View ,ActivityIndicator,ScrollView} from 'react-native';
import CustomeTextInput from '../../CommonComponent/CustomeTextInput'
import ButtonView from "../../CommonComponent/ButtonView";
import {createUserCard} from './localFunction'
import {connect} from 'react-redux';

const index = (props) => {



    const [formData,setFormData]=useState({
        "card_name":"",
        "card_number":"4242 4242 4242 4242",
        "cvv_number":"",
        "card_holder":"",
        "expiry_month":"",
        "expiry_year":""
    })

    const [errorData,setErrorData]=useState({})
    const [loading,setLoading]=useState(false)


    // useEffect(() => {
    //     if(props.user.cardInfo){
    //         setFormData((prevState)=>({
    //             ...prevState,
    //             "card_name":"",
    //             "card_number":"4242 4242 4242 4242",
    //             "cvv_number":"",
    //             "card_holder":"",
    //             "expiry_month":"",
    //             "expiry_year":""
    //           }))
    //     }
    //   });

      

    const onChange=(text,name,errorname)=>{
        setFormData((prevState)=>({
            ...prevState,
            [name]:text,
          }))
          setErrorData((prevState)=>({
            ...prevState,
            errorname:undefined,
          }))
    }
     
  return (
    
    <View style={{flex:1,backgroundColor:'#222628',padding:20,alignItems:'center'}}>
    <ScrollView>
            <CustomeTextInput  type={"text"} placeholder={"Card Name"} value={formData.card_name} name={'card_name'}  errorname={"card_name"} errorMsg={errorData.card_name} changeEvent={onChange}/>
            <CustomeTextInput  type={"number"} placeholder={"Card Number"} value={formData.card_number} name={'card_number'}  errorname={"card_number"} errorMsg={errorData.card_number} changeEvent={onChange}/>
            <CustomeTextInput  type={"number"} placeholder={"CVV No."} value={formData.cvv_number} name={'cvv_number'}  errorname={"cvv_number"} errorMsg={errorData.cvv_number} changeEvent={onChange}/>
            <CustomeTextInput  type={"text"} placeholder={"Card Holder Name"} value={formData.card_holder} name={'card_holder'}  errorname={"card_holder"} errorMsg={errorData.card_holder} changeEvent={onChange}/>
            <CustomeTextInput  type={"number"} placeholder={"Expiry month"} value={formData.expiry_month} name={'expiry_month'}  errorname={"expiry_month"} errorMsg={errorData.expiry_month} changeEvent={onChange}/>
            <CustomeTextInput  type={"number"} placeholder={"Expiry year"} value={formData.expiry_year} name={'expiry_year'}  errorname={"expiry_year"} errorMsg={errorData.expiry_year} changeEvent={onChange}/>
            {loading?
                (<ActivityIndicator style={{paddingTop:30}} size="large" color="#fff"/>)
                :
                (<ButtonView
                        buttonText={"submit"}
                        eventFunction={() => createUserCard(formData,setLoading,setErrorData,props.navigation,props)}
                        buttonColor={"#3F2E00"}
                        
                        />)
            }
        </ScrollView>
    </View>
  
  );
};


const mapStateToProps = (state) => {
    return {
     
      user:state.UserInfo
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
      addUser: (user) =>
        dispatch({
          type: 'SET_USER',
          payload: user,
        }),
      
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(index);

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
