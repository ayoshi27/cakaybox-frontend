import { builder } from "../builder";

builder.prismaObject("CustomCountingItem", {
  fields: (t) => ({
    id: t.exposeID("id"),
    createdAt: t.expose("createdAt", { type: "DateTime" }),
    updatedAt: t.expose("updatedAt", { type: "DateTime" }),
    name: t.exposeString("name"),
    code: t.exposeString("code"),
    terms: t.relation("terms"),
  }),
});

builder.prismaObject("CustomCountingItemTerm", {
  fields: (t) => ({
    id: t.exposeID("id"),
    sign: t.exposeString("sign"),
    coefficient: t.exposeFloat("coefficient"),
    processed: t.exposeBooleanList("processed"),
    categories: t.relation("categories"),
    payers: t.relation("payers"),
    budgets: t.relation("budgets"),
    paymentMethods: t.relation("paymentMethods"),
    CustomCountingItem: t.relation("CustomCountingItem"),
  }),
});

// builder.prismaObject("FilterCondition", {
//   fields: (t) => ({
//     id: t.exposeID("id"),
//     createdAt: t.expose("createdAt", { type: "DateTime" }),
//     updatedAt: t.expose("updatedAt", { type: "DateTime" }),
//     name: t.exposeString("name"),
//     code: t.exposeString("code"),
//     processed: t.exposeBooleanList("processed"),
//     categories: t.relation("categories"),
//     payers: t.relation("payers"),
//     budgets: t.relation("budgets"),
//     paymentMethods: t.relation("paymentMethods"),
//   }),
// });

builder.prismaObject("CategoryOnCustomCountingItemTerm", {
  fields: (t) => ({
    id: t.exposeID("id"),
    createdAt: t.expose("createdAt", { type: "DateTime" }),
    updatedAt: t.expose("updatedAt", { type: "DateTime" }),
    category: t.relation("category"),
    customCountingItemTerm: t.relation("customCountingItemTerm"),
  }),
});

builder.prismaObject("PayerOnCustomCountingItemTerm", {
  fields: (t) => ({
    id: t.exposeID("id"),
    createdAt: t.expose("createdAt", { type: "DateTime" }),
    updatedAt: t.expose("updatedAt", { type: "DateTime" }),
    payer: t.relation("payer"),
    customCountingItemTerm: t.relation("customCountingItemTerm"),
  }),
});

builder.prismaObject("BudgetOnCustomCountingItemTerm", {
  fields: (t) => ({
    id: t.exposeID("id"),
    createdAt: t.expose("createdAt", { type: "DateTime" }),
    updatedAt: t.expose("updatedAt", { type: "DateTime" }),
    budget: t.relation("budget"),
    customCountingItemTerm: t.relation("customCountingItemTerm"),
  }),
});

builder.prismaObject("PaymentMethodOnCustomCountingItemTerm", {
  fields: (t) => ({
    id: t.exposeID("id"),
    createdAt: t.expose("createdAt", { type: "DateTime" }),
    updatedAt: t.expose("updatedAt", { type: "DateTime" }),
    paymentMethod: t.relation("paymentMethod"),
    customCountingItemTerm: t.relation("customCountingItemTerm"),
  }),
});

builder.queryField("customCountingItem", (t) =>
  t.prismaField({
    type: ["CustomCountingItem"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.customCountingItem.findMany({ ...query }),
  })
);
