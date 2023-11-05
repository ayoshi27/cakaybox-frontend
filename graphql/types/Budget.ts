import { builder } from "../builder";
import prisma from '../../lib/prisma'

builder.prismaObject('Budget', {
  fields: (t) => ({
    id: t.exposeID('id'),
    code: t.exposeString('code'),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    updatedAt: t.expose('updatedAt', { type: 'DateTime' }),
    name: t.exposeString('name'),
    Expend: t.relation('Expend'),
  })
})


builder.queryField("budgets", (t) =>
  t.prismaField({
    type: ['Budget'],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.budget.findMany({ ...query })
  })
)