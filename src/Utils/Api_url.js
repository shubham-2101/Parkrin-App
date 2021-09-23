// ##############################
// // // Tasks for TasksCard - see Dashboard view
// #############################

var API_URL = {
 
//acccount api
  registerUser:"/app/registerUser",
  signinUser:"/app/signinUser",
  authMe:"/app/authMe",
  updateUser:"/app/updateUser",

  getSpotList:"/app/getSpotList",
  getSpotListById:"/app/getSpotListById",
  bookSpot:"/app/bookSpot",
  paySpot:"/app/paySpot",
  addSpotByUser:"/app/addSpotByUser",


  getbookingList:"/app/getbookingList",
  addUserCard:"/app/addUserCard",



  upload: '/file/upload',
  download: '/file/download',

};

var PHOTO = {
  url: 'https://parkrin.evamp.in/api/file/download/',
  //url: 'http://192.168.43.173:3333/api/file/download/'
};

module.exports = {
  API_URL,
  PHOTO,
};
