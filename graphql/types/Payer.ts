import { builder } from "../builder";

builder.prismaObject('Payer', {
  fields: (t) => ({
    id: t.exposeID('id'),
    code: t.exposeString('code'),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    updatedAt: t.expose('updatedAt', { type: 'DateTime' }),
    name: t.exposeString('name'),
    Expend: t.relation('Expend'),
  })
})


builder.queryField("payers", (t) =>
  t.prismaField({
    type: ['Payer'],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.payer.findMany({ ...query })
  })
)