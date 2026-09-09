type Item = { name: string; en: string; desc: string };

const items: Item[] = [
  { name: "NPOPオーガニック認証", en: "NPOP Organic", desc: "インド政府によるオーガニック認証。原材料の栽培から管理。" },
  { name: "ISO 22716:2007", en: "ISO 22716", desc: "化粧品の製造管理および品質管理に関する国際規格。" },
  { name: "JOCA推奨品", en: "JOCA Approved", desc: "日本オーガニックコスメ協会が推奨する天然原料のみで作られた製品。" },
];

export function CertificationBadges() {
  return (
    <div className="grid sm:grid-cols-3 gap-5">
      {items.map((it) => (
        <div key={it.name} className="bg-sand/60 rounded-2xl p-6">
          <p className="eyebrow-en text-terracotta mb-2">{it.en}</p>
          <p className="text-base mb-2">{it.name}</p>
          <p className="text-sm text-muted-foreground leading-loose">{it.desc}</p>
        </div>
      ))}
    </div>
  );
}
