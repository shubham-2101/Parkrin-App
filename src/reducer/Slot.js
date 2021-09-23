const Slot = (state = [], action) => {

  switch (action.type) {
    case 'SET_SLOT':
      return [action.payload]

    case 'SHOW_SLOT':
      return state
    default:
      return state
  }

}
export default Slot;