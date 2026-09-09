import hennaMix from "@/assets/guides/henna-mix.webp";
import hennaApply from "@/assets/guides/henna-apply.webp";
import hennaWait from "@/assets/guides/henna-wait.webp";
import hennaRinse from "@/assets/guides/henna-rinse.webp";
import stepMix from "@/assets/step-mix.jpg";
import stepApply from "@/assets/step-apply.jpg";
import stepRinse from "@/assets/step-rinse.jpg";
import powder from "@/assets/herbal-shampoo-powder-960.webp";
import oil from "@/assets/product-headoil.jpg";
export const guides = [
  {
    id: "henna",
    label: "ヘナで染める",
    brand: "Maharani",
    title: "ヘナの基本の使い方",
    intro: "使う分だけを溶いて、髪にたっぷり。時間をかけて、植物の色を重ねます。",
    url: "https://maharani.jp/howto_henna.html",
    steps: [
      {
        title: "お湯で溶く",
        text: "ボウルにお湯を入れ、粉を少しずつ加えて混ぜます。髪にのばしやすい、なめらかなペーストに。湯温や使用量は商品の説明書を確認してください。",
        tip: "塗りやすい固さにすることが、塗り残しを防ぐコツ。",
        image: hennaMix,
      },
      {
        title: "根元から塗る",
        text: "手袋を着用し、白髪が気になる根元から塗布します。髪を分けながら、ペーストを十分にのせていきます。",
        tip: "衣服・床・タオルへの色移りに備えて準備を。",
        image: hennaApply,
      },
      {
        title: "包んで時間を置く",
        text: "ラップやシャワーキャップで髪を包み、説明書に記載の時間を目安に置きます。仕上がりは髪質や室温などによって異なります。",
        tip: "放置時間は商品によって異なります。長く置きすぎないように。",
        image: hennaWait,
      },
      {
        title: "しっかりすすぐ",
        text: "お湯でペーストを十分に洗い流します。シャンプーのタイミングは商品の案内に従い、タオルや衣服への色移りにご注意ください。",
        tip: "染めた直後は、濃い色のタオルがおすすめ。",
        image: hennaRinse,
      },
    ],
  },
  {
    id: "indigo",
    label: "インディゴを重ねる",
    brand: "Maharani",
    title: "ヘナの赤みを、落ち着かせる。",
    intro: "ヘナで染めた後にインディゴを使う、二度染めの流れをご紹介します。",
    url: "https://maharani.jp/howto_henna_indigo.html",
    steps: [
      {
        title: "先にヘナで染める",
        text: "まずヘナで白髪を染め、十分に洗い流します。インディゴだけを白髪に使うと青緑系の色になる場合があります。",
        tip: "二つの原料それぞれでパッチテストを。",
        image: stepApply,
      },
      {
        title: "溶いたら速やかに塗る",
        text: "インディゴの粉末を、説明書に従ってお湯で溶きます。ヘナと違い、寝かせずに速やかに塗布してください。",
        tip: "塗布する準備が整ってから粉末を溶きます。",
        image: stepMix,
      },
      {
        title: "色を確かめ、すすぐ",
        text: "記載の時間を目安に置いて、十分にすすぎます。染まり方には個人差があるので、初回は目立たない毛束で確認してください。",
        tip: "色の変化を見ながら、自分の髪に合う使い方を。",
        image: stepRinse,
      },
    ],
  },
  {
    id: "shampoo",
    label: "ハーブで洗う",
    brand: "Maharani",
    title: "泡立たない洗髪を、毎日に。",
    intro: "植物の粉末をお湯に溶いて洗う、ハーブシャンプーの基本です。",
    url: "https://maharani.jp/kaorukami.html",
    steps: [
      {
        title: "使う分だけを溶く",
        text: "商品に記載された使用量を目安に、粉末をお湯で溶きます。溶いたものは保管せず、その都度使い切ります。",
        tip: "粉末は湿気を避け、袋をしっかり閉じて保管。",
        image: powder,
      },
      {
        title: "頭皮と髪になじませる",
        text: "予洗いした頭皮と髪に、溶いたハーブをなじませます。指の腹でやさしく洗い、目に入らないようにご注意ください。",
        tip: "泡立ちの量ではなく、頭皮全体になじませることを意識。",
        image: stepApply,
      },
      {
        title: "よくすすいで仕上げる",
        text: "粉末が残らないよう、お湯で十分にすすぎます。ヘナを含む商品は明るい髪に色がつく場合があるため、配合も確認してください。",
        tip: "髪や頭皮の状態に合わせて、使用量を調整します。",
        image: stepRinse,
      },
    ],
  },
  {
    id: "oil",
    label: "オイルでいたわる",
    brand: "Atharva",
    title: "オイルと過ごす、ひと息の時間。",
    intro: "頭皮のマッサージや髪のお手入れに。アタルバのオイルを少量から取り入れます。",
    url: "https://maharani.jp/atharva_headmassageOil.html",
    steps: [
      {
        title: "用途と成分を確かめる",
        text: "ヘアオイル、ヘッドマッサージオイル、ボディオイルは、それぞれ配合や用途が異なります。使う部位に合う商品を選び、使用上の注意をご確認ください。",
        tip: "自然由来でもアレルギーが起こる場合があります。",
        image: oil,
      },
      {
        title: "少量をやさしくなじませる",
        text: "適量を手に取り、指の腹で頭皮をやさしくマッサージします。毛先のお手入れには、髪の量に合わせて少量をのばしてください。",
        tip: "つけすぎると洗い流しにくくなるので、少量ずつ。",
        image: oil,
      },
      {
        title: "お手入れを仕上げる",
        text: "頭皮マッサージ後の洗い流しやヘナとの併用は、各商品の案内に従ってください。ボディ・スキンケア製品も用途に合う方法で使います。",
        tip: "心地よい使用感を確かめながら、自分のペースで。",
        image: stepRinse,
      },
    ],
  },
] as const;
