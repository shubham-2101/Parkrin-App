const Location = (state ={},action)=>{
    switch(action.type)
    {

     
        case 'SET_LOCATION':
          return action.payload 
                 
        case 'ShOw_LOCATION':
           return state  
        default:
         return state  
    }


}

export default Location;