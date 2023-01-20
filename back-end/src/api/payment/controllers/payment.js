const stripe = require("stripe")(process.env.API_TOKEN_STRIPE_SECRET);

module.exports = {
  async handlePayment(ctx, next) {
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
        success_url: `${ctx.request.headers.origin}/order/sucess?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${ctx.request.headers.origin}`,
      });

      ctx.response.send(session);
    } catch (error) {
      ctx.response.status(500);
    }
  },
};
