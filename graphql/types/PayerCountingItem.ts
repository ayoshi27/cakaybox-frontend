import { builder } from "../builder";

builder.prismaObject('PayerCountingItem', {
  fields: (t) => ({
    id: t.exposeID('id'),
    payer: t.relation('payer'),
    payerId: t.exposeInt('payerId'),
    countingItemId: t.exposeInt('countingItemId'),
    countingItem: t.relation('countingItem'),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    updatedAt: t.expose('updatedAt', { type: 'DateTime' }),
  })
})

// Example query field to fetch PayerCountingItems
builder.queryField("payerCountingItems", (t) =>
  t.prismaField({
    type: ['PayerCountingItem'],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.payerCountingItem.findMany({ ...query })
  })
)
