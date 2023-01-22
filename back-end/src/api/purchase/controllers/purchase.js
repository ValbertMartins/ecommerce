"use strict";

/**
 * purchase controller
 */
const jwt = require("jsonwebtoken");
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::purchase.purchase",
  ({ strapi }) => ({
    async find(ctx) {
      //decode token to extract id
      const token = ctx.request.headers.authorization.split(" ")[1];
      const verifiedJWT = jwt.verify(token, process.env.JWT_SECRET);

      const { data, meta } = await super.find(ctx);

      //filtering order of own user
      const ordersByUser = data.filter(
        (order) => order.attributes.user_id == verifiedJWT.id
      );

      return { ordersByUser, meta };
    },
    async create(ctx) {
      //decode token to extract id
      const token = ctx.request.headers.authorization.split(" ")[1];
      const verifiedJWT = jwt.verify(token, process.env.JWT_SECRET);

      //convert user_id to user id of token
      ctx.request.body.data.user_id = verifiedJWT.id;
      console.log(ctx.request.body);
      const response = await super.create(ctx);

      return { response };
    },
  })
);
