export default(state = 'SHOW_ALL', payload) => {
  switch(payload.type){
    case 'SET_VISIBILITY_FILTER':
      return payload.filter
    default:
      return state;
  }
}
