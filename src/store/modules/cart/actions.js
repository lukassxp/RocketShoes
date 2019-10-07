export function addToCartRequest(productId) {
  return {
    type: '@cart/ADD_REQUEST',
    productId,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function removeFromCart(productId) {
  return {
    type: '@cart/REMOVE',
    productId,
  };
}

export function updateAmount(productId, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    productId,
    amount,
  };
}
