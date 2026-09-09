import hennaImg from "@/assets/product-henna.jpg";
import indigoImg from "@/assets/indigo-leaf-powder-960.webp";
import herbalColorImg from "@/assets/indigo-leaf-powder-960.webp";
import colorTreatmentImg from "@/assets/product-colortreatment.jpg";
import shampooImg from "@/assets/herbal-shampoo-powder-960.webp";
import shampooFloralImg from "@/assets/herbal-shampoo-powder-960.webp";
import shampooRefreshImg from "@/assets/herbal-shampoo-powder-960.webp";
import shampooSpecialImg from "@/assets/herbal-shampoo-powder-960.webp";
import singleHerbsImg from "@/assets/product-single-herbs.jpg";
import hairOilImg from "@/assets/product-hairoil.jpg";
import bodyCareImg from "@/assets/product-bodycare.jpg";
import roseImg from "@/assets/product-rose.jpg";
import agricultureImg from "@/assets/product-agriculture.jpg";
import headOilImg from "@/assets/product-headoil.jpg";
import oilsImg from "@/assets/product-oils.jpg";
import bodyScrubImg from "@/assets/product-bodyscrub.jpg";
import skincareImg from "@/assets/product-skincare.jpg";
import facepackImg from "@/assets/product-facepack.jpg";
import pointCareImg from "@/assets/product-pointcare.jpg";
import maharaniHero from "@/assets/product-henna.jpg";
import atharvaHero from "@/assets/brand-atharva.jpg";

export type DetailLink = "/products/henna" | "/products/indigo" | "/products/shampoo";

export type Item = {
  name: string;
  desc: string;
  image?: string;
  to?: DetailLink;
  shopUrl?: string;
};

export type Category = {
  id: string;
  ja: string;
  intro: string;
  image: string;
  accent: string;
  bg: string;
  items: Item[];
};

export type Group = {
  id: string;
  ja: string;
  lead: string;
  categories: Category[];
};

export type Brand = {
  key: "maharani" | "atharva";
  path: "/products/maharani" | "/products/atharva";
  name: string;
  reading: string;
  tagline: string;
  intro: string;
  hero: string;
  accent: string;
  bg: string;
  groups: Group[];
};

