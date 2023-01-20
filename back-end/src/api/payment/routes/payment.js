module.exports = {
  routes: [
    {
      method: "POST",
      path: "/payments",
      handler: "payment.handlePayment",
    },
    {
      method: "GET",
      path: "/order",
      handler: "order.handleOrder",
      // config: {
      //   auth: false,
      // },
    },
  ],
};
