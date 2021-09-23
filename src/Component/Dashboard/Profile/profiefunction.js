import * as ImagePicker from 'expo-image-picker';
import {Alert,Platform} from "react-native";
import Api from '../../../Utils/Api'
import {API_URL} from '../../../Utils/Api_url'



export async function selectImage(thisObj){
 
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
        showAlert('Sorry, we need camera roll permissions to make this work!');
    }

    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        thisObj.setState({...thisObj.state,imageData:result.uri});
      }


}



export async function uploadImage(thisObj){
    thisObj.setState({isLoading: true});
    let fileName =
      Math.random().toString(36).toUpperCase().substr(2, 10) + '.png';

    let photo = {
      uri:Platform.OS == 'ios'? thisObj.state.imageData.replace('file://', '/private/'): thisObj.state.imageData,
      name: fileName,
      type: 'image/jpeg',
    };
    
    let data = new FormData();
    data.append('fileName', fileName);
    data.append('file', photo);
    const responsedata = await Api.postFile(API_URL.upload, data);
    console.log(responsedata);
    if (!responsedata.log) {
     
       
        showAlert('Profile picture not uloaded !');
        return
    }
    let user = thisObj.props.user[0];
    user.user_image = responsedata.response.file_url;
    thisObj.props.addUser(user);
    thisObj.setState({...thisObj.state,imageData:null,isLoading: false,
        user:{...thisObj.state.user,user_image:responsedata.response.file_url}});
    
}


export async function updateProfile(thisObj){
    thisObj.setState({isLoading:true})
    const responsedata = await Api.getDataUsingPost(API_URL.updateUser,thisObj.state.user,thisObj.props.navigation);
     console.log(responsedata)
    if(!responsedata.log || !responsedata.response.success)
    {
        showAlert(responsedata.response.error.error) 
        thisObj.setState({isLoading:false})
        return
    }
    thisObj.props.addUser(responsedata.response.data.user)
    thisObj.props.navigation.navigate('ShowProfile')
  
  }  




export default function showAlert(msg){
    Alert.alert(
      "Parkrin",
       msg,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }