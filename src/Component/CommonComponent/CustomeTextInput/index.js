import React,{useState} from 'react';
import { View, Text, TextInput,TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp,} from "react-native-responsive-screen";
import styles from './styles'

export default function index({type,placeholder,value,name,errorname,errorMsg,changeEvent}) {
  
const [seePassword, setSeePasswrod] = useState(true)
if(type=="password")
{
        return (
            <View style={styles.mainInputView}>
                    <View style={styles.passwordTextView}>
                       <TextInput style={styles.passwordTextInput} secureTextEntry={seePassword} placeholder={placeholder} value={value} onChangeText={(text)=>changeEvent(text,name,errorname)} />
                       <TouchableOpacity  style={{justifyContent:'center'}} onPress={()=>setSeePasswrod(!seePassword)}><Text style={{fontSize:hp('2.5%')}}>Show</Text></TouchableOpacity>
                    </View>
                    {errorMsg?
                    <Text style={{ fontFamily: 'WorkSans', fontSize: hp('2%'),fontWeight:'bold',color:'#FFFFFF',paddingTop:5 }}>{errorMsg}</Text>
                    :null
                    }
            </View>
        );
}
if(type=="number")
{
        return (
                <View style={styles.mainInputView}>
                                <View style={styles.normalTextView}>
                                <TextInput style={styles.nomalTextInput}  keyboardType = 'number-pad' placeholder={placeholder} value={value} onChangeText={(text)=>changeEvent(text,name,errorname)}/>
                                </View>
                                {errorMsg?
                                <Text style={{ fontFamily: 'WorkSans', fontSize: hp('2%'),fontWeight:'bold',color:'#FFFFFF',paddingTop:5 }}>{errorMsg}</Text>
                                :null
                                }
               </View>
        );
}

else{
        return (
            <View style={styles.mainInputView}>
                    <View style={styles.normalTextView}>
                    <TextInput style={styles.nomalTextInput} placeholder={placeholder} value={value} onChangeText={(text)=>changeEvent(text,name,errorname)}/>
                    </View>
                    {errorMsg?
                    <Text style={{ fontFamily: 'WorkSans', fontSize: hp('2%'),fontWeight:'bold',color:'#FFFFFF',paddingTop:5 }}>{errorMsg}</Text>
                    :null
                    }
            </View>
        );
}

}