export const site = {
  shop: "https://maharani.jp/",
  contact: "https://maharani.jp/mail/",
  company: "https://maharani.jp/help/gaiyo.html",
  legal: "https://maharani.jp/help/hyoki.html",
  privacy: "https://maharani.jp/help/shop_policy.html",
  shipping: "https://maharani.jp/help/soryo_payment.html",
  hennaGuide: "https://maharani.jp/howto_henna.html",
  indigoGuide: "https://maharani.jp/howto_henna_indigo.html",
  shampoo: "https://maharani.jp/kaorukami.html",
  oil: "https://maharani.jp/atharva_headmassageOil.html",
} as const;
export function pageMeta(title: string, description: string) {
  return {
    meta: [
      { title: `${title}｜アートビーング` },
      { name: "description", content: description },
      { property: "og:title", content: `${title}｜アートビーング` },
      { property: "og:description", content: description },
    ],
  };
}
