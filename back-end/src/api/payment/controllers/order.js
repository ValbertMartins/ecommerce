const stripe = require("stripe")(process.env.API_TOKEN_STRIPE_SECRET);

module.exports = {
  async handleOrder(ctx, next) {
    const sessionId = ctx.query.session_id;
    console.log(sessionId);
    const order = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items"],
    });

    const { customer_details, status, amount_total, line_items } = order;
    console.log(order);
    ctx.response.send({ customer_details, status, amount_total, line_items });
  },
};
