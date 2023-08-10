import { builder } from "../builder";

builder.prismaObject('Category', {
  fields: (t) => ({
    id: t.exposeID('id'),
    code: t.exposeString('code'),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    updatedAt: t.expose('updatedAt', { type: 'DateTime' }),
    name: t.exposeString('name'),
    limit: t.exposeInt('limit'),
    Expend: t.relation('Expend'),
  })
})


builder.queryField("categories", (t) =>
  t.prismaField({
    type: ['Category'],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.category.findMany({ ...query })
  })
)