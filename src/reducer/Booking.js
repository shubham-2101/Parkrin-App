const Booking = (state =null,action)=>{
    switch(action.type)
    {
        case 'SET_BOOKING':
          return action.payload
                 
        case 'SHOW_BOOKING':
           return state  
        default:
         return state  
    }


}

export default Booking;