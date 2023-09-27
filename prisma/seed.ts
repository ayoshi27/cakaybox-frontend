import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.user.createMany({
  //   data: [
  //     {
  //       email: `dayoshii27@gmail.com`,
  //       role: "ADMIN",
  //     },
  //     {
  //       email: `yayr1015@gmail.com`,
  //       role: "USER",
  //     },
  //   ]
  // });
  // await prisma.category.createMany({
  //   data: [
  //     { name: "食費", code: "food" },
  //     { name: "雑貨", code: "goods" },
  //     { name: "お小遣い", code: "personal" },
  //     { name: "その他", code: "others" },
  //     { name: "貯金", code: "savings" },
  //     { name: "旅行", code: "travel" },
  //     { name: "毎月", code: "monthly" },
  //     { name: "電気代", code: "electric" },
  //     { name: "水道ガス", code: "utility" },
  //     { name: "ちばぎん", code: "chibagin" },
  //   ],
  // });
  // await prisma.budget.createMany({
  //   data: [
  //     { name: "共同支出", code: "shared" },
  //     { name: "明弘個人", code: "akihiro" },
  //     { name: "李沙個人", code: "risa" },
  //   ],
  // });
  // await prisma.paymentMethod.createMany({
  //   data: [
  //     { name: "VISA（8119）", code: "visa8119" },
  //     { name: "JCB（1323）", code: "jcb1323" },
  //     { name: "明弘現金", code: "cash-akihiro" },
  //     { name: "李沙現金", code: "cash-risa" },
  //     { name: "みずほ振替", code: "mizuho" },
  //   ],
  // });
  // await prisma.payer.createMany({
  //   data: [
  //     { name: "明弘", code: "akihiro" },
  //     { name: "李沙", code: "risa" },
  //   ],
  // });
  // await prisma.expend.create({
  //   data: {
  //     date: '2023-07-07',
  //     price: 1000,
  //     description: "test",
  //     categoryId: 1,
  //     budgetId: 1,
  //     paymentMethodId: 1,
  //     payerId: 1,
  //   }
  // })

  // await prisma.countingItem.create({
  //   data: {
  //     name: 'サンプル集計項目1（共同visa明弘）',
  //     code: 'sample1',
  //     processed: [true, false],
  //     paymentMethods: {
  //       create: [
  //         {
  //           paymentMethod: {
  //             connect: {
  //               id: 1,
  //             },
  //           }
  //         },
  //       ],
  //     },
  //     budgets: {
  //       create: [
  //         {
  //           budget: {
  //             connect: {
  //               id: 1,
  //             },
  //           }
  //         },
  //       ],
  //     },
  //     payers: {
  //       create: [
  //         {
  //           payer: {
  //             connect: {
  //               id: 1,
  //             },
  //           }
  //         },
  //       ],
  //     },
  //   },
  // })
  // await prisma.customCountingItemTerm.create({
  //   data: {
  //     sign: "PLUS",
  //     coefficient: 1,
  //     processed: [true, false],
  //     categories: {
  //       create: [
  //         {
  //           category: {
  //             connect: {
  //               id: 3,
  //             },
  //           },
  //         },
  //       ],
  //     },
  //     paymentMethods: {
  //       create: [
  //         {
  //           paymentMethod: {
  //             connect: {
  //               id: 1,
  //             },
  //           },
  //         },
  //         {
  //           paymentMethod: {
  //             connect: {
  //               id: 2,
  //             },
  //           },
  //         },
  //         {
  //           paymentMethod: {
  //             connect: {
  //               id: 3,
  //             },
  //           },
  //         },
  //         {
  //           paymentMethod: {
  //             connect: {
  //               id: 4,
  //             },
  //           },
  //         },
  //         {
  //           paymentMethod: {
  //             connect: {
  //               id: 5,
  //             },
  //           },
  //         },
  //       ],
  //     },
  //     budgets: {
  //       create: [
  //         {
  //           budget: {
  //             connect: {
  //               id: 2,
  //             },
  //           },
  //         },
  //       ],
  //     },
  //     payers: {
  //       create: [
  //         {
  //           payer: {
  //             connect: {
  //               id: 1,
  //             },
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.customCountingItem.create({
  //   data: {
  //     name: "明弘個人お小遣い",
  //     code: "akihiro-personal",
  //     terms: {
  //       create: [
  //         {
  //           sign: "PLUS",
  //           coefficient: 1,
  //           processed: [true, false],
  //           categories: {
  //             create: [
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 3,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           paymentMethods: {
  //             create: [
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 2,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 3,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 4,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 5,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           budgets: {
  //             create: [
  //               {
  //                 budget: {
  //                   connect: {
  //                     id: 2,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           payers: {
  //             create: [
  //               {
  //                 payer: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.customCountingItem.create({
  //   data: {
  //     name: "明弘お小遣い合計",
  //     code: "akihiro-total",
  //     terms: {
  //       create: [
  //         {
  //           sign: "PLUS",
  //           coefficient: 1,
  //           processed: [true, false],
  //           categories: {
  //             create: [
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 3,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           paymentMethods: {
  //             create: [
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 2,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 3,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 4,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 5,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           budgets: {
  //             create: [
  //               {
  //                 budget: {
  //                   connect: {
  //                     id: 2,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           payers: {
  //             create: [
  //               {
  //                 payer: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //         {
  //           sign: "PLUS",
  //           coefficient: 0.5,
  //           processed: [true, false],
  //           categories: {
  //             create: [
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 3,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           paymentMethods: {
  //             create: [
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 2,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 3,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 4,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 5,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           budgets: {
  //             create: [
  //               {
  //                 budget: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           payers: {
  //             create: [
  //               {
  //                 payer: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //               {
  //                 payer: {
  //                   connect: {
  //                     id: 2,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.customCountingItem.create({
  //   data: {
  //     name: "月次精算用（李沙）",
  //     code: "monthly-risa",
  //     terms: {
  //       create: [
  //         {
  //           sign: "PLUS",
  //           coefficient: 1,
  //           processed: [true, false],
  //           categories: {
  //             create: [
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 2,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 4,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 5,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 6,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 7,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 8,
  //                   },
  //                 },
  //               },
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 9,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           paymentMethods: {
  //             create: [
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 2,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 3,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 4,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 5,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           budgets: {
  //             create: [
  //               {
  //                 budget: {
  //                   connect: {
  //                     id: 1,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //           payers: {
  //             create: [
  //               {
  //                 payer: {
  //                   connect: {
  //                     id: 2,
  //                   },
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });

  await prisma.countingItem.create({
    data: {
      name: '共同支出（李沙支払）',
      code: 'shared-risa',
      processed: [true, false],
      paymentMethods: {
        create: [
          {
            paymentMethod: {
              connect: {
                id: 1,
              },
            }
          },
          {
            paymentMethod: {
              connect: {
                id: 2,
              },
            }
          },
          {
            paymentMethod: {
              connect: {
                id: 3,
              },
            }
          },
          {
            paymentMethod: {
              connect: {
                id: 4,
              },
            }
          },
          {
            paymentMethod: {
              connect: {
                id: 5,
              },
            }
          },
        ],
      },
      budgets: {
        create: [
          {
            budget: {
              connect: {
                id: 1,
              },
            }
          },
        ],
      },
      payers: {
        create: [
          {
            payer: {
              connect: {
                id: 2,
              },
            }
          },
        ],
      },
    },
  })
  // await prisma.countingItem.delete({
  //   where: {
  //     id: 1,
  //   },
  // });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
