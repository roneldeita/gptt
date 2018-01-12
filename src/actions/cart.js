export const addToCart = (item) => {
  console.log("the item is " + item);
  return {
    type: 'ADD_TO_CART',
    item
  };
}
