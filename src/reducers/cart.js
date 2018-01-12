export default(state = [], payload) => {
  switch(payload.type){
    case 'ADD_TO_CART':
      return [...state, payload.item];
    default:
      return state;
  }
}
