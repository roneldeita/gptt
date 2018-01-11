export const addToCart = (item) => {
  console.log("the item is " + item);
  return {
    type: 'ADD',
    item
  };
}
