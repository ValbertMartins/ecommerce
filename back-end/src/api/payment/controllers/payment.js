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
        adjustable_quantity: { enabled: true, minimum: 1, maximum: 10 },
        quantity: item.quantity,
      };
    });

    try {
      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: {
          allowed_countries: ["BR"],
        },
        shipping_options: [
          {
            shipping_rate_data: {
              type: "fixed_amount",
              fixed_amount: { amount: 0, currency: "brl" },
              display_name: "Correios",
              delivery_estimate: {
                minimum: { unit: "business_day", value: 5 },
                maximum: { unit: "business_day", value: 7 },
              },
            },
          },
          {
            shipping_rate_data: {
              type: "fixed_amount",
              fixed_amount: { amount: 35 * 100, currency: "brl" },
              display_name: "Sedex",
              delivery_estimate: {
                minimum: { unit: "business_day", value: 1 },
                maximum: { unit: "business_day", value: 3 },
              },
            },
          },
        ],
        line_items: productList,
        mode: "payment",
        success_url: `${ctx.request.headers.origin}/order/sucess?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${ctx.request.headers.origin}`,
      });

      ctx.response.send(session);
    } catch (error) {
      // ctx.response.status(500);
    }
  },
};
