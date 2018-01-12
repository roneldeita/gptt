let idx = 0;
export default(state = [], payload) => {
  switch(payload.type){
    case 'ADD_TODO':
      return [...state,
        { id: idx++, title: payload.item.title, done: payload.item.done }
      ];
    case 'REMOVE_TODO':
      return state.filter(item => item.id !== payload.id)
    case 'TOGGLE_TODO':
      const test = state.map(item => {
        if(item.id === payload.id){
          return {...item, done: !item.done  }
        }
        return item
      })
      return test
    default:
      return state;
  }
}
