module.exports = {
  routes: [
    {
      method: "POST",
      path: "/payments",
      handler: "payment.handlePayment",
    },
  ],
};
