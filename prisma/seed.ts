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
  //     { name: "イベント", code: "event" },
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
  // await prisma.payer.createMany({
  //   data: [
  //     { name: "明弘", code: "akihiro" },
  //     { name: "李沙", code: "risa" },
  //   ],
  // });
  // await prisma.paymentMethod.createMany({
  //   data: [
  //     { name: "VISA（8119）", code: "visa8119", payerId: 1 },
  //     { name: "JCB（1323）", code: "jcb1323", payerId: 1 },
  //     { name: "明弘現金", code: "cash-akihiro", payerId: 1 },
  //     { name: "李沙現金", code: "cash-risa", payerId: 2 },
  //     { name: "みずほ振替", code: "mizuho", payerId: 1 },
  //     { name: "ちば銀行振替", code: "chibagin", payerId: 1 },
  //   ],
  // });

  // select last_value from "Expend_id_seq";
  // SELECT setval('"Expend_id_seq"', 1);
  await prisma.expend.createMany({
    data: [
      {price: 194, description: "イオン：チーズ",date: "2022-12-03",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 3834, description: "イオン：食材",date: "2022-12-03",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 129, description: "７：ドーナツ",date: "2022-12-01",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 129, description: "７：ドーナツ",date: "2022-12-02",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 484, description: "７：よる",date: "2022-12-01",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 876, description: "７：よる二人",date: "2022-12-02",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 300, description: "veloce",date: "2022-12-04",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 600, description: "すぎむらクリニック",date: "2022-12-03",categoryId: 4,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 1090, description: "イオン処方箋：李沙お薬",date: "2022-12-04",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 987, description: "マツキヨ：ウェットシートとか",date: "2022-12-04",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1407, description: "角上：食材",date: "2022-12-03",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 220, description: "【結婚式】seria: イーゼル",date: "2022-12-03",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 456, description: "イオンネット：食材",date: "2022-12-01",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 8620, description: "イオンネット：01",date: "2022-12-01",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 257, description: "イオン：リビングクリーナー",date: "2022-12-04",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 736, description: "イオン：食材調味料",date: "2022-12-04",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 84, description: "イオン：黒糖まんじゅう",date: "2022-12-04",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 321, description: "７：ごま油",date: "2022-12-04",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 470, description: "７：よるおやつ",date: "2022-12-06",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 159, description: "７：エクレア",date: "2022-12-07",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 129, description: "７：ドーナツ",date: "2022-12-07",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 276, description: "ヨーカドー：おやつ",date: "2022-12-08",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 230, description: "ソーロン：よる",date: "2022-12-08",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 198, description: "ヨーカドー：キッチンペーパー",date: "2022-12-10",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 110, description: "daiso: 菜箸",date: "2022-12-10",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 4664, description: "利休：牛タン",date: "2022-12-10",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 276, description: "７：水とどらやき",date: "2022-12-10",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3881, description: "ニトリ：フライパンとかスリッパとか色々",date: "2022-12-10",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 990, description: "【結婚式】ユニクロ：白ヒートテック",date: "2022-12-10",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 658, description: "ミスド",date: "2022-12-10",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3671, description: "イオン：食材",date: "2022-12-10",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2058, description: "角上：食材",date: "2022-12-10",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 555, description: "イオン：夕飯",date: "2022-12-09",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1299, description: "amazon: PCスタンド",date: "2022-12-06",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 500, description: "suica",date: "2022-12-10",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1000, description: "７：v",date: "2022-12-09",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 0, description: "【メモ】「毎月」支払いを登録する",date: "2022-12-31",categoryId: 8,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 691, description: "カルディ：豆",date: "2022-12-11",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 612, description: "イオン：おやつとか",date: "2022-12-11",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 113, description: "イオン：おやつ",date: "2022-12-11",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 740, description: "【結婚式】ヤマト：ダンボール",date: "2022-12-11",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 530, description: "すぎむらクリニック",date: "2022-12-11",categoryId: 4,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 1430, description: "スタバ：マグ（李沙に現金お渡し済み）",date: "2022-12-11",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 3,processed: false},
{price: 393, description: "イオン：食材",date: "2022-12-08",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 150, description: "【結婚式】無印：封筒",date: "2022-12-11",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 9834, description: "美容室：明弘",date: "2022-12-11",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 280, description: "７：よる",date: "2022-12-11",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 407, description: "７：よる",date: "2022-12-12",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1000, description: "財布のお礼",date: "2022-12-12",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 3,processed: false},
{price: 1140, description: "電車切符代（新宿往復）",date: "2022-12-09",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 3,processed: false},
{price: 110, description: "【結婚式】seria: プレゼント袋",date: "2022-12-17",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 4510, description: "クリーニング",date: "2022-12-11",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 2272, description: "イオン：食材",date: "2022-12-17",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2151, description: "【結婚式】イオン：なのちゃんおやつプレゼント",date: "2022-12-17",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 691, description: "イオン：食材",date: "2022-12-12",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 522, description: "イオン：食材",date: "2022-12-13",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 330, description: "【結婚式】seria: 梱包材",date: "2022-12-17",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 581, description: "７：よる二人",date: "2022-12-16",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 226, description: "７：デザート",date: "2022-12-17",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 150, description: "７：よる",date: "2022-12-15",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 2848, description: "【結婚式】amazon: eneloop",date: "2022-12-11",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3376, description: "【結婚式】ヤマト運輸（小物集荷）",date: "2022-12-18",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1026, description: "イオン：食材",date: "2022-12-18",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 5500, description: "李沙美容院",date: "2022-12-18",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 237, description: "７：昼",date: "2022-12-22",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 348, description: "７：よる",date: "2022-12-20",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 540, description: "７：昼",date: "2022-12-20",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 537, description: "７：よる",date: "2022-12-19",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 302, description: "７：よる",date: "2022-12-18",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 583, description: "イオン：食材",date: "2022-12-20",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 339, description: "イオン：よる",date: "2022-12-21",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 723, description: "イオン：よる",date: "2022-12-22",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 7590, description: "【結婚式】李沙エステ",date: "2022-12-23",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 7150, description: "【結婚式】李沙美容院",date: "2022-12-23",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 3080, description: "化粧品",date: "2022-12-23",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1334, description: "イオン：食材",date: "2022-12-13",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 606, description: "イオン：食材",date: "2022-12-14",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 222, description: "イオン：よる",date: "2022-12-16",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1458, description: "丸仁: おみやげしょうがとか",date: "2022-12-17",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 1300, description: "梅園: あんみつとか",date: "2022-12-17",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 250, description: "花月堂: メロンパン",date: "2022-12-17",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 2310, description: "やげん堀: お土産七味",date: "2022-12-17",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 333, description: "【結婚式】seria: 緩衝材",date: "2022-12-17",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 700, description: "銀だこ",date: "2022-12-17",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1415, description: "イオン：食材",date: "2022-12-23",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 227, description: "７: ココア",date: "2022-12-19",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1175, description: "イオン：食材",date: "2022-12-18",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1020, description: "KFC",date: "2022-12-27",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 2310, description: "【結婚式】ラウンジデザート",date: "2022-12-24",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 4760, description: "【結婚式】アウトレットランチ",date: "2022-12-24",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 884, description: "【結婚式】東京駅パン屋コーヒー",date: "2022-12-24",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3888, description: "【結婚式】軽井沢駅お土産",date: "2022-12-24",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2740, description: "【結婚式】タクシー",date: "2022-12-24",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 701, description: "【結婚式】sawamura ベーカリー",date: "2022-12-24",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 367, description: "【結婚式】丸山珈琲",date: "2022-12-24",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 944, description: "【結婚式】東京駅パン",date: "2022-12-24",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 393, description: "【結婚式】ハルニレイタリアン（7,000はクーポン）",date: "2022-12-24",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1020, description: "【結婚式】sawamura夜パン（1,000はクーポン）",date: "2022-12-25",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 840, description: "【結婚式】トンボの湯の隣：プリン",date: "2022-12-25",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 8660, description: "【結婚式】hoshinoタンブラー",date: "2022-12-26",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 117, description: "newdays: お水",date: "2022-12-26",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 291, description: "７：お昼",date: "2022-12-27",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 4741, description: "ラスクお土産",date: "2022-12-28",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1322, description: "イオン：01",date: "2022-12-28",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1401, description: "不二家: ケーキ",date: "2022-12-28",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3759, description: "諏訪湖SA: アップルパイとか",date: "2022-12-31",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1554, description: "misdo",date: "2022-12-29",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 5070, description: "【結婚式】ヤマト着払い",date: "2022-12-28",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2150, description: "落花生土産",date: "2022-12-28",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 246, description: "7: 昼ごはん",date: "2022-12-27",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 517, description: "【結婚式】女の子グッズとか",date: "2022-12-24",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 5616, description: "【結婚式】職場お土産toka",date: "2022-12-24",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 5616, description: "【結婚式】職場お土産toka",date: "2022-12-24",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1965, description: "7: 甘いものいっぱい",date: "2022-12-26",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 492, description: "ジョイフル：くるりおもちゃ",date: "2022-12-31",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3250, description: "【結婚式】李沙美容室",date: "2022-12-28",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 602, description: "ヨーカドー：おでん",date: "2022-12-28",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 4682, description: "イオン：00",date: "2022-12-28",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 670, description: "【結婚式】軽井沢駅: おやつ",date: "2022-12-26",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1930, description: "ドトール",date: "2022-12-29",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 8778, description: "ヤマダ電機：ホームベーカリー",date: "2023-01-02",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1779, description: "角上：寿司とか",date: "2023-01-01",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2376, description: "イオン：食材とか",date: "2023-01-01",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1993, description: "角上：食材",date: "2023-01-02",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2583, description: "イオン：食材",date: "2023-01-02",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 406, description: "イオン：マヨとか",date: "2023-01-02",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1073, description: "amazon: 花瓶",date: "2023-01-03",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 5491, description: "amazon: amp",date: "2023-01-03",categoryId: 11,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 678, description: "7: デザート",date: "2023-01-03",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3300, description: "panasonic: オーブン角皿",date: "2023-01-08",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1500, description: "【結婚式】スタバ：李沙お礼",date: "2023-01-03",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 577, description: "７：食材",date: "2023-01-03",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1600, description: "イオン：食材（パン）",date: "2023-01-07",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 440, description: "キタムラ：結婚式写真",date: "2023-01-02",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 691, description: "カルディ豆",date: "2023-01-08",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3300, description: "【結婚式】lindt: 李沙お礼",date: "2023-01-03",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1099, description: "島村楽器：弦とピック",date: "2023-01-02",categoryId: 11,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 2500, description: "GU: デニム",date: "2023-01-02",categoryId: 11,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 419, description: "ヨーカドー：五線譜ノートとか",date: "2023-01-03",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1342, description: "ヨーカドー：software design",date: "2023-01-03",categoryId: 11,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 509, description: "イオン：夕飯",date: "2023-01-05",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1586, description: "イオン：食材",date: "2023-01-08",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 661, description: "ミスド",date: "2023-01-08",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 994, description: "イオン：食材",date: "2023-01-08",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 138, description: "７：ガム",date: "2023-01-07",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1203, description: "７：昼",date: "2023-01-07",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 204, description: "ローソン：よる",date: "2023-01-06",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 462, description: "７：昼",date: "2023-01-06",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 577, description: "イオン：夕飯",date: "2023-01-09",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 2300, description: "島村楽器: シールド",date: "2023-01-09",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 14355, description: "GLOBAL WORK: 服",date: "2023-01-09",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 581, description: "７：よる",date: "2023-01-09",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 610, description: "７：昼",date: "2023-01-11",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 548, description: "７：よる",date: "2023-01-11",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 409, description: "７：よる",date: "2023-01-12",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 451, description: "７：デザート",date: "2023-01-14",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 642, description: "７：お昼",date: "2023-01-15",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1100, description: "佐世保バーガー",date: "2023-01-13",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 5331, description: "イオン：食材",date: "2023-01-14",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 319, description: "イオン：よる",date: "2023-01-13",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 7731, description: "電気代",date: "2022-12-31",categoryId: 9,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 7660, description: "電気代",date: "2023-01-15",categoryId: 9,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 6829, description: "水道ガス（2月支払い）（口座引落）",date: "2023-01-31",categoryId: 10,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 10685, description: "水道ガス",date: "2022-12-31",categoryId: 10,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 127, description: "イオン：おやつ",date: "2023-01-12",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 619, description: "イオン：小褒美",date: "2023-01-15",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1200, description: " ７：v",date: "2023-01-01",categoryId: 11,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 7118, description: "【結婚式】かをりおばちゃんにお礼",date: "2023-01-21",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 8042, description: "【結婚式】弘子おばちゃんと礼子おばちゃんにお礼",date: "2023-01-21",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 5388, description: "TOMIZ製菓店",date: "2023-01-21",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1238, description: "スタバ",date: "2023-01-21",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 522, description: "7: よる",date: "2023-01-21",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1009, description: "7: よる",date: "2023-01-17",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 6500, description: "飲み会",date: "2023-01-17",categoryId: 11,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 3361, description: "角上：食材",date: "2023-01-21",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 265, description: "イオン：よる",date: "2023-01-19",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 509, description: "イオン：昼",date: "2023-01-19",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 162, description: "７：朝",date: "2023-01-13",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1766, description: "イオン：めぐすりスプレーマスク",date: "2023-01-15",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 224, description: "イオン：よる",date: "2023-01-16",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1250, description: "TOMIZ: パン材料",date: "2023-01-13",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 500, description: "イオン：はちみつとソーセージ",date: "2023-01-19",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1666, description: "クリーニング",date: "2023-01-09",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 390, description: "無印: 化粧液",date: "2023-01-09",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 3600, description: "【結婚式】ネイル落とし",date: "2023-01-09",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 4900, description: "amazon prime 年会費",date: "2023-01-27",categoryId: 11,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 508, description: "イオン：夜",date: "2023-01-20",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 355, description: "イオン：塩とアイス",date: "2023-01-22",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 4641, description: "イオン：食材",date: "2023-01-21",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1760, description: "daiso: ゴミ袋とか",date: "2023-01-22",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 235, description: "7: キャベツカニカマ",date: "2023-01-22",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 233, description: "イオン：夜",date: "2023-01-24",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 980, description: "7: v",date: "2023-01-01",categoryId: 11,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 132, description: "ローソン：galbo",date: "2023-01-28",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1210, description: "shapo市川 geroge's: 丸太のコースター",date: "2023-01-28",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1350, description: "あるでん亭: ランチ",date: "2023-01-27",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1446, description: "７：よる",date: "2023-01-25",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1032, description: "７：あさ",date: "2023-01-25",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 4532, description: "イオン：食材",date: "2023-01-28",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 159, description: "イオン：よる",date: "2023-01-26",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 2580, description: "モンペリエ：ケーキ",date: "2023-01-28",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 285, description: "浅草あんぱん",date: "2023-01-28",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3091, description: "浅草モンブラン：ハンバーグ",date: "2023-01-28",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 468, description: "カルディ豆",date: "2023-01-22",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 97, description: "イオン：よる",date: "2023-01-22",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 434, description: "イオン：よる",date: "2023-01-23",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 149, description: "７：あさ",date: "2023-01-27",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 6700, description: "イオンネット：01",date: "2023-01-26",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2878, description: "ニトリ：スキレット",date: "2023-01-29",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1090, description: "イオン：二人お昼",date: "2023-01-29",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 480, description: "veloce",date: "2023-01-29",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 712, description: "イオン：夜ご飯",date: "2023-02-02",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 20880, description: "楽天payチャージ：クラプトン",date: "2023-02-02",categoryId: 11,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1084, description: "７：朝",date: "2023-02-01",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 804, description: "７：夜",date: "2023-02-01",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 194, description: "７：朝",date: "2023-01-31",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 656, description: "７：デザート",date: "2023-02-03",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1034, description: "７：よる",date: "2023-02-03",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 800, description: "７：よる",date: "2023-02-03",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 480, description: "veloce",date: "2023-02-03",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 2160, description: "大戸屋",date: "2023-02-11",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 725, description: "famima: 小褒美",date: "2023-02-08",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1025, description: "７: 朝昼",date: "2023-02-08",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 150, description: "７：夜",date: "2023-02-07",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 362, description: "７：夜",date: "2023-02-06",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 582, description: "ローソン：デザート",date: "2023-02-05",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 4732, description: "イオン：食材",date: "2023-02-11",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1228, description: "カルディ",date: "2023-02-11",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1584, description: "イオン：食材",date: "2023-02-04",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1213, description: "イオン：食材",date: "2023-02-04",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2215, description: "ヴァンローゼ",date: "2023-02-05",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1083, description: "マツキヨ：マスクとメイク落とし",date: "2023-02-04",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 424, description: "イオン：食材",date: "2023-02-04",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1225, description: "角上：食材",date: "2023-02-04",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 203, description: "イオン：01",date: "2023-02-11",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1100, description: "TSUTAYA: nisa",date: "2023-02-11",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1342, description: "TSUTAYA: software design",date: "2023-02-11",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1782, description: "nintendo: ゼルダ追加DLC",date: "2023-02-10",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 480, description: "veloce",date: "2023-02-12",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1729, description: "イオン：調味用とか",date: "2023-02-12",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 550, description: "イオン：お昼（793）",date: "2023-02-12",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 200, description: "イオン：うどんとはんぺん（793）",date: "2023-02-12",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 565, description: "イオン：昼",date: "2023-02-13",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 345, description: "７：朝",date: "2023-02-13",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 999, description: "トイザらス",date: "2023-02-18",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 654, description: "織りなす錦糸町：目薬",date: "2023-02-18",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 133, description: "７：コンタクト",date: "2023-02-18",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 480, description: "ソラマチ：コーヒー",date: "2023-02-18",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 544, description: "famima: アイスおやつ",date: "2023-02-18",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 500, description: "suica",date: "2023-02-18",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 3000, description: "麺魚",date: "2023-02-18",categoryId: 3,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 547, description: "イオン：弁当の箸",date: "2023-02-14",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1360, description: "すぎむらクリニック：李沙薬",date: "2023-02-19",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 663, description: "イオン：食材",date: "2023-02-19",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2883, description: "イオン：食材",date: "2023-02-18",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1410, description: "イオン：李沙にぷちバレンタイン",date: "2023-02-14",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 600, description: "すぎむらクリニック：診察台",date: "2023-02-19",categoryId: 4,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 24040, description: "新幹線：京都→東京",date: "2023-02-19",categoryId: 6,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 27940, description: "新幹線：東京→京都",date: "2023-02-19",categoryId: 6,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 498, description: "イオン：おやつ",date: "2023-02-19",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 360, description: "イオン：おやつ",date: "2023-02-16",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 116, description: "イオン：おやつ",date: "2023-02-10",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 235, description: "7: 夜キャベツ",date: "2023-02-20",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 480, description: "veloce",date: "2023-02-19",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1800, description: "udemy: webGL",date: "2023-02-22",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1000, description: "7: mv",date: "2023-02-22",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1061, description: "7: 朝昼",date: "2023-02-22",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 332, description: "7: よる",date: "2023-02-21",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 606, description: "イオン：夜",date: "2023-02-17",categoryId: 1,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 254, description: "イオン：二人アイス",date: "2023-02-23",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 78, description: "イオン：おやつ",date: "2023-02-20",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 8789, description: "ABC-mart: 誕生日靴",date: "2023-02-25",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2593, description: "イオン：食材",date: "2023-02-25",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1231, description: "角上",date: "2023-02-25",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1151, description: "イオン：食材（カレー）",date: "2023-02-23",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 2014, description: "スタバ",date: "2023-02-25",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 613, description: "７：朝",date: "2023-02-24",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 706, description: "７：よる",date: "2023-02-23",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 360, description: "７：昼",date: "2023-02-23",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1061, description: "７：朝",date: "2023-02-22",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 2028, description: "イオン：食材",date: "2023-02-25",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 8789, description: "ABC-mart: 誕生日靴李沙",date: "2023-02-26",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 923, description: "krispy kreme",date: "2023-02-26",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 427, description: "イオン：アイス",date: "2023-02-26",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2020, description: "イオン：李沙の薬",date: "2023-02-28",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1090, description: "さきたに内科",date: "2023-02-28",categoryId: 4,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 11000, description: "globalwork: スキニー",date: "2023-02-28",categoryId: 11,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 5980, description: "gu online: スキニー",date: "2023-02-28",categoryId: 11,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1389, description: "セブン：昼ごはん",date: "2023-02-26",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 360, description: "イオン：夜",date: "2023-03-01",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 13000, description: "賃貸保証契約（千葉銀から立替）",date: "2023-03-01",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 86, description: "イオン：おやつ",date: "2023-03-02",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 200, description: "たいやき",date: "2023-03-02",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 591, description: "イオン：バックハンガー",date: "2023-02-25",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 657, description: "イオン：ブリーズライト",date: "2023-02-25",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 500, description: "suica",date: "2023-02-26",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 550, description: "amazon: 麻袋",date: "2023-03-03",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 600, description: "アウトレット：ネギ塩ダレ（大体600円くらい）",date: "2023-03-04",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 470, description: "夢牧場：ソフト",date: "2023-03-04",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 7786, description: "Urban Research: 服",date: "2023-03-04",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 4501, description: "アウトレット：パンケーキ",date: "2023-03-04",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 13860, description: "BEAMS: 服2（32,615）",date: "2023-03-03",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 425, description: "イオン：夕飯",date: "2023-03-03",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 9580, description: "水道ガス下水",date: "2023-02-28",categoryId: 10,payerId: 1,budgetId: 1,paymentMethodId: 5,processed: false},
{price: 588, description: "famima: アイス",date: "2023-03-05",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3451, description: "イオン：食材",date: "2023-03-05",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 657, description: "イオン：ブリーズライト",date: "2023-03-08",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 360, description: "イオン：夜",date: "2023-03-08",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 172, description: "イオン：アイス",date: "2023-03-08",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1040, description: "７：朝",date: "2023-03-08",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 360, description: "７：デザート",date: "2023-03-07",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 127, description: "イオン：おやつ",date: "2023-03-10",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 600, description: "７：デザート",date: "2023-03-10",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 552, description: "王将：餃子テイクアウト",date: "2023-03-11",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 8250, description: "明弘美容院",date: "2023-03-11",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1398, description: "イオン：食材",date: "2023-03-11",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 5850, description: "ORiental TRaffic: 式参列パンプス",date: "2023-03-11",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 10157, description: "ららぽ: URセール3点",date: "2023-03-11",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 2760, description: "ららぽ: 四六時中ランチ",date: "2023-03-11",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 305, description: "ヨーカドー：おやつ",date: "2023-03-11",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1600, description: "amazon: 調味料入れ",date: "2023-03-13",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2328, description: "【結婚式】shapo船橋 harada: お返しグーテ",date: "2023-03-12",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 568, description: "イオン：食材",date: "2023-03-12",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2182, description: "ふなばし生鮮市場: 食材",date: "2023-03-12",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3000, description: "7: mv",date: "2023-03-01",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1000, description: "7: mv",date: "2023-03-01",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 666, description: "カルディ：豆と塩",date: "2023-03-12",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 8000, description: "李沙コート代",date: "2023-03-03",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3125, description: "ヨーカドー: 雑貨",date: "2023-03-05",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 10755, description: "BEAMS: 李沙服3（32,615）NOTE: コート代は貯金から",date: "2023-03-03",categoryId: 3,payerId: 1,budgetId: 3,paymentMethodId: 1,processed: false},
{price: 504, description: "イオン：食材",date: "2023-02-28",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 8408, description: "電気代",date: "2023-02-28",categoryId: 9,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 7230, description: "アットコンタクト",date: "2023-03-13",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 776, description: "7: 夜おやつ",date: "2023-03-12",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 172, description: "イオン：チョコパイ",date: "2023-03-02",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 343, description: "ローソン：卵",date: "2023-03-05",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 2576, description: "イオン：食材",date: "2023-03-12",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 30690, description: "李沙の参列ドレスとバッグ",date: "2023-03-11",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 750, description: "すぎむらクリニック：李沙薬",date: "2023-03-12",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 900, description: "７：朝昼",date: "2023-03-15",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 501, description: "イオン：食材",date: "2023-03-16",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 237, description: "7: 昼ごはん",date: "2023-03-17",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 354, description: "7 ブラウニー",date: "2023-03-16",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 10213, description: "京都2泊",date: "2023-03-15",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2530, description: "すぎむらクリニック：李沙薬",date: "2023-03-15",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 570, description: "7: ひる",date: "2023-03-17",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 983, description: "大丸: 穴子寿司",date: "2023-03-17",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 894, description: "大丸　李沙サラダ",date: "2023-03-17",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2660, description: "小川珈琲モーニング",date: "2023-03-18",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1000, description: "地蔵院2人",date: "2023-03-18",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 1000, description: "鈴虫寺",date: "2023-03-18",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 300, description: "南禅寺御朱印",date: "2023-03-19",categoryId: 6,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 453, description: "大丸お土産",date: "2023-03-19",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 704, description: "7: おやつ",date: "2023-03-20",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 896, description: "大丸　お土産おかき",date: "2023-03-17",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1228, description: "大丸　アスパラサラダ",date: "2023-03-17",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 276, description: "newdaysおやつ",date: "2023-03-17",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2000, description: "Suica",date: "2023-03-18",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 821, description: "京都夜デザート",date: "2023-03-18",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 500, description: "Suica",date: "2023-03-19",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 170, description: "よもぎ餅",date: "2023-03-19",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 648, description: "錦市場田楽",date: "2023-03-19",categoryId: 6,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 1200, description: "大丸お土産",date: "2023-03-19",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 540, description: "大丸お土産",date: "2023-03-19",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 617, description: "大丸　李沙カルパッチョ",date: "2023-03-17",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2000, description: "御朱印と手帳",date: "2023-03-18",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 1000, description: "鈴虫寺御守",date: "2023-03-18",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 1835, description: "進々堂パン",date: "2023-03-19",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 518, description: "7: あさ",date: "2023-03-20",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 255, description: "newdays水",date: "2023-03-17",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 800, description: "ホテルフロント",date: "2023-03-17",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1200, description: "南禅寺方丈",date: "2023-03-19",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 450, description: "八つ橋",date: "2023-03-19",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 126, description: "ポケットティッシュ",date: "2023-03-19",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1662, description: "大丸お土産",date: "2023-03-19",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 13330, description: "楽天Pay穣に支払い（昼夜飯",date: "2023-03-19",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 108, description: "7: パン",date: "2023-03-21",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 500, description: "suica: まちおかおやつ",date: "2023-03-26",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 648, description: "京都駅：抹茶ラテ",date: "2023-03-19",categoryId: 6,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 468, description: "夜おやつ",date: "2023-03-26",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 626, description: "京都駅：京ばあむ",date: "2023-03-19",categoryId: 6,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 2695, description: "クリーニング",date: "2023-03-12",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 7500, description: "李沙美容室",date: "2023-03-20",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 13332, description: "電気代",date: "2023-03-21",categoryId: 9,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2234, description: "amazon: フライパン",date: "2023-03-02",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 4164, description: "イオン：食材",date: "2023-03-20",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 410, description: "京都どらやきとおふぃなん",date: "2023-03-19",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 459, description: "錦市場: 串揚げとメンチ",date: "2023-03-19",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2400, description: "スマートコーヒー",date: "2023-03-19",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 9160, description: "ONO（夕飯）",date: "2023-03-19",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1084, description: "7:あさ",date: "2023-03-22",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 427, description: "7:でざーと",date: "2023-03-22",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 632, description: "amazon pcスタンド",date: "2023-03-22",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 522, description: "7: 食材",date: "2023-03-23",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 468, description: "イオン：おやつ",date: "2023-03-21",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1191, description: "イオン：食材",date: "2023-03-22",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 657, description: "イオン：ブリーズライト",date: "2023-03-21",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 548, description: "７：よる",date: "2023-03-24",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 2394, description: "ヨーカドー：雑貨",date: "2023-03-21",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 623, description: "李沙祝儀袋",date: "2023-03-26",categoryId: 4,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 1290, description: "イオン：食材",date: "2023-03-26",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 281, description: "ローソン：昼",date: "2023-03-25",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1775, description: "amazon: Nドット",date: "2023-03-28",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 6175, description: "イオン：食材",date: "2023-03-25",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1000, description: "7:my",date: "2023-03-24",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 844, description: "７：昼ごはん（パンケーキ）",date: "2023-03-26",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 194, description: "7: あさあ",date: "2023-03-28",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 298, description: "イオン:おやつ",date: "2023-03-28",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 561, description: "7:昼",date: "2023-03-30",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 956, description: "7:夜",date: "2023-03-29",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 817, description: "イオン：夜",date: "2023-03-29",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1480, description: "宮尾耳鼻咽喉科: 診察",date: "2023-03-31",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 560, description: "イオン：昼",date: "2023-03-31",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 5000, description: "飲み会",date: "2023-03-31",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 3,processed: false},
{price: 220, description: "7: コーヒー",date: "2023-04-01",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 990, description: "スタバ",date: "2023-04-01",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 759, description: "ヨーカドー：泡立て器小",date: "2023-04-01",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1377, description: "イオン：食材",date: "2023-04-01",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 394, description: "シーモア",date: "2023-03-31",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 168, description: "シーモア",date: "2023-03-31",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 2550, description: "角上：食材",date: "2023-04-01",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 807, description: "イオン：李沙夕飯",date: "2023-04-02",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1705, description: "ニトリ：雑貨",date: "2023-04-02",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 394, description: "シーモア",date: "2023-04-03",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 714, description: "イオン：食材",date: "2023-04-05",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 780, description: "明弘薬",date: "2023-04-01",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 632, description: "ヨーカドー：デザート",date: "2023-03-25",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 695, description: "イオン：食材",date: "2023-03-30",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 500, description: "Suica",date: "2023-04-01",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 276, description: "イオン：食材",date: "2023-04-04",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 394, description: "シーモア",date: "2023-04-01",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1860, description: "ペニーレイン",date: "2023-04-02",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 290, description: "7：朝",date: "2023-04-04",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 573, description: "イオン：食材",date: "2023-04-02",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 480, description: "ベローチェ",date: "2023-04-02",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1018, description: "スタバドーナツ",date: "2023-03-21",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 427, description: "イオン：デザート",date: "2023-04-02",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 394, description: "シーモア",date: "2023-04-02",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 500, description: "Suica",date: "2023-04-01",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 276, description: "イオン：食材",date: "2023-04-03",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 7874, description: "イオンネット：雑貨",date: "2023-04-03",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 397, description: "7：昼",date: "2023-04-06",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1749, description: "キルフェボン",date: "2023-04-02",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1838, description: "イオン：食材",date: "2023-03-31",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1419, description: "イオン：食材",date: "2023-04-05",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1327, description: "７：デザートとか",date: "2023-04-04",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 632, description: "7:よる",date: "2023-04-05",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 466, description: "7:よる",date: "2023-04-06",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 624, description: "7:あさ",date: "2023-04-07",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 18500, description: "keychron",date: "2023-04-09",categoryId: 11,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 2805, description: "イオン：食材",date: "2023-04-09",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 918, description: "イオン：食材",date: "2023-04-07",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1568, description: "スタバ",date: "2023-04-09",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 298, description: "famima: テリーヌ",date: "2023-04-09",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3058, description: "shapo船橋 chawan",date: "2023-04-09",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 590, description: "７：よる",date: "2023-04-08",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 559, description: "７：ひる",date: "2023-04-08",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 6228, description: "ガス水道",date: "2023-03-31",categoryId: 10,payerId: 1,budgetId: 1,paymentMethodId: 5,processed: false},
{price: 807, description: "コーヒー豆",date: "2023-04-09",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 557, description: "7:おやつ",date: "2023-04-09",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 254, description: "ヨーカドー: おやつ",date: "2023-04-09",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1100, description: "7:v",date: "2023-04-11",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1048, description: "7:ひる",date: "2023-04-12",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 748, description: "イオン：食材",date: "2023-04-12",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2899, description: "Amazon 李沙サブバッグ",date: "2023-04-13",categoryId: 4,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 149, description: "7：朝",date: "2023-04-14",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 405, description: "7：夜",date: "2023-04-13",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 485, description: "7：朝",date: "2023-04-13",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 505, description: "7：昼",date: "2023-04-13",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 500, description: "Suica",date: "2023-04-15",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 585, description: "イオン：よる",date: "2023-04-14",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 466, description: "イオン：よる",date: "2023-04-10",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 4850, description: "イオン：食材・ケーキ",date: "2023-04-16",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1100,description: "つけそば神田勝本", date: "2023-04-15",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 3, processed: false},
{price: 2500, description: "武道館：パンフレット",date: "2023-04-15",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 3,processed: false},
{price: 500, description: "モスバーガー",date: "2023-04-15",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 3,processed: false},
{price: 3020, description: "楽天キャッシュチャージ",date: "2023-04-15",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 178, description: "famima: 水",date: "2023-04-15",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 540, description: "７：昼",date: "2023-04-14",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 734, description: "7: おやつ",date: "2023-04-16",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1690, description: "amazon: ケーブル",date: "2023-04-16",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1000, description: "ランチ",date: "2023-04-18",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 291, description: "7:あさ",date: "2023-04-18",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 800, description: "７：よる",date: "2023-04-18",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 560, description: "veloce",date: "2023-04-21",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 313, description: "７：朝",date: "2023-04-20",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 864, description: "イオン：食材",date: "2023-04-19",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 10203, description: "電気代",date: "2023-04-21",categoryId: 9,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 899, description: "イオン: デザートとか",date: "2023-04-21",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 4900, description: "えきねっと",date: "2023-03-31",categoryId: 5,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 404, description: "イオン",date: "2023-04-21",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 4280, description: "えきねっと",date: "2023-03-31",categoryId: 5,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 11500, description: "李沙コンタクト",date: "2023-04-23",categoryId: 4,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 500, description: "suica",date: "2023-04-23",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 425, description: "イオン：よる",date: "2023-04-24",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 4000, description: "李沙結婚式セット",date: "2023-04-15",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 328, description: "カルディ: 豆",date: "2023-04-22",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 781, description: "７：おやつとか",date: "2023-04-20",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 3936, description: "角上：食材",date: "2023-04-22",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1843, description: "不二家：ケーキ",date: "2023-04-16",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1358, description: "ミスド",date: "2023-04-23",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 414, description: "７：デザート",date: "2023-04-22",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 775, description: "７：朝",date: "2023-04-21",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 945, description: "TOBU: アップルパイ",date: "2023-04-22",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 4219, description: "イオン：食材",date: "2023-04-22",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 386, description: "７：おやつ",date: "2023-04-23",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 350, description: "veloce",date: "2023-04-21",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1831, description: "マツキヨ：雑貨",date: "2023-04-22",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 5621, description: "クリーニング",date: "2023-04-22",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 321, description: "７：おやつ",date: "2023-04-23",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 213, description: "7:ひる",date: "2023-04-25",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1047, description: "ヨーカドー：雑貨",date: "2023-04-22",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3300, description: "lindt: プレゼントチョコ",date: "2023-04-22",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 258, description: "ローソン：一幻",date: "2023-04-23",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 747, description: "7:あさ",date: "2023-04-26",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1013, description: "イオン：米",date: "2023-04-25",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 13650, description: "NHK",date: "2023-04-15",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 552, description: "イオン:夕飯",date: "2023-04-27",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 2000, description: "昼ごはん（岡山さん込み）",date: "2023-04-28",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 3,processed: false},
{price: 3458, description: "イオン:食材",date: "2023-04-29",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 439, description: "イオン:食材",date: "2023-04-28",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 108, description: "7:ぱん",date: "2023-04-30",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3014, description: "なの誕プレ",date: "2023-04-30",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 83160, description: "suica: 定期",date: "2023-04-27",categoryId: 11,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1000, description: "7: mv",date: "2023-04-25",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 857, description: "７：昼",date: "2023-05-03",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 270, description: "７：昼",date: "2023-05-01",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 5154, description: "茅の舎：母の日",date: "2023-04-28",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 500, description: "Suica",date: "2023-05-03",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 562, description: "いおんよる",date: "2023-05-02",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 330, description: "ダイソー鮮度袋",date: "2023-05-06",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 13856, description: "ニトリ：夏の家具",date: "2023-05-06",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 582, description: "misdo: ドーナツ",date: "2023-04-30",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2243, description: "イオン：食材",date: "2023-05-06",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3760, description: "ユニクロ：下着",date: "2023-05-06",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 30000, description: "李沙ご祝儀",date: "2023-04-30",categoryId: 4,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 515, description: "イオン: 夜おやつ",date: "2023-05-06",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1304, description: "イオン：食材",date: "2023-05-07",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1295, description: "イオン：化粧品とブリーズライト",date: "2023-05-06",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 114, description: "newdays: 水",date: "2023-05-06",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1186, description: "７：二人よる",date: "2023-05-05",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 4000, description: "Suica",date: "2023-05-05",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1458, description: "松本駅: おやつ",date: "2023-05-05",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 650, description: "あずさご飯（とろたく",date: "2023-05-03",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 151, description: "あずさご飯（みず",date: "2023-05-03",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1728, description: "長野に土産（くっきー",date: "2023-05-03",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2487, description: "あずさご飯（弁当",date: "2023-05-03",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2592, description: "お土産ピーナッツ",date: "2023-05-03",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 736, description: "7:あさ",date: "2023-05-10",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 7900, description: "nintendo: ゼルダ",date: "2023-05-12",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 7623, description: "水道ガス",date: "2023-04-30",categoryId: 10,payerId: 1,budgetId: 1,paymentMethodId: 5,processed: false},
{price: 4000, description: "suica",date: "2023-05-03",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 453, description: "7:よる",date: "2023-05-10",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 170, description: "7:くっきー",date: "2023-05-13",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1094, description: "7:朝",date: "2023-05-12",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 500, description: "Suica（デザート）",date: "2023-05-13",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1800, description: "udemy: go",date: "2023-05-13",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 211, description: "イオン：アイス",date: "2023-05-07",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3590, description: "amazon: タオル",date: "2023-05-09",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 7000, description: "李沙suica",date: "2023-05-03",categoryId: 6,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 4645, description: "水道ガス（TODO: 6月頭）",date: "2023-05-01",categoryId: 10,payerId: 1,budgetId: 1,paymentMethodId: 5,processed: false},
{price: 2000, description: "amazon: タオル",date: "2023-05-09",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 260, description: "7:おやつ",date: "2023-05-14",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 687, description: "カルディ: 豆",date: "2023-05-14",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 138, description: "ファミマ:コッペパン",date: "2023-05-19",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 3,processed: false},
{price: 300, description: "７：昼",date: "2023-05-19",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 378, description: "７：デザート",date: "2023-05-20",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 959, description: "7:デザート",date: "2023-05-21",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 392, description: "7:よる",date: "2023-05-22",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 276, description: "イオン：よる",date: "2023-05-25",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 679, description: "ニトリ：ガラス器",date: "2023-05-24",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1329, description: "github: copilot",date: "2023-05-08",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 8250, description: "明弘美容室",date: "2023-05-14",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 500, description: "スタバ：お返し",date: "2023-05-14",categoryId: 4,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 1162, description: "イオン：食材",date: "2023-05-15",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 105, description: "イオン：おやつ",date: "2023-05-16",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 5000, description: "飲み会",date: "2023-05-19",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 3,processed: false},
{price: 1100, description: "７：mv",date: "2023-05-19",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 3069, description: "イオン：食材",date: "2023-05-21",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1304, description: "イオン：食材",date: "2023-05-20",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 552, description: "イオン：食材",date: "2023-05-24",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 600, description: "７：あさ",date: "2023-05-24",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1100, description: "lindt: お返し",date: "2023-05-14",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 714, description: "イオン：食材",date: "2023-05-14",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 822, description: "イオン：EVE",date: "2023-05-14",categoryId: 2,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 760, description: "７：朝",date: "2023-05-17",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 384, description: "７：よる",date: "2023-05-14",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 4340, description: "イオン：食材",date: "2023-05-13",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3, description: "イオン：袋",date: "2023-05-21",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 558, description: "７：食材",date: "2023-05-20",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1448, description: "イオン:食材",date: "2023-05-23",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 132, description: "ファミマ",date: "2023-05-26",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 3,processed: false},
{price: 485, description: "7:あさ",date: "2023-05-23",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 954, description: "イオン：食材",date: "2023-05-18",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 712, description: "イオン：雑貨",date: "2023-05-16",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 291, description: "７：よるアイス",date: "2023-05-15",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3000, description: "７：mv",date: "2023-05-19",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 3000, description: "paypayチャージ",date: "2023-05-26",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 3058, description: "ヨーカドー：替刃",date: "2023-05-24",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 500, description: "Suica",date: "2023-05-27",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1085, description: "スタバ",date: "2023-05-27",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3800, description: "映画",date: "2023-05-27",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 384, description: "デザート",date: "2023-05-27",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3908, description: "イオン：食材",date: "2023-05-27",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 6200, description: "寿司みさき",date: "2023-05-27",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 546, description: "７：昼",date: "2023-05-28",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 446, description: "ファミマデザート",date: "2023-05-28",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 333, description: "7:あさ",date: "2023-05-29",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 5907, description: "イオンネット：雑貨",date: "2023-06-10",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 149, description: "7:シュー",date: "2023-06-01",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 2,processed: false},
{price: 1362, description: "イオン:食材",date: "2023-06-01",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 916, description: "7:あさ",date: "2023-05-31",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 427, description: "7:よる",date: "2023-05-31",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 855, description: "イオン：食材",date: "2023-06-02",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 330, description: "イオン：よる",date: "2023-05-29",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 961, description: "イオン：デザート",date: "2023-06-10",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 589, description: "７：デザート",date: "2023-06-02",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 3957, description: "イオン：食材",date: "2023-06-03",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3586, description: "都路里パフェ",date: "2023-06-04",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1666, description: "日比谷：パン",date: "2023-06-04",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 496, description: "number sugar",date: "2023-06-04",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 776, description: "日比谷：コーヒー",date: "2023-06-04",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 968, description: "ヨーカドー：日焼け止め",date: "2023-06-04",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 330, description: "7:デザート",date: "2023-06-04",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 886, description: "7:デザート",date: "2023-06-07",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 8850, description: "李沙美容室",date: "2023-05-28",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1329, description: "copilot",date: "2023-06-08",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 537, description: "カルディ",date: "2023-06-10",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1973, description: "イオン：食材",date: "2023-06-10",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 327, description: "イオン：食材",date: "2023-06-07",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 327, description: "イオン：食材",date: "2023-06-07",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 308, description: "イオン：よる",date: "2023-06-05",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 885, description: "イオン：よる",date: "2023-06-06",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1395, description: "角上：食材",date: "2023-06-06",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 211, description: "食材",date: "2023-05-30",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 149, description: "7: シュー",date: "2023-06-01",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 2,processed: false},
{price: 382, description: "7: 食材 ",date: "2023-06-03",categoryId: 1,payerId: 1,budgetId: 2,paymentMethodId: 2,processed: false},
{price: 594, description: "7:小褒美",date: "2023-06-12",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1000, description: "7: mv",date: "2023-06-12",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 592, description: "イオン：食材",date: "2023-06-09",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 470, description: "イオン：カフェオレ",date: "2023-06-11",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1342, description: "イオン：洗顔",date: "2023-06-11",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 200, description: "イオン：アイス　",date: "2023-06-11",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1024, description: "Amazonいろはす",date: "2023-06-14",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1780, description: "Amazon自転車カバー",date: "2023-06-14",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 744, description: "イオン：食材",date: "2023-06-14",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 333, description: "7:あさ",date: "2023-06-15",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 3200, description: "花山うどん",date: "2023-06-17",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1577, description: "スタバ",date: "2023-06-18",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1261, description: "Yahoo! ドレッシングボトル",date: "2023-06-18",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 496, description: "7：デザート",date: "2023-06-21",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1100, description: "7:mv",date: "2023-06-23",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 267, description: "イオン：よる",date: "2023-06-22",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 333, description: "イオン：豚バラ",date: "2023-06-24",categoryId: 1,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 2190, description: "Amazonチーズ削り",date: "2023-06-14",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1164, description: "蔦屋：まっぷる",date: "2023-06-10",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 691, description: "カルディ",date: "2023-06-17",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 451, description: "7:あさ",date: "2023-06-20",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 842, description: "ミスド",date: "2023-06-24",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 362, description: "イオン：食材",date: "2023-06-18",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 849, description: "Amazon鼻腔拡張テープ",date: "2023-06-14",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 560, description: "vlce",date: "2023-06-12",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1557, description: "角上：食材 ",date: "2023-06-17",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1862, description: "イオン：食材",date: "2023-06-17",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 641, description: "イオン: 食材",date: "2023-06-21",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3314, description: "イオン：食材",date: "2023-06-24",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1260, description: "イオン：食材",date: "2023-06-18",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 10307, description: "津田沼肉寿司",date: "2023-06-10",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 6310, description: "電気代",date: "2023-05-01",categoryId: 9,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 875, description: "スギヤマ薬局",date: "2023-06-17",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 11490, description: "お母さん誕生日",date: "2023-06-14",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 675, description: "7:あさ",date: "2023-06-21",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 200, description: "イオン：よる",date: "2023-06-15",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 360, description: "イオン：食材",date: "2023-06-23",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 6640, description: "ヨーカドー: 雑貨",date: "2023-07-02",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 313, description: "ミスド",date: "2023-07-02",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 691, description: "カルディ",date: "2023-07-02",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 864, description: "イオン: 食材",date: "2023-07-02",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1000, description: "paypayチャージ（職場ランチ）",date: "2023-06-16",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1503, description: "ビアードパパ",date: "2023-06-17",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 431, description: "スタバ：クッキー",date: "2023-06-25",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 364, description: "東武ストア: 食材 ",date: "2023-06-14",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 10000, description: "クリーニング（paypayチャージ）",date: "2023-06-18",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1100, description: "7:v",date: "2023-06-18",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 868, description: "カルディ：チーズ",date: "2023-06-24",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 313, description: "ミスド",date: "2023-07-01",categoryId: 3,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 319, description: "イオン: 食材",date: "2023-06-27",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 390, description: "イオン: 食材",date: "2023-06-19",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1434, description: "スタバ",date: "2023-06-18",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 4111, description: "電気代",date: "2023-06-24",categoryId: 9,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1000, description: "amazon: 過去分まとめ",date: "2023-06-25",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1501, description: "スタバ：朝",date: "2023-06-25",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 606, description: "7:デザートと雑巾",date: "2023-06-25",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2000, description: "7:mv",date: "2023-06-26",categoryId: 1,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 386, description: "7:デザート",date: "2023-06-28",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 310, description: "7:昼",date: "2023-06-26",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 656, description: "7:よる",date: "2023-06-26",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 485, description: "7:あさ",date: "2023-06-29",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 982, description: "Amazon レシーバー",date: "2023-06-29",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 91, description: "イオン：牛乳",date: "2023-06-24",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1352, description: "イオン：食材",date: "2023-06-25",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 514, description: "イオン：食材・デザート",date: "2023-06-29",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 460, description: "イオン：食材",date: "2023-06-28",categoryId: 1,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 308, description: "イオン: 食材",date: "2023-06-21",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1100, description: "7:mv",date: "2023-07-02",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 771, description: "7:よる",date: "2023-06-30",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 2305, description: "ケーキ（還暦 ）",date: "2023-07-01",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 13120, description: "牛タン（還暦）",date: "2023-07-01",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 60, description: "google drive",date: "2023-07-01",categoryId: 8,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2291, description: "イオン:食材",date: "2023-07-01",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1542, description: "朝スタバ",date: "2023-07-02",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1430, description: "ダイソー:雑貨",date: "2023-07-02",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 419, description: "7:デザート",date: "2023-07-02",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 251, description: "イオン:アイス",date: "2023-07-03",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 251, description: "7:ひる",date: "2023-07-03",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1100, description: "7:mv",date: "2023-07-06",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 203, description: "7: 朝",date: "2023-07-04",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 4050, description: "明弘美容院",date: "2023-06-24",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1799, description: "角上：食材 ",date: "2023-06-24",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2447, description: "角上：食材 ",date: "2023-07-01",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 254, description: "イオン：アイス",date: "2023-07-03",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 308, description: "イオン：食材 ",date: "2023-07-06",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 657, description: "7:あさ",date: "2023-07-07",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 6407, description: "水道ガス",date: "2023-06-24",categoryId: 10,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2200, description: "ランチ（北嶋さん分も含む）",date: "2023-07-07",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 3,processed: false},
{price: 890, description: "amazon: USBケーブル",date: "2023-07-07",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 439, description: "イオン: 食材",date: "2023-07-07",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 801, description: "7:ひる",date: "2023-07-08",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1804, description: "amazon: kindle postgres",date: "2023-07-08",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 802, description: "スタバケーキ",date: "2023-07-08",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 341, description: "7:アイス",date: "2023-07-09",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1460, description: "KFC",date: "2023-07-09",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 500, description: "Suica",date: "2023-07-09",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 299, description: "7:あさ",date: "2023-07-10",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 303, description: "イオン: よる",date: "2023-07-10",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 312, description: "7:あさあ",date: "2023-07-13",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1000, description: "7:mv",date: "2023-07-14",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 613, description: "7：夜",date: "2023-07-14",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 117, description: "マイバス",date: "2023-07-11",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 2028, description: "イオン: 食材",date: "2023-07-08",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1109, description: "イオン: 食材",date: "2023-07-12",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 4378, description: "イオン: キッキンラック",date: "2023-07-08",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1992, description: "イオン: 食材",date: "2023-07-11",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 498, description: "7:コーヒーとおやつ",date: "2023-07-15",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 500, description: "Suica",date: "2023-07-15",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 500, description: "Suica",date: "2023-06-17",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 500, description: "Suica",date: "2023-06-17",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 447, description: "7:おやつ",date: "2023-07-16",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 18305, description: "横浜ホテル",date: "2023-08-03",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 180, description: "7: 昼",date: "2023-07-03",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 3555, description: "還暦ケーキ",date: "2023-07-17",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1166, description: "角上：食材",date: "2023-07-08",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 341, description: "イオン：食材",date: "2023-07-13",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 349, description: "イオン：食材",date: "2023-07-14",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 254, description: "イオン:アイス",date: "2023-07-17",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3000, description: "赤れんがプラネタリウム",date: "2023-07-17",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 5170, description: "hands",date: "2023-07-18",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 485, description: "7:あさ",date: "2023-07-18",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 160, description: "7：コーヒー",date: "2023-07-17",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 717, description: "イオン：食材",date: "2023-07-19",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 645, description: "イオン：食材",date: "2023-07-14",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 470, description: "イオン：DVD",date: "2023-07-14",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 254, description: "イオン：食材",date: "2023-07-14",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 120, description: "mac",date: "2023-07-14",categoryId: 1,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 365, description: "まいばす：あさ",date: "2023-07-21",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 4070, description: "すぎむらクリニック：李沙薬",date: "2023-07-22",categoryId: 4,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 914, description: "7:よる",date: "2023-07-21",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1182, description: "7:よる",date: "2023-07-21",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 319, description: "7:アイス",date: "2023-07-22",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1279, description: "イオン食材",date: "2023-07-23",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 663, description: "イオン：食材",date: "2023-07-18",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 2160, description: "イオン：薬",date: "2023-07-23",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1649, description: "角上：食材",date: "2023-07-22",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1018, description: "イオン：食材",date: "2023-07-22",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 34350, description: "うしごろ",date: "2023-08-05",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 4420, description: "電気代",date: "2023-07-23",categoryId: 9,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 352, description: "7:よる",date: "2023-07-24",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 344, description: "7:あさ",date: "2023-07-25",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1100, description: "7：mv",date: "2023-07-25",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1335, description: "ねこねこ食パン",date: "2023-07-16",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 180, description: "まいばす",date: "2023-07-27",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 224, description: "まいばす",date: "2023-07-27",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 194, description: "7：アイス",date: "2023-07-27",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 451, description: "7:あさ",date: "2023-07-29",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 325, description: "イオン：食材",date: "2023-07-27",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 274, description: "イオン：食材",date: "2023-07-27",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 2148, description: "角上：食材",date: "2023-07-29",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 6500, description: "李沙美容院",date: "2023-07-29",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 308, description: "イオン：よる",date: "2023-07-28",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 171, description: "まいばす：朝",date: "2023-07-28",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 626, description: "銀だこ",date: "2023-07-29",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2422, description: "イオン：食材",date: "2023-07-29",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 7100, description: "6th: ランチ",date: "2023-07-23",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2036, description: "スタバ",date: "2023-07-29",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 490, description: "イオン:食材",date: "2023-07-30",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 60, description: "Google ",date: "2023-08-01",categoryId: 8,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 5297, description: "Amazon: 雑貨",date: "2023-08-02",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 10000, description: "keychron 30,597 ちばぎん",date: "2023-07-19",categoryId: 11,payerId: 1,budgetId: 2,paymentMethodId: 2,processed: false},
{price: 10597, description: "keychron 30,597 ボーナス",date: "2023-07-19",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 56020, description: "九州飛行機",date: "2023-07-29",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 45650, description: "九州宿",date: "2023-07-29",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 5320, description: "赤レンガランチ",date: "2023-08-05",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 4900, description: "茅野→新宿",date: "2023-07-18",categoryId: 6,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 1320, description: "松本→茅野",date: "2023-08-06",categoryId: 6,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 10140, description: "新宿→茅野",date: "2023-07-18",categoryId: 6,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 10840, description: "amazon: 金井お返し",date: "2023-08-06",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 656, description: "イオン：食材",date: "2023-08-02",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 968, description: "イオン：食材",date: "2023-08-06",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1697, description: "横浜朝パン",date: "2023-08-06",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 289, description: "まいばす：昼",date: "2023-08-04",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 385, description: "まいばす：朝",date: "2023-08-04",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 278, description: "まいばす：昼",date: "2023-07-31",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 490, description: "イオン：よる",date: "2023-08-01",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 171, description: "まいばす：朝",date: "2023-08-01",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1135, description: "イオン：食材",date: "2023-08-02",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1000, description: "7:mv",date: "2023-08-06",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 427, description: "7：デザート",date: "2023-08-06",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1000, description: "Suica",date: "2023-08-05",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1000, description: "Suica",date: "2023-08-06",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1429, description: "copilot",date: "2023-08-08",categoryId: 8,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3000, description: "paypay",date: "2023-08-03",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 2,processed: false},
{price: 345, description: "帰省飲み物",date: "2023-08-10",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1059, description: "7: よるごはん",date: "2023-08-13",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3313, description: "イオン：食材",date: "2023-08-14",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3802, description: "長野仲見世通り：お土産",date: "2023-08-13",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 10000, description: "keychron 30,597 財布",date: "2023-07-19",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 2,processed: false},
{price: 375, description: "イオン：よる",date: "2023-08-07",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 117, description: "まいばす：昼",date: "2023-08-07",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 106, description: "まいばす：朝",date: "2023-08-07",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 547, description: "イオン：味の素ボトル",date: "2023-08-14",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 4748, description: "電気代",date: "2023-08-01",categoryId: 9,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 9834, description: "美容院+ワックス",date: "2023-08-16",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 447, description: "イオン：食材",date: "2023-08-16",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1095, description: "イオン：雑貨",date: "2023-08-06",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 537, description: "カルディ",date: "2023-08-08",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 213, description: "イオン：よる",date: "2023-08-08",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 289, description: "まいばす：ひる",date: "2023-08-09",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 508, description: "イオン：よる",date: "2023-08-09",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 203, description: "まいばす：ひる",date: "2023-08-10",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 944, description: "シャトレーゼ",date: "2023-08-11",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2380, description: "南アルプス村: パンや",date: "2023-08-12",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 138, description: "famima: ガム",date: "2023-08-08",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 106, description: "まいばす：朝",date: "2023-08-08",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 923, description: "不二家",date: "2023-08-07",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 726, description: "横浜プロント",date: "2023-08-05",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 500, description: "suica",date: "2023-08-10",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 4000, description: "suica",date: "2023-08-13",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1000, description: "suica",date: "2023-08-05",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2300, description: "長野帰り弁当",date: "2023-08-10",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 170, description: "7:くっきー",date: "2023-08-16",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 289, description: "まいばす: ひる",date: "2023-08-17",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 117, description: "まいばす: あさ",date: "2023-08-17",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 106, description: "まいばす朝",date: "2023-08-18",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 171, description: "まいばす昼",date: "2023-08-18",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 334, description: "7：昼",date: "2023-08-18",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 3822, description: "amazon: サーバーとコースター",date: "2023-08-19",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1784, description: "amazon: 布巾掛けとか",date: "2023-08-19",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1960, description: "大戸屋: ランチ",date: "2023-08-19",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1706, description: "カルディ：豆とジェノベーゼ",date: "2023-08-19",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 10609, description: "イオンネット",date: "2023-08-16",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 642, description: "イオン：シャンプー",date: "2023-07-31",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 3526, description: "ガス・水道代",date: "2023-07-01",categoryId: 10,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 676, description: "イオン：食材",date: "2023-08-08",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 599, description: "イオン：食材",date: "2023-08-08",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1481, description: "イオン：食材",date: "2023-08-15",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 276, description: "7: ドーナツ",date: "2023-08-16",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 278, description: "イオン：食材",date: "2023-08-17",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 4000, description: "suica",date: "2023-08-13",categoryId: 6,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 500, description: "Suica",date: "2023-08-20",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 632, description: "7:小褒美",date: "2023-08-19",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 779, description: "7:朝ごはん",date: "2023-08-19",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 300, description: "まいばす昼",date: "2023-08-21",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1562, description: "software design",date: "2023-08-21",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 593, description: "7:あさ",date: "2023-08-22",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 514, description: "イオン:食材",date: "2023-08-21",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 322, description: "まいばすひる",date: "2023-08-22",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 973, description: "イオン:食材",date: "2023-08-22",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1080, description: "ドットインストール",date: "2023-08-25",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 106, description: "まいばす：朝",date: "2023-08-18",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 97, description: "イオン：よる",date: "2023-08-15",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 609, description: "イオン：食材",date: "2023-08-22",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 588, description: "イオン：食材",date: "2023-08-23",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 96, description: "まいばすひる",date: "2023-08-15",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 159, description: "イオン：よる",date: "2023-08-18",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 7000, description: "4c飲み会",date: "2023-08-26",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 3,processed: false},
{price: 1661, description: "7: 朝",date: "2023-08-26",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2837, description: "イオン：食材",date: "2023-08-26",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 877, description: "のどぬーる",date: "2023-08-28",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1911, description: "イオン：休養食料 ",date: "2023-08-28",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1538, description: "コンビニ雑貨食料",date: "2023-08-30",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2390, description: "モンペリエ",date: "2023-09-09",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 5079, description: "ガス水道代",date: "2023-08-31",categoryId: 10,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1848, description: "イオン: 薬（るる）",date: "2023-08-29",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1059, description: "7:あさ",date: "2023-08-23",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 859, description: "イオン: 食材",date: "2023-08-29",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 941, description: "イオン：食材",date: "2023-08-31",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1100, description: "マツキヨ薬",date: "2023-08-31",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1468, description: "イオん食材？",date: "2023-08-31",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 2899, description: "検査キット",date: "2023-08-31",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1415, description: "イオン: 食材",date: "2023-09-01",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1058, description: "イオン: 食材",date: "2023-09-02",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1480, description: "KFC",date: "2023-09-02",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1460, description: "マツキヨ薬飴",date: "2023-09-02",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 495, description: "7：昼",date: "2023-09-04",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 289, description: "マイバス昼",date: "2023-09-05",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 700, description: "イオン:食材",date: "2023-09-04",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 192, description: "7:よる",date: "2023-09-05",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 816, description: "7:あさ",date: "2023-09-06",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 520, description: "イオン食材",date: "2023-09-05",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 362, description: "イオン夜",date: "2023-09-07",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1472, description: "copilot",date: "2023-09-08",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 2350, description: "タリーズ",date: "2023-09-09",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 324, description: "7あさ",date: "2023-09-08",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 482, description: "7ひる",date: "2023-09-08",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 386, description: "7ひる",date: "2023-09-07",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 8060, description: "コンタクト",date: "2023-09-09",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2592, description: "房の駅ピーナッツ",date: "2023-09-09",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1840, description: "イオン食材雑貨",date: "2023-09-09",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2978, description: "イオン食材",date: "2023-08-19",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 279, description: "ニトリスポンジ",date: "2023-08-21",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 2477, description: "マツキヨのどスプレーのどあめ",date: "2023-08-31",categoryId: 4,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1194, description: "beard papa",date: "2023-09-02",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 3240, description: "高島屋退職",date: "2023-09-08",categoryId: 4,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 2754, description: "高島屋退職",date: "2023-09-07",categoryId: 4,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 1380, description: "イオン　李沙剃刀",date: "2023-09-10",categoryId: 4,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 2325, description: "イオン食材",date: "2023-09-10",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1395, description: "角上食材",date: "2023-09-11",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 939, description: "イオン食材",date: "2023-09-12",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 858, description: "Amazon鼻テープ",date: "2023-09-13",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 312, description: "7あさ",date: "2023-09-14",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 9900, description: "李沙美容院",date: "2023-09-13",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 610, description: "すぎむらクリニック：李沙薬",date: "2023-09-12",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 159, description: "イオン食材",date: "2023-09-13",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 341, description: "イオン食材",date: "2023-09-12",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 842, description: "イオン食材",date: "2023-09-11",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 2376, description: "船橋東武誕プレ",date: "2023-09-13",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1490, description: "李沙お薬代",date: "2023-09-13",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 587, description: "イオン夜",date: "2023-09-14",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 663, description: "イオン夜",date: "2023-09-08",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 323, description: "7あさ",date: "2023-09-15",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 500, description: "Suica",date: "2023-09-17",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 4000, description: "Suica",date: "2023-09-16",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1818, description: "長野スタバ",date: "2023-09-17",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 850, description: "船橋スタバ",date: "2023-09-16",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1018, description: "帰省セブン",date: "2023-09-16",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1860, description: "南アルプス村クロワッサン",date: "2023-09-16",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 400, description: "南アルプス村アイス",date: "2023-09-16",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 3000, description: "Suica李沙",date: "2023-09-17",categoryId: 6,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 4000, description: "Suica李沙",date: "2023-09-16",categoryId: 6,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 4000, description: "Suica",date: "2023-09-17",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 905, description: "イオン食材",date: "2023-09-15",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 437, description: "マツキヨ歯ブラシ",date: "2023-09-18",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 171, description: "まいばす昼",date: "2023-09-19",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1778, description: "Amazonスポンジ",date: "2023-09-19",categoryId: 2,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 550, description: "7デザート",date: "2023-09-19",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 7980, description: "amazon: ルーター",date: "2023-09-20",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 691, description: "カルディ",date: "2023-09-18",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 313, description: "ヨーカドー糸ようじ",date: "2023-09-18",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 246, description: "まいばす昼",date: "2023-09-21",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 323, description: "7朝",date: "2023-09-22",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 972, description: "イオン食材",date: "2023-09-21",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 7505, description: "メガネ",date: "2023-09-23",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 2280, description: "大戸屋",date: "2023-09-23",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 550, description: "７：デザート",date: "2023-09-22",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 745, description: "イオン",date: "2023-09-22",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 877, description: "Gホイホイ",date: "2023-09-22",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1196, description: "イオン",date: "2023-09-22",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 3800, description: "李沙歯医者",date: "2023-09-22",categoryId: 4,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 4220, description: "いまきん食堂",date: "2023-09-24",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 568, description: "7朝ごはん",date: "2023-09-24",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 600, description: "鍋ヶ滝",date: "2023-09-24",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 800, description: "水前寺",date: "2023-09-25",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 500, description: "Suica",date: "2023-09-25",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 880, description: "黒亭ちびたま",date: "2023-09-26",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 1030, description: "黒亭卵入りラーメン",date: "2023-09-26",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 596, description: "イオン食材",date: "2023-09-19",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 13800, description: "disney: チケット",date: "2023-09-02",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 500, description: "Suica",date: "2023-09-26",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 200, description: "水前寺駐車場",date: "2023-09-25",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 2000, description: "黒川paypay",date: "2023-09-24",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1512, description: "熊本駅土産",date: "2023-09-25",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 788, description: "熊本空港土産",date: "2023-09-26",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 170, description: "成田空港朝ごはん",date: "2023-09-24",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1700, description: "熊本城入場",date: "2023-09-26",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 2752, description: "熊本ガソリン",date: "2023-09-26",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 268, description: "ファミマ水",date: "2023-09-25",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 4350, description: "明弘美容院",date: "2023-09-27",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1100, description: "熊本駅くまもん",date: "2023-09-26",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 486, description: "熊本駅醤油",date: "2023-09-26",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 5500, description: "珈琲回廊",date: "2023-09-26",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2100, description: "カフェスイッチランチ",date: "2023-09-26",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 440, description: "熊本城絵馬",date: "2023-09-26",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 430, description: "熊本駅いきなり団子",date: "2023-09-26",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 440, description: "熊本城陣太鼓ソフト",date: "2023-09-26",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 6820, description: "五郎八夜ご飯",date: "2023-09-25",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 4884, description: "らくだ山昼ごはん",date: "2023-09-25",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 2000, description: "山みず木（宿）チェックアウト時",date: "2023-09-25",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 21510, description: "レンタカー",date: "2023-09-24",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2030, description: "角上",date: "2023-09-18",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 600, description: "南アルプス村りんごバター",date: "2023-09-17",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1000, description: "熊本空港搭乗前（aso milkとか）",date: "2023-09-26",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 7572, description: "熊本駅お土産",date: "2023-09-26",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1110, description: "ASO MILK FACTOTY: ソフト x 2",date: "2023-09-24",categoryId: 6,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 199, description: "ニトリジップロック",date: "2023-09-22",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 660, description: "角上巻き寿司",date: "2023-09-29",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1420, description: "李沙歯医者",date: "2023-09-29",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 16471, description: "beamsデニム",date: "2023-09-30",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 451, description: "7デザート",date: "2023-09-30",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3680, description: "ペニーレイン",date: "2023-09-30",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 468, description: "7おやつ",date: "2023-09-29",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 4620, description: "OSSDB Silver",date: "2023-09-29",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1029, description: "イオン",date: "2023-10-01",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 4263, description: "イオン薬",date: "2023-10-01",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 200, description: "7：昼",date: "2023-10-02",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 5241, description: "イオンネット",date: "2023-10-02",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 451, description: "7ひる",date: "2023-10-03",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 171, description: "まいばすあさ",date: "2023-10-03",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1118, description: "7",date: "2023-10-04",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 549, description: "イオン",date: "2023-10-03",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 172, description: "7あさ",date: "2023-10-05",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 475, description: "7昼",date: "2023-10-05",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 537, description: "7昼",date: "2023-10-06",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 278, description: "7朝",date: "2023-10-06",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 574, description: "7夜",date: "2023-10-06",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 5079, description: "ガス水道",date: "2023-09-30",categoryId: 10,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 7715, description: "電気代",date: "2023-09-30",categoryId: 9,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 4000, description: "disney: （といまに）",date: "2023-09-28",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 165, description: "disney: NewDays水",date: "2023-09-28",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 509, description: "disney: 7水と朝ごはん",date: "2023-09-28",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3756, description: "ガス水道",date: "2023-10-07",categoryId: 10,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 151, description: "マツキヨティッシュ",date: "2023-10-07",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 190, description: "黒川温泉ヨーグルト",date: "2023-09-24",categoryId: 6,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 907, description: "イオン",date: "2023-09-15",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 244, description: "イオン",date: "2023-09-15",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 1518, description: "イオンパブロン",date: "2023-09-27",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 299, description: "イオン",date: "2023-09-27",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 311, description: "7あさごはん",date: "2023-10-01",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 110, description: "daiso: コロコロ",date: "2023-09-22",categoryId: 2,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 1956, description: "王将",date: "2023-10-07",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1238, description: "イオン",date: "2023-09-29",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 546, description: "イオン月見団子",date: "2023-09-29",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1271, description: "角上",date: "2023-09-30",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1411, description: "イオン",date: "2023-09-30",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 748, description: "ララポミスド",date: "2023-10-07",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3080, description: "上島珈琲",date: "2023-10-07",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 14850, description: "beams: 服（20,790）",date: "2023-10-07",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 503, description: "イオン",date: "2023-10-13",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 5465, description: "beams: 服（24,240）",date: "2023-10-07",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 18775, description: "beams: 服（20,790）",date: "2023-10-07",categoryId: 3,payerId: 1,budgetId: 3,paymentMethodId: 1,processed: false},
{price: 262, description: "7食材",date: "2023-10-10",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 20000, description: "車の頭金",date: "2023-10-14",categoryId: 5,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 10000, description: "車の頭金",date: "2023-10-14",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 5940, description: "beams: 服（24,240）",date: "2023-10-07",categoryId: 3,payerId: 1,budgetId: 3,paymentMethodId: 1,processed: false},
{price: 480, description: "ベローチェ",date: "2023-10-09",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 3657, description: "イオン",date: "2023-10-09",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 224, description: "まいばす朝",date: "2023-10-12",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 362, description: "7デザート",date: "2023-10-11",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 798, description: "7昼",date: "2023-10-11",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 500, description: "Suica",date: "2023-10-08",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 500, description: "Suica",date: "2023-10-07",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 138, description: "7朝",date: "2023-10-10",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 352, description: "7デザート",date: "2023-10-07",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 514, description: "7デザート",date: "2023-10-06",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 118, description: "7:キャベツ",date: "2023-10-12",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 324, description: "7朝",date: "2023-10-13",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 324, description: "7昼",date: "2023-10-13",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 172, description: "7あさ",date: "2023-10-16",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1628, description: "ルル",date: "2023-10-11",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 838, description: "7デザート",date: "2023-10-15",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 474, description: "7昼",date: "2023-10-15",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 494, description: "famima夜",date: "2023-10-14",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 365, description: "7キャベツ",date: "2023-10-14",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1201, description: "7昼",date: "2023-10-14",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 668, description: "イオン昼",date: "2023-10-18",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 128, description: "まいばすあさ",date: "2023-10-19",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 533, description: "イオン夜",date: "2023-10-19",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 128, description: "7朝",date: "2023-10-20",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 800, description: "disney: クランチチョコ",date: "2023-09-28",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2640, description: "イルビゾンテ（イベント）",date: "2023-10-21",categoryId: 7,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1586, description: "スタバ（イベント）",date: "2023-10-21",categoryId: 7,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 600, description: "disney: チキンレッグ",date: "2023-09-28",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 4450, description: "disney: バー",date: "2023-09-28",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1050, description: "disney: チュロスと飲み物",date: "2023-09-28",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 400, description: "disney: ポップコーン",date: "2023-09-28",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 500, description: "disney: ティポトルタ",date: "2023-09-28",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 500, description: "disney: ユカタンドッグ",date: "2023-09-28",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 400, description: "disney: リトルグリーンマン",date: "2023-09-28",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1500, description: "disney: うきわまん",date: "2023-09-28",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1823, description: "角上",date: "2023-10-15",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 690, description: "ヨーカドー",date: "2023-10-15",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3756, description: "水道ガス",date: "2023-10-01",categoryId: 10,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 877, description: "ヨーカドー",date: "2023-10-16",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 4234, description: "キルフェボン（イベント）",date: "2023-10-21",categoryId: 7,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 8800, description: "vendomeaohama: ネックレス（イベント）",date: "2023-10-21",categoryId: 7,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 400, description: "disney: いろはす",date: "2023-09-28",categoryId: 5,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 650, description: "dean deluca: 巨峰ジュース",date: "2023-10-21",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2106, description: "イオン",date: "2023-10-15",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1200, description: "disney: ノーチラスギャレー",date: "2023-09-28",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 373, description: "イオン",date: "2023-10-20",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 4271, description: "イオン",date: "2023-10-21",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 343, description: "7",date: "2023-10-16",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 8765, description: "電気代",date: "2023-10-01",categoryId: 9,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 500, description: "suica",date: "2023-10-21",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 500, description: "suica",date: "2023-10-14",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 4500, description: "イオン",date: "2023-10-22",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 18000, description: "宮崎牛（ふるさと納税）",date: "2023-10-22",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 21000, description: "牛切り落とし（ふるさと納税）",date: "2023-10-22",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 5000, description: "雲仙ハム（ふるさと納税）",date: "2023-10-22",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 24000, description: "近江牛（ふるさと納税）",date: "2023-10-22",categoryId: 5,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2400, description: "ping-t（OSS-DB Silver）",date: "2023-10-22",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 492, description: "7:よるごはん",date: "2023-10-24",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 231, description: "7",date: "2023-10-22",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 280, description: "7",date: "2023-10-24",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 481, description: "7",date: "2023-10-24",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 690, description: "ヨーカドー",date: "2023-10-21",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 8007, description: "母誕生日ギフト",date: "2023-10-24",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 447, description: "イオン夜",date: "2023-10-26",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 128, description: "まいばす朝",date: "2023-10-27",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 844, description: "イオン",date: "2023-10-27",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 691, description: "カルディ",date: "2023-10-28",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 3520, description: "イオン",date: "2023-10-28",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 2000, description: "paypay昼ごはんとんかつ",date: "2023-10-27",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 2,processed: false},
{price: 594, description: "7デザート",date: "2023-10-29",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1432, description: "スタバ",date: "2023-10-29",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 10000, description: "李沙の誕生日バックと傘",date: "2023-10-29",categoryId: 7,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 291, description: "コチュジャン",date: "2023-10-28",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 396, description: "7食材",date: "2023-10-28",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 416, description: "7朝",date: "2023-10-25",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 590, description: "李沙お薬",date: "2023-10-28",categoryId: 4,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 368, description: "7：夜",date: "2023-10-30",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 612, description: "7朝",date: "2023-11-01",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1100, description: "mv",date: "2023-10-31",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1100, description: "mv",date: "2023-10-31",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 1697, description: "イオン",date: "2023-11-03",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 890, description: "錦糸町珈琲",date: "2023-11-03",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 955, description: "蔵前スコーン",date: "2023-11-03",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 62, description: "蔵前水",date: "2023-11-03",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 334, description: "まいばす朝",date: "2023-11-02",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 990, description: "daiso: ゴミ袋とか",date: "2023-11-01",categoryId: 2,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1001, description: "イオン",date: "2023-11-01",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 168, description: "famimaコッペパン",date: "2023-11-02",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 590, description: "李沙薬",date: "2023-10-28",categoryId: 4,payerId: 1,budgetId: 2,paymentMethodId: 2,processed: false},
{price: 1110, description: "李沙診察",date: "2023-10-28",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 159, description: "イオン",date: "2023-11-02",categoryId: 3,payerId: 2,budgetId: 1,paymentMethodId: 4,processed: false},
{price: 343, description: "7: 食材",date: "2023-10-25",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 5000, description: "飲み会 ",date: "2023-11-02",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 3,processed: false},
{price: 4500, description: "蔵前ハンバーガー",date: "2023-11-03",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 3,processed: false},
{price: 384, description: "ローソンデザート",date: "2023-11-04",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 386, description: "ローソンデザート",date: "2023-11-01",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 27000, description: "劇団四季",date: "2023-11-05",categoryId: 7,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 233, description: "イオン",date: "2023-10-23",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 108, description: "7: パン",date: "2023-10-31",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 127, description: "イオン",date: "2023-11-01",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 2,processed: false},
{price: 188, description: "7昼",date: "2023-11-06",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 510, description: "エクセルシオール",date: "2023-11-05",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 2485, description: "イオン",date: "2023-11-05",categoryId: 1,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 622, description: "ローソンデザート",date: "2023-11-05",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 1033, description: "7",date: "2023-11-08",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 192, description: "ローソンデザート",date: "2023-11-07",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
{price: 288, description: "7でざーと",date: "2023-11-06",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 384, description: "ローソンデザート",date: "2023-11-08",categoryId: 3,payerId: 1,budgetId: 1,paymentMethodId: 1,processed: false},
{price: 480, description: "veloce",date: "2023-11-09",categoryId: 3,payerId: 1,budgetId: 2,paymentMethodId: 1,processed: false},
    ]
  })

  // await prisma.customCountingItem.create({
  //   data: {
  //     id: 1,
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
  //                     id: 5,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 6,
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
  //     id: 2,
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
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 6,
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
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 6,
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
  //     id: 3,
  //     name: "月次精算用（明弘）",
  //     code: "monthly-akihiro",
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
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 10,
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
  //                     id: 5,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 6,
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
  //             ],
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.customCountingItem.create({
  //   data: {
  //     id: 4,
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
  //               {
  //                 category: {
  //                   connect: {
  //                     id: 10,
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
  //                     id: 4,
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
  // await prisma.customCountingItem.create({
  //   data: {
  //     id: 5,
  //     name: "李沙→明弘",
  //     code: "risa-to-akihiro",
  //     terms: {
  //       create: [
  //         { // NOTE: 明弘が払った共同支出の1/2
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
  //                     id: 5,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 6,
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
  //             ],
  //           },
  //         },
  //         { // NOTE: 李沙が払った共同支出の1/2
  //           sign: "MINUS",
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
  //                     id: 4,
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
  //         { // NOTE: 明弘が払った李沙の個人支出（服一緒に買う時とか）
  //           sign: "PLUS",
  //           coefficient: 1,
  //           processed: [false],
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
  //                     id: 5,
  //                   },
  //                 },
  //               },
  //               {
  //                 paymentMethod: {
  //                   connect: {
  //                     id: 6,
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
  //                     id: 3,
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

  // await prisma.countingItem.create({
  //   data: {
  //     name: '共同支出（明弘支払）',
  //     code: 'shared-akihiro',
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
  //         {
  //           paymentMethod: {
  //             connect: {
  //               id: 2,
  //             },
  //           }
  //         },
  //         {
  //           paymentMethod: {
  //             connect: {
  //               id: 3,
  //             },
  //           }
  //         },
  //         {
  //           paymentMethod: {
  //             connect: {
  //               id: 5,
  //             },
  //           }
  //         },
  //         {
  //           paymentMethod: {
  //             connect: {
  //               id: 6,
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
  // await prisma.countingItem.create({
  //   data: {
  //     name: '共同支出（李沙支払）',
  //     code: 'shared-risa',
  //     processed: [true, false],
  //     paymentMethods: {
  //       create: [
  //         {
  //           paymentMethod: {
  //             connect: {
  //               id: 4,
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
  //               id: 2,
  //             },
  //           }
  //         },
  //       ],
  //     },
  //   },
  // })
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
