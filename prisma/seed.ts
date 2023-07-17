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
  await prisma.expend.create({
    data: {
      date: '2023-07-07',
      price: 1000,
      description: "test",
      categoryId: 21,
      budgetId: 4,
      paymentMethodId: 6,
      payerId: 3,
    }
  })
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
