import { builder } from "../builder";
import prisma from '../../lib/prisma'

builder.prismaObject("CountingItem", {
  fields: (t) => ({
    id: t.exposeID("id"),
    createdAt: t.expose("createdAt", { type: "DateTime" }),
    updatedAt: t.expose("updatedAt", { type: "DateTime" }),
    name: t.exposeString("name"),
    code: t.exposeString("code"),
    processed: t.exposeBooleanList("processed"),
    payers: t.relation("payers"),
    paymentMethods: t.relation("paymentMethods"),
    budgets: t.relation("budgets"),
  }),
});

builder.prismaObject("PayerOnCountingItem", {
  fields: (t) => ({
    id: t.exposeID("id"),
    payer: t.relation("payer"),
    countingItem: t.relation("countingItem"),
  }),
});

builder.prismaObject("PaymentMethodOnCountingItem", {
  fields: (t) => ({
    id: t.exposeID("id"),
    paymentMethod: t.relation("paymentMethod"),
    countingItem: t.relation("countingItem"),
  }),
});

builder.prismaObject("BudgetOnCountingItem", {
  fields: (t) => ({
    id: t.exposeID("id"),
    budget: t.relation("budget"),
    countingItem: t.relation("countingItem"),
  }),
});

builder.queryField("countingItem", (t) =>
  t.prismaField({
    type: ["CountingItem"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.countingItem.findMany({ ...query }),
  })
);
