import hennaPhoto from "@/assets/hair/henna.jpg";
import herbalColor1Photo from "@/assets/hair/herbal-color-1.jpg";
import herbalColor3Photo from "@/assets/hair/herbal-color-3.jpg";
import herbalColor5Photo from "@/assets/hair/herbal-color-5.jpg";
import herbalColor7Photo from "@/assets/hair/herbal-color-7.jpg";
import herbalColor9Photo from "@/assets/hair/herbal-color-9.jpg";

// 白髪に対する仕上がりのイメージ。ガイドの色見本・商品タイル・詳細パネルで共有する。
export type HairColor = {
  name: string;
  color: string;
  // 公式サイトの染毛テストの写真から、白い毛を染めた束の一部を切り出したもの
  photo: string;
  // 色見本から開く代表の商品
  product: string;
  items: string[];
};

export const hairColors: HairColor[] = [
  {
    name: "オレンジ系",
    color: "#a54d28",
    photo: hennaPhoto,
    product: "マハラニヘナ 石臼挽き",
    items: ["マハラニヘナ 石臼挽き", "マハラニヘナ ファイン粉末", "マハラニヘナ (機械挽き)"],
  },
  {
    name: "ライトブラウン",
    color: "#986439",
    photo: herbalColor1Photo,
    product: "ハーバルカラー1 ライトブラウン",
    items: ["ハーバルカラー1 ライトブラウン"],
  },
  {
    name: "ブラウン",
    color: "#70472f",
    photo: herbalColor3Photo,
    product: "ハーバルカラー3 ブラウン",
    items: ["ハーバルカラー3 ブラウン"],
  },
  {
    name: "ダークブラウン",
    color: "#493425",
    photo: herbalColor5Photo,
    product: "ハーバルカラー5 ダークブラウン",
    items: ["ハーバルカラー5 ダークブラウン"],
  },
  {
    name: "ソフトブラック",
    color: "#2e2c27",
    photo: herbalColor7Photo,
    product: "ハーバルカラー7 ソフトブラック",
    items: ["ハーバルカラー7 ソフトブラック"],
  },
  {
    name: "ブルーブラック",
    color: "#1f2532",
    photo: herbalColor9Photo,
    product: "ハーバルカラー9 ブルーブラック",
    items: ["ハーバルカラー9 ブルーブラック"],
  },
];

export const hairColorOf = (itemName: string) =>
  hairColors.find((color) => color.items.includes(itemName));