export const maharani: Brand = {
  key: "maharani",
  path: "/products/maharani",
  name: "マハラニ",
  reading: "Maharani",
  tagline: "髪を染める、髪を洗う。インドハーブのヘアケア。",
  intro:
    "インドのヘナとハーブを、髪のお手入れに。産地の生産者とともに原料や製法に向き合う、アートビーングのヘアケアブランドです。",
  hero: maharaniHero,
  accent: "text-terracotta",
  bg: "bg-terracotta-soft/25",
  groups: [
    {
      id: "color",
      ja: "染めるヘアケア",
      lead: "白髪を色で包む、ヘナとインドハーブの染毛シリーズ。",
      categories: [
        {
          id: "henna",
          ja: "ヘナ",
          intro: "鮮度と染毛力にこだわった、マハラニの原点。オレンジ〜赤系に染まります。",
          image: hennaImg,
          accent: "text-terracotta",
          bg: "bg-terracotta-soft/25",
          items: [
            {
              name: "マハラニヘナ 石臼挽き",
              desc: "石臼でゆっくり挽くことで葉の成分を損なわず、鮮度・粘り・染毛力に優れた看板商品。ヘナ歴の長い方にとくにおすすめです。",
              to: "/products/henna",
            },
            {
              name: "マハラニヘナ ファイン粉末",
              desc: "きめ細かく純度が高く、なめらかなペーストに仕上がるためハケ塗りにも最適。塗布と洗い流しがしやすい一品です。",
            },
            {
              name: "マハラニヘナ (機械挽き)",
              desc: "石臼挽きと同等の良質な葉を使用し、高品質をリーズナブルにお試しいただける定番品です。",
            },
            {
              name: "オーガニック ヘナコンシーラー",
              desc: "ヘナ染め後にちらつく白髪や、伸びてきた根元を素早くカバー。スティックタイプで外出先や旅行にも携帯できます。",
            },
          ],
        },
        {
          id: "indigo",
          ja: "インディゴ",
          intro: "藍草の葉100%。ヘナの後染めとして重ね、ブラウンからブラックまで色をコントロール。",
          image: indigoImg,
          accent: "text-indigo-deep",
          bg: "bg-indigo-deep/10",
          items: [
            {
              name: "インディゴ",
              desc: "ヘナの赤みを抑える後染め用の藍草100%。染め方によって、ブラウンからダークブラウン、ほぼ黒まで自由に色合いを演出できます。",
              to: "/products/indigo",
            },
          ],
        },
        {
          id: "herbalcolor",
          ja: "ハーバルカラー",
          intro: "ヘナとインディゴを中心に配合。リタッチを重ねて白髪を自然な色合いに。",
          image: herbalColorImg,
          accent: "text-leaf",
          bg: "bg-leaf-soft/30",
          items: [
            {
              name: "ハーバルカラー1 ライトブラウン",
              desc: "1〜2週に一度のリタッチを続けることで、白髪部分がライトブラウン〜ブラウン系に少しずつ定着します。",
            },
            {
              name: "ハーバルカラー3 ブラウン",
              desc: "リタッチを重ねるごとに、白髪部分がブラウン〜ダークブラウン系の落ち着いた色合いに馴染んでいきます。",
            },
            {
              name: "ハーバルカラー5 ダークブラウン",
              desc: "短めのリタッチでも、白髪部分がダークブラウン系にしっかりと染まる、深みのある色合いです。",
            },
            {
              name: "ハーバルカラー7 ソフトブラック",
              desc: "ラベンダーの心地よい香りとともに、白髪部分をソフトブラック〜ブラック系へと染め上げます。",
            },
            {
              name: "ハーバルカラー9 ブルーブラック",
              desc: "白髪部分をブラック〜ブルーブラック系へ。深みのある黒を求める方におすすめの色合いです。",
            },
          ],
        },
        {
          id: "colortreatment",
          ja: "カラートリートメント",
          intro: "ヘナを主成分に、お花を加えて香りとトリートメント感を高めたシリーズ。",
          image: colorTreatmentImg,
          accent: "text-terracotta",
          bg: "bg-terracotta-soft/20",
          items: [
            {
              name: "カラートリートメント花ブレンド",
              desc: "主成分はヘナで、使い方も染まり方もヘナと同じ。お花を加えた心地よい香りでヘナタイムを彩ります。",
            },
          ],
        },
      ],
    },
    {
      id: "nocolor",
      ja: "洗う・整える",
      lead: "植物の粉末で洗う・整える。ハーブシャンプーとトリートメント。ヘナを含む商品もあります。",
      categories: [
        {
          id: "kaorukami",
          ja: "ハーブシャンプー 香る髪 基本シリーズ",
          intro: "化学界面活性剤・合成香料・防腐剤は一切不使用。洗いながら髪を整えます。",
          image: shampooImg,
          accent: "text-leaf",
          bg: "bg-leaf-soft/40",
          items: [
            {
              name: "ハーブシャンプー 香る髪",
              desc: "ヘナを配合し、ヘナとの相性が抜群のロングセラー。洗いながらトリートメント効果も得られます。",
              to: "/products/shampoo",
            },
            {
              name: "ハーブシャンプー 香る髪プラス",
              desc: "香る髪のよさをそのままに、ヘナを抑え3種のハーブを加えてトリートメント力を高めた商品です。",
            },
            {
              name: "ハーブシャンプー 香る髪ベーシック",
              desc: "「髪を洗う」という基本に忠実に、シンプルな配合でしっかりとした洗浄力を実現したハーブシャンプーです。",
            },
          ],
        },
        {
          id: "floral",
          ja: "香る髪 お花の香りシリーズ",
          intro: "基本シリーズにお花の香りをプラス。ハーブ特有の匂いが苦手な方にも。",
          image: shampooFloralImg,
          accent: "text-leaf",
          bg: "bg-leaf-soft/30",
          items: [
            {
              name: "香る髪ラベンダー",
              desc: "ラベンダーはインドハーブと相性がよく、香りに癒されながらハーブ特有の匂いを和らげてくれます。",
            },
            {
              name: "香る髪アロマプラス",
              desc: "ラベンダーとイランイランの華やかな香りで、ハーブ特有の香りが苦手な方にも心地よいシャンプータイムを。",
            },
            {
              name: "香る髪花ブレンド",
              desc: "イランイランの花の香りに包まれ、ハイビスカスが髪に潤いを与えるしっとりしなやかな仕上がりです。",
            },
          ],
        },
        {
          id: "refresh",
          ja: "香る髪 さっぱりシリーズ",
          intro: "洗い上がりのさっぱり感をアップ。汗ばむ季節や脂分が気になる方に。",
          image: shampooRefreshImg,
          accent: "text-leaf",
          bg: "bg-leaf-soft/40",
          items: [
            {
              name: "香る髪オレンジ２",
              desc: "オレンジの爽やかな香りに元気な気持ちになる、すっきりとした洗い上がりのハーブシャンプーです。",
            },
            {
              name: "香る髪ペパーミント",
              desc: "ミント葉とペパーミント精油のダブルミントで、汗ばむ季節にうれしい涼やかな洗い上がりです。",
            },
            {
              name: "香る髪オイリースカルプ",
              desc: "頭皮が脂っぽい方のために、天然の石鹸成分リタを配合。マッサージしながら洗うことで深いさっぱり感が得られます。",
            },
          ],
        },
        {
          id: "special",
          ja: "スペシャルシリーズ",
          intro: "香る髪シリーズとは一線を画した、独自の使用感と仕上がり。",
          image: shampooSpecialImg,
          accent: "text-amber",
          bg: "bg-sand/60",
          items: [
            {
              name: "ヘナシカ洗髪粉",
              desc: "ヘナ、シカカイ、アムラ、ハイビスカス、リタ、ニームなど11種のインドハーブを贅沢にブレンドした洗髪粉です。",
            },
            {
              name: "ニュー香る髪",
              desc: "シカカイを配合せず、香る髪と同様の仕上がりを目指したマイルドな新感覚のハーブシャンプーです。",
            },
          ],
        },
        {
          id: "colorless",
          ja: "カラーレストリートメント",
          intro: "髪に色をつけずに、ハーブでうるおいとハリを与えるトリートメント。",
          image: singleHerbsImg,
          accent: "text-leaf",
          bg: "bg-leaf-soft/25",
          items: [
            {
              name: "カラーレストリートメント (カッシア)",
              desc: "通称ニュートラルヘナ。ヘナのような着色作用はなく、トリートメントと洗浄を担います。",
            },
            {
              name: "カラーレス花ブレンド",
              desc: "髪に色がつかない、染まらないトリートメント。お花の香りで心地よく、素手で塗布できる手軽さも魅力です。",
            },
          ],
        },
      ],
    },
    {
      id: "hairoil",
      ja: "ヘアオイル",
      lead: "洗う前後のひと手間に。髪と頭皮をいたわるオイル。",
      categories: [
        {
          id: "oil",
          ja: "ヘアオイル",
          intro: "ヘナ前のオイルマッサージや、洗髪後の毛先ケアに。軽やかな使用感です。",
          image: hairOilImg,
          accent: "text-amber",
          bg: "bg-amber-soft/35",
          items: [
            {
              name: "アタルバ ヘアオイル",
              desc: "ココナッツオイルの爽やかで甘い香りに7つのハーブが包まれ、髪をサラサラに整える軽い使用感です。",
            },
            {
              name: "ヘッドマッサージオイル・リラックス",
              desc: "香り成分としてカモミールオイルを配合。ヘナの匂いを和らげながら、リラックスタイムを演出します。",
            },
          ],
        },
      ],
    },
    {
      id: "singleherb",
      ja: "単体ハーブ",
      lead: "香る髪シリーズに使われる主要なインドハーブを単体で。自分でブレンドする楽しみも。",
      categories: [
        {
          id: "herbs",
          ja: "洗髪系 単体ハーブ",
          intro: "一種類ずつの粉末で、お好みに合わせて取り入れられます。",
          image: singleHerbsImg,
          accent: "text-leaf",
          bg: "bg-leaf-soft/30",
          items: [
            {
              name: "マハラニ シカカイ",
              desc: "天然の石鹸成分サポニンを含み、頭皮と髪を清浄に保ちながら、毛髪をしなやかに仕上げます。",
            },
            {
              name: "マハラニ アムラ",
              desc: "髪にハリとコシを与えるハーブ。ボリュームが欲しい方や、頭皮と髪をすこやかに保ちたい方に。",
            },
            {
              name: "マハラニ カチュールスガンディ",
              desc: "西洋の香水にも使われるほど香り高いハーブで、ヘアケアやスキンケアに幅広く活用できます。",
            },
            {
              name: "マハラニ ニーム",
              desc: "ハーブシャンプーと一緒に使うと清浄感が増し、ムルタニミッティやアムラと併せれば肌の洗浄にも。",
            },
            {
              name: "マハラニ ムルタニミッティ",
              desc: "油や汚れを吸着する白い泥の粉末で、なめらかなペーストに。フェイスパックやボディ洗浄に活躍します。",
            },
          ],
        },
      ],
    },
    {
      id: "body",
      ja: "ボディケア",
      lead: "髪だけでなく、顔や体の洗浄・パックにも使えるハーブたち。",
      categories: [
        {
          id: "bodywash",
          ja: "洗浄・パック",
          intro:
            "粉末を水で溶いて使うシンプルなケア。泡立たない洗い方に慣れると心地よさが変わります。",
          image: bodyCareImg,
          accent: "text-leaf",
          bg: "bg-sand/60",
          items: [
            {
              name: "アタルバ 洗髪粉",
              desc: "無農薬オレンジピール、シカカイ、アムラ、リタを独自に粉末化。髪はもちろん顔・体の洗浄にも使えます。",
            },
            {
              name: "マハラニ ムルタニミッティ",
              desc: "白い泥の粉末をペースト状にして、フェイスパックやボディの洗浄に。さっぱりとした洗い上がりです。",
            },
          ],
        },
        {
          id: "rose",
          ja: "無農薬栽培ローズ",
          intro: "インドで無農薬栽培されたローザセンティフォリア。暮らしの中で多用途に。",
          image: roseImg,
          accent: "text-terracotta",
          bg: "bg-terracotta-soft/20",
          items: [
            {
              name: "無農薬ローズ粉末",
              desc: "ピンク色の花びらをていねいに乾燥・粉末化。肌のお手入れやフェイスパックに使います。",
            },
          ],
        },
      ],
    },
    {
      id: "farm",
      ja: "国産・無農薬 農産物",
      lead: "山梨の自社圃場で10年以上育てる在来種。スタッフ用の余剰分をおすそ分け。",
      categories: [
        {
          id: "farmproducts",
          ja: "農産物",
          intro: "収穫量に応じて、時期限定でご案内しています。",
          image: agricultureImg,
          accent: "text-leaf",
          bg: "bg-leaf-soft/30",
          items: [
            {
              name: "無農薬 借金なし大豆",
              desc: "味噌づくりのために育てている秩父在来種「借金なし」。希少な国産・無農薬・在来種の大豆です。",
            },
            {
              name: "無農薬 国産米",
              desc: "自社圃場で農薬を一切使わずに育てた在来種のお米。年によって収量が変わるため、収穫期のみご案内します。",
            },
          ],
        },
      ],
    },
  ],
};

