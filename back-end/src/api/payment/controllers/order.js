const stripe = require("stripe")(process.env.API_TOKEN_STRIPE_SECRET);

module.exports = {
  async handleOrder(ctx, next) {
    ctx.response.send("foo");
  },
};
