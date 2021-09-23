//import all the components we are going to use.

import AsyncStorage from "@react-native-async-storage/async-storage";

const URL = {
  base_url: 'https://parkrin.evamp.in/api',
 // base_url: "http://192.168.43.173:3333/api",
};

class ApiUrl {
  async getDataUsingGet(subUrl,navigation) {
    let token = "";
    try {
      token = JSON.parse(await AsyncStorage.getItem("parkrin_token"));
    } catch (e) {
      console.log(e);
    }

    console.log(token);
    try {
      const response = await fetch(URL.base_url + subUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      const json = await response.json();
      const statusCode = response.status;
      
      if(statusCode==401){
        navigation.reset({
          index: 1,
          routes: [{ name: "Account" }],
        });
        return { log: false, error: "Access denied" };
      }
      else{
        return { log: true, response: json };
      }
    } catch (e) {
      return { log: false, response: e };
    }
  }

  async getDataUsingPost(subUrl, params,navigation) {
    let token = "";
    try {
       token = JSON.parse(await AsyncStorage.getItem("parkrin_token"));
    } catch (e) {}
    console.log(token);
    console.log(params);
    try {
      const response = await fetch(URL.base_url + subUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(params),
      });
      const json = await response.json();
      const statusCode = response.status;
      
      if(statusCode==401){
        navigation.reset({
          index: 1,
          routes: [{ name: "Account" }],
        });
        return { log: false, error: "Access denied" };
      }
      else{
        return { log: true, response: json,statusCode };
      }
      
    } catch (e) {
      return { log: false, response: e };
    }
  }

  async postFile(subUrl, params) {
    try {
      const response = await fetch(URL.base_url + subUrl, {
        method: "POST",

        body: params,
        headers: {
          // 'Accept': 'application/json',
          "Content-Type": "multipart/form-data",
        },
      });

      const json = await response.json();

      return { log: true, response: json };
    } catch (e) {
      console.log(e);

      return { log: false, response: e };
    }
  }
}
const Api = new ApiUrl();

export default Api;