export const atharva: Brand = {
  key: "atharva",
  path: "/products/atharva",
  name: "アタルバ",
  reading: "Atharva",
  tagline: "頭から全身まで。アーユルヴェーダのオイルと粉末。",
  intro:
    "インドのアーユルヴェーダ製法を大切にしたオイル、クリーム、ハーブの粉末。髪から肌、からだまで、日々のお手入れに。",
  hero: atharvaHero,
  accent: "text-amber",
  bg: "bg-amber-soft/35",
  groups: [
    {
      id: "head",
      ja: "頭のケア",
      lead: "頭皮と髪に。オイルでほぐし、粉末で洗う。",
      categories: [
        {
          id: "head-oil",
          ja: "ヘッドマッサージオイル",
          intro: "アーユルヴェーダ伝統のヘッドオイル。指の腹でゆっくりと頭皮をほぐします。",
          image: headOilImg,
          accent: "text-amber",
          bg: "bg-amber-soft/35",
          items: [
            {
              name: "アタルバ ヘッドマッサージオイル",
              desc: "アムラやブランミー、シャタバリの根エキスなどを配合した、アーユルヴェーダ伝統のヘッドオイルです。",
            },
            {
              name: "ヘッドマッサージオイル・リラックス",
              desc: "香り成分としてカモミールオイルを配合。ヘナの匂いを和らげながら、リラックスタイムを演出します。",
            },
            {
              name: "ヘッドマッサージオイル R",
              desc: "アムラ、ブランミー配合の伝統的なヘッドオイルに、贅沢にローズオイルを加えた香り高い商品です。",
            },
            {
              name: "アタルバ ヘアオイル",
              desc: "ココナッツオイルの爽やかで甘い香りに7つのハーブが包まれ、髪をサラサラに整える軽い使用感です。",
            },
          ],
        },
        {
          id: "head-powder",
          ja: "洗髪粉",
          intro: "泡立たない粉末の洗髪。頭皮の余分な脂分だけを穏やかに落とします。",
          image: shampooSpecialImg,
          accent: "text-leaf",
          bg: "bg-sand/60",
          items: [
            {
              name: "アタルバ 洗髪粉",
              desc: "無農薬オレンジピール、シカカイ、アムラ、リタを独自に粉末化。髪はもちろん顔・体の洗浄にも使えます。",
            },
          ],
        },
      ],
    },
    {
      id: "wholebody",
      ja: "全身のケア",
      lead: "アビヤンガ(全身オイルマッサージ)と、粉末での洗浄。",
      categories: [
        {
          id: "body-oil",
          ja: "マッサージオイル",
          intro: "体質や季節に合わせて選べる、伝統製法のマッサージオイル。",
          image: oilsImg,
          accent: "text-amber",
          bg: "bg-amber-soft/35",
          items: [
            {
              name: "アタルバ CBLマッサージオイル",
              desc: "サンダルウッドを配合した貴重なオイルで、全身マッサージ(アビヤンガ)に最適。吸収がよく保湿に優れます。",
            },
            {
              name: "アタルバ セサミオイル",
              desc: "自社農園で無農薬栽培したゴマをコールドプレスで抽出。アビヤンガのベースオイルにもおすすめです。",
            },
            {
              name: "アタルバ ニームオイル",
              desc: "ニーム葉のエキスをゴマ油に抽出。強い玉ねぎ臭がなく匂いがマイルドで、スキンケアに最適です。",
            },
            {
              name: "アタルバ ベビーオイル",
              desc: "サンダルウッド原木や各種インドハーブを使用し、肌のうるおいを保つためのオイルです。ご使用前に成分と注意事項をご確認ください。",
            },
            {
              name: "マッサージオイル NR",
              desc: "ニルグンディを主原料とした、乾燥が気になる肌のお手入れに使うマッサージオイルです。",
            },
            {
              name: "ピッタ・マッサージオイル",
              desc: "ベチパー(インド名コス)の香りが心地よい、ピッタ体質の方のためのマッサージオイルです。",
            },
            {
              name: "カファ・マッサージオイル",
              desc: "カンファーの香りでさっぱりとした使用感に仕上げた、カファ体質の方向けのマッサージオイルです。",
            },
            {
              name: "ヴァータ・マッサージオイル",
              desc: "レモングラスの香りが心地よく広がる、ヴァータ体質の方向けのマッサージオイルです。",
            },
          ],
        },
        {
          id: "body-powder",
          ja: "スクラブ・洗浄粉末",
          intro: "湯上がりの肌に。ハーブの粉末で表面の汚れをやさしく取り除きます。",
          image: bodyScrubImg,
          accent: "text-terracotta",
          bg: "bg-terracotta-soft/25",
          items: [
            {
              name: "アタルバ ハーバルスクラブ",
              desc: "アムラ粉を主体としたやや繊維質的な肌さわりで、表面の汚れを優しく取り除く顔・体兼用スクラブです。",
            },
          ],
        },
      ],
    },
    {
      id: "skin",
      ja: "肌のケア",
      lead: "毎日の保湿クリームと、週に一度のフェイスパック。",
      categories: [
        {
          id: "skin-cream",
          ja: "保湿クリーム",
          intro:
            "ギーをベースに、アーユルヴェーダの植物成分をブレンド。化学的な保存料は一切不使用。",
          image: skincareImg,
          accent: "text-terracotta",
          bg: "bg-sand-deep/40",
          items: [
            {
              name: "アタルバ フェイスクリーム R",
              desc: "良質なカシミール産サフランを配合し、ローズの香りで包み込む保湿クリーム。お顔の輝きを引き出します。",
            },
            {
              name: "アタルバ フェイスクリーム K",
              desc: "Rと同じ使用感のまま、ローズオイルを加えていないタイプ。原料由来の香りはあります。",
            },
            {
              name: "アタルバ スキンクリーム",
              desc: "フェイスクリームより香りや配合を控えたデイリー使い向け。乾燥しやすい顔から手足まで気軽に。",
            },
          ],
        },
        {
          id: "skin-powder",
          ja: "フェイスパック",
          intro: "インドハーブを溶いて肌にのせ、洗い流すだけのスペシャルケア。",
          image: facepackImg,
          accent: "text-terracotta",
          bg: "bg-terracotta-soft/30",
          items: [
            {
              name: "アタルバ ハーバルフェイスパック",
              desc: "アナントムール、ロドラ、ニーム、サンダルウッドなど6種のハーブを配合し、肌に潤いを与え整えます。",
            },
            {
              name: "フェイスパック R",
              desc: "無農薬栽培のローザセンティフォリアを主成分に、イェシティマドゥやアムラを配合した贅沢なローズパックです。",
            },
          ],
        },
      ],
    },
    {
      id: "point",
      ja: "部分のケア",
      lead: "乾燥が気になるところへ、少量ずつ。",
      categories: [
        {
          id: "point-care",
          ja: "部分ケア",
          intro: "指先にとって、気になる部分にすり込むように。",
          image: pointCareImg,
          accent: "text-terracotta",
          bg: "bg-terracotta-soft/20",
          items: [
            {
              name: "イェシティマドゥオイル",
              desc: "甘草のエキスをオイルに抽出。乾燥が気になる部分のお手入れに使います。",
            },
            {
              name: "アタルバ スキンクリーム",
              desc: "乾燥しやすい口元や手足など、部分的な保湿に気軽に使えるデイリークリームです。",
            },
          ],
        },
      ],
    },
  ],
};

