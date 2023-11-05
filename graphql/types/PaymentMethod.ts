import { builder } from "../builder";
import prisma from '../../lib/prisma'

builder.prismaObject('PaymentMethod', {
  fields: (t) => ({
    id: t.exposeID('id'),
    code: t.exposeString('code'),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    updatedAt: t.expose('updatedAt', { type: 'DateTime' }),
    name: t.exposeString('name'),
    Expend: t.relation('Expend'),
    payer: t.relation('Payer'),
    payerId: t.exposeInt('payerId'),
  })
})

builder.queryField("paymentMethods", (t) =>
  t.prismaField({
    type: ['PaymentMethod'],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.paymentMethod.findMany({ ...query })
  })
)