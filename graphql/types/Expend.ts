import { builder } from "../builder";

builder.prismaObject("Expend", {
  fields: (t) => ({
    id: t.exposeID("id"),
    createdAt: t.expose("createdAt", { type: "DateTime" }),
    updatedAt: t.expose("updatedAt", { type: "DateTime" }),
    price: t.exposeInt("price"),
    description: t.exposeString("description"),
    date: t.exposeString("date"),
    categoryId: t.exposeInt("categoryId"),
    payerId: t.exposeInt("payerId"),
    budgetId: t.exposeInt("budgetId"),
    paymentMethodId: t.exposeInt("paymentMethodId"),
    processed: t.exposeBoolean("processed"),
    Category: t.relation("category"),
    Payer: t.relation("payer"),
    Budget: t.relation("budget"),
    PaymentMethod: t.relation("paymentMethod"),
  }),
});

builder.queryField("expends", (t) =>
  t.prismaField({
    type: ["Expend"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.expend.findMany({ ...query, orderBy: { id: "asc" } }),
  })
);

builder.mutationField("createExpend", (t) =>
  t.prismaField({
    type: "Expend",
    args: {
      price: t.arg.int({ required: true }),
      description: t.arg.string({ required: true }),
      date: t.arg.string({ required: true }),
      categoryId: t.arg.int({ required: true }),
      payerId: t.arg.int({ required: true }),
      budgetId: t.arg.int({ required: true }),
      paymentMethodId: t.arg.int({ required: true }),
      processed: t.arg.boolean({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const {
        price,
        description,
        date,
        categoryId,
        payerId,
        budgetId,
        paymentMethodId,
        processed,
      } = args;

      return prisma.expend.create({
        ...query,
        data: {
          price,
          description,
          date,
          categoryId,
          payerId,
          budgetId,
          paymentMethodId,
          processed,
        },
      });
    },
  })
);

builder.mutationField("deleteExpend", (t) =>
  t.prismaField({
    type: "Expend",
    args: {
      id: t.arg.int({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { id } = args;

      return prisma.expend.delete({
        ...query,
        where: {
          id,
        },
      });
    },
  })
);

builder.mutationField("updateExpend", (t) =>
  t.prismaField({
    type: "Expend",
    args: {
      id: t.arg.int({ required: true }),
      // price: t.arg.int({ required: true }),
      description: t.arg.string({ required: true }),
      date: t.arg.string({ required: true }),
      // categoryId: t.arg.int({ required: true }),
      // payerId: t.arg.int({ required: true }),
      // budgetId: t.arg.int({ required: true }),
      // paymentMethodId: t.arg.int({ required: true }),
      // processed: t.arg.boolean({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const {
        id,
        // price,
        description,
        // date,
        // categoryId,
        // payerId,
        // budgetId,
        // paymentMethodId,
        // processed,
      } = args;

      return prisma.expend.update({
        ...query,
        where: {
          id,
        },
        data: {
          // price,
          description,
          // date,
          // categoryId,
          // payerId,
          // budgetId,
          // paymentMethodId,
          // processed,
        },
      });
    },
  })
);
