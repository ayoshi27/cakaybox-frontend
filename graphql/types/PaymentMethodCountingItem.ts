import { builder } from "../builder";

builder.prismaObject('PaymentMethodCountingItem', {
  fields: (t) => ({
    id: t.exposeID('id'),
    paymentMethod: t.relation('paymentMethod'),
    paymentMethodId: t.exposeInt('paymentMethodId'),
    countingItemId: t.exposeInt('countingItemId'),
    countingItem: t.relation('countingItem'),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    updatedAt: t.expose('updatedAt', { type: 'DateTime' }),
  })
})

// Example query field to fetch PaymentMethodCountingItems
builder.queryField("paymentMethodCountingItems", (t) =>
  t.prismaField({
    type: ['PaymentMethodCountingItem'],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.paymentMethodCountingItem.findMany({ ...query })
  })
)