const stripe = require("stripe")(process.env.API_TOKEN_STRIPE_SECRET);

module.exports = {
  async handlePayment(ctx, next) {
    console.log(ctx.request.headers);
    const productList = ctx.request.body.map((item) => {
      return {
        price_data: {
          currency: "brl",
          product_data: {
            name: item.attributes.name,
          },
          unit_amount: item.attributes.price * 100,
        },
        quantity: item.quantity,
      };
    });

    try {
      const session = await stripe.checkout.sessions.create({
        line_items: productList,
        mode: "payment",
        success_url: `${ctx.request.headers.origin}`,
        cancel_url: `${ctx.request.headers.origin}`,
      });
      ctx.response.send(session);
    } catch (error) {
      ctx.response.send(error);
    }
  },
};
