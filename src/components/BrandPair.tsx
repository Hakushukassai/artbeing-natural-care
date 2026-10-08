import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
// 公式サイトの写真：それぞれのブランドの商品だけを、原料と一緒に写したもの
import maharaniImage from "@/assets/real/maharani-brand.jpg";
import atharvaImage from "@/assets/real/atharva-brand.jpg";

export function BrandPair() {
  return (
    <div className="brand-pair">
      {[
        {
          to: "/products/maharani" as const,
          image: maharaniImage,
          en: "Maharani",
          ja: "マハラニ",
          type: "ヘナ・ハーブシャンプー",
          color: "maharani",
        },
        {
          to: "/products/atharva" as const,
          image: atharvaImage,
          en: "Atharva",
          ja: "アタルバ",
          type: "オイル・スキンケア",
          color: "atharva",
        },
      ].map((brand) => (
        <Reveal key={brand.en}>
          <Link to={brand.to} className={`brand-card ${brand.color}`}>
            <div className="brand-photo">
              <img src={brand.image} alt="" loading="lazy" width={750} height={441} />
            </div>
            <div className="brand-card-body">
              <div className="brand-name">
                <h3>{brand.en}</h3>
                <span>{brand.ja}</span>
              </div>
              <p>{brand.type}</p>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
