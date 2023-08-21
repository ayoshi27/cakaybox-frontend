import { builder } from "../builder";

builder.prismaObject("CountingItem", {
  fields: (t) => ({
    id: t.exposeID("id"),
    createdAt: t.expose("createdAt", { type: "DateTime" }),
    updatedAt: t.expose("updatedAt", { type: "DateTime" }),
    name: t.exposeString("name"),
    code: t.exposeString("code"),
    processed: t.exposeBooleanList("processed"),
    PaymentMethodCountingItem: t.relation("PaymentMethodCountingItem"),
    BudgetCountingItem: t.relation("BudgetCountingItem"),
    PayerCountingItem: t.relation("PayerCountingItem"),
  }),
});

builder.queryField("countingItem", (t) =>
  t.prismaField({
    type: ['CountingItem'],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.countingItem.findMany({ ...query })
  })
)