// One primary category and brand per product; related uses live in guides.
maharani.groups = maharani.groups.filter((group) => group.id !== "farm");
const aromaCategory = maharani.groups.find((g) => g.id === "hairoil")!.categories[0];
aromaCategory.items = [
  {
    name: "マハラニ ヘアケアオイル",
    desc: "森を思わせる香りのヘアケアオイル。ヘナ前のケアや髪のお手入れに。",
  },
  {
    name: "マハラニ ヘアケアオイル FB",
    desc: "アジアンスパを思わせる香り。髪にうるおいを与えるヘアケアオイルです。",
  },
];
maharani.groups.find((g) => g.id === "body")!.categories[0].items = maharani.groups
  .find((g) => g.id === "body")!
  .categories[0].items.filter((i) => !i.name.startsWith("アタルバ"));
maharani.groups.find((g) => g.id === "singleherb")!.categories[0].items = maharani.groups
  .find((g) => g.id === "singleherb")!
  .categories[0].items.filter((i) => !i.name.includes("ムルタニ"));
atharva.groups.find((g) => g.id === "point")!.categories[0].items = atharva.groups
  .find((g) => g.id === "point")!
  .categories[0].items.filter((i) => !i.name.includes("スキンクリーム"));

// Official destination paths verified against maharani.jp, 2026-09-09.
const shopPaths: Record<string, string> = {
  "マハラニヘナ 石臼挽き": "henna.html",
  "マハラニヘナ ファイン粉末": "henna_fine.html",
  "マハラニヘナ (機械挽き)": "henna_kikai.html",
  "オーガニック ヘナコンシーラー": "henna_concealer.html",
  インディゴ: "indigo.html",
  "ハーバルカラー1 ライトブラウン": "HerbalColor1_lightbrown.html",
  "ハーバルカラー3 ブラウン": "HerbalColor3_brown.html",
  "ハーバルカラー5 ダークブラウン": "HerbalColor5_darkbrown.html",
  "ハーバルカラー7 ソフトブラック": "HerbalColor7_softblack.html",
  "ハーバルカラー9 ブルーブラック": "HerbalColor9_blueblack.html",
  カラートリートメント花ブレンド: "HHC_flower.html",
  "ハーブシャンプー 香る髪": "kaorukami.html",
  "ハーブシャンプー 香る髪プラス": "kkp.html",
  "ハーブシャンプー 香る髪ベーシック": "kkb.html",
  香る髪ラベンダー: "KKL.html",
  香る髪アロマプラス: "kkap.html",
  香る髪花ブレンド: "kkf.html",
  香る髪オレンジ２: "KO.html",
  香る髪ペパーミント: "kkpep.html",
  香る髪オイリースカルプ: "kkoily.html",
  ヘナシカ洗髪粉: "henashika.html",
  ニュー香る髪: "KKN.html",
  "カラーレストリートメント (カッシア)": "cassia.html",
  カラーレス花ブレンド: "CLTF.html",
  "マハラニ ヘアケアオイル": "maharani-oil.html",
  "マハラニ ヘアケアオイル FB": "RKFB.html",
  "マハラニ シカカイ": "shikekai.html",
  "マハラニ アムラ": "amla.html",
  "マハラニ カチュールスガンディ": "kachur.html",
  "マハラニ ニーム": "neem.html",
  "マハラニ ムルタニミッティ": "multani.html",
  無農薬ローズ粉末: "rose.html",
  "アタルバ ヘッドマッサージオイル": "atharva_headmassageOil.html",
  "ヘッドマッサージオイル・リラックス": "atharva_headmassageOil_X.html",
  "ヘッドマッサージオイル R": "atharva_headmassageoilR.html",
  "アタルバ ヘアオイル": "atharva_hairoil.html",
  "アタルバ 洗髪粉": "atharva_shampoo.html",
  "アタルバ CBLマッサージオイル": "atharva_CBL.html",
  "アタルバ セサミオイル": "atharva_sesame.html",
  "アタルバ ニームオイル": "atharva_neem.html",
  "アタルバ ベビーオイル": "babyOil.html",
  "マッサージオイル NR": "atharva_nir.html",
  "ピッタ・マッサージオイル": "pittaoil.html",
  "カファ・マッサージオイル": "kaphaoil.html",
  "ヴァータ・マッサージオイル": "vataoil.html",
  "アタルバ ハーバルスクラブ": "atharva_scrub.html",
  "アタルバ フェイスクリーム R": "facecream.html",
  "アタルバ フェイスクリーム K": "facecream.html",
  "アタルバ スキンクリーム": "skincream.html",
  "アタルバ ハーバルフェイスパック": "atharva_facepack.html",
  "フェイスパック R": "facepackR.html",
  イェシティマドゥオイル: "atharva_yas.html",
};
export const brands: Brand[] = [maharani, atharva];
for (const brand of brands)
  for (const group of brand.groups)
    for (const category of group.categories)
      for (const item of category.items) {
        const path = shopPaths[item.name];
        if (!path) throw new Error(`Missing official product URL: ${item.name}`);
        item.shopUrl = `https://maharani.jp/${path}`;
      }
export const productCount = (brand: Brand) =>
  brand.groups.reduce((sum, g) => sum + g.categories.reduce((n, c) => n + c.items.length, 0), 0);
export const normalizeQuery = (value: string) =>
  value
    .normalize("NFKC")
    .toLocaleLowerCase("ja")
    .replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60))
    .replace(/[\s・ー]/g, "");
