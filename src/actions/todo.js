export const addTodo = (item) => {
  // console.log(item)
  return {
    type: 'ADD_TODO',
    item
  };
}

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}


export const todoDisplay = (filter) => {
  return {
    type:'SET_VISIBILITY_FILTER',
    filter
  }
}
