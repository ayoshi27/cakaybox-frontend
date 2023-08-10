import { builder } from "../builder";

builder.prismaObject('BudgetCountingItem', {
  fields: (t) => ({
    id: t.exposeID('id'),
    budget: t.relation('budget'),
    budgetId: t.exposeInt('budgetId'),
    countingItemId: t.exposeInt('countingItemId'),
    countingItem: t.relation('countingItem'),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    updatedAt: t.expose('updatedAt', { type: 'DateTime' }),
  })
})

// Example query field to fetch BudgetCountingItems
builder.queryField("budgetCountingItems", (t) =>
  t.prismaField({
    type: ['BudgetCountingItem'],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.budgetCountingItem.findMany({ ...query })
  })
)
