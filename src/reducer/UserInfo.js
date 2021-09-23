const UserInfo = (state =null,action)=>{
    switch(action.type)
    {
        case 'SET_USER':
          return action.payload
                 
        case 'ShOW_USER':
           return state  
        default:
         return state  
    }


}

export default UserInfo;