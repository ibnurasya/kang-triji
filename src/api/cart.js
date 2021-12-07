import httpReq from "./http";

const cartAPI = {
  getCartList: (userId, token) => {
    return httpReq(
      `api/cart/search`,
      "POST",
      {
        filters: [{ field: "user_id", operator: "=", value: userId }],
      },
      { Authorization: `Bearer ${token}` }
    );
  },
  postNewCart: (produkId, userId, token) => {
    return httpReq(
      `api/cart`,
      "POST",
      {
        produk_id: produkId,
        user_id: userId,
      },
      { Authorization: `Bearer ${token}` }
    );
  },
  deleteCart: (cartId, token) => {
    return httpReq(
      `api/cart/${cartId}`,
      "DELETE",
      {},
      { Authorization: `Bearer ${token}` }
    );
  },
};

export default cartAPI;
