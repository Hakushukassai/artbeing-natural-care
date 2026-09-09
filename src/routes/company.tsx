import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageIntro } from "@/components/PageIntro";
import { pageMeta, site } from "@/data/site";
export const Route = createFileRoute("/company")({
  component: Company,
  head: () =>
    pageMeta(
      "会社情報",
      "株式会社アートビーングの会社概要。マハラニ・アタルバ製品の現地生産・直輸入・販売、公式お問い合わせ窓口をご案内します。",
    ),
});
const profile = [
  ["会社名", "株式会社アートビーング / ARTBEING INC."],
  ["代表者", "鈴木 康之"],
  ["設立", "2003年3月3日"],
  ["資本金", "1,000万円"],
  ["所在地", "〒408-0033 山梨県北杜市長坂町白井沢3511-1"],
  [
    "事業内容",
    "マハラニのヘナ・ハーブシャンプー、およびアタルバのアーユルヴェーダオイルなどの現地生産・直輸入・販売。公式通販ショップ maharani.jp の運営。",
  ],
];
function Company() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageIntro title="会社情報" />
        <section className="company-layout shell">
          <div>
            <h2>
              株式会社
              <br />
              アートビーング
            </h2>
            <span className="company-location">
              <MapPin size={17} />
              YAMANASHI, JAPAN
            </span>
          </div>
          <div>
            <dl className="company-profile">
              {profile.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <a href={site.company} target="_blank" rel="noreferrer" className="text-link">
              公式の会社概要 <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
        <section className="company-contact shell" id="inquiry">
          <MessageCircle size={32} strokeWidth={1.25} />
          <h2>お問い合わせ</h2>
          <p>
            製品の使い方、ご購入、卸販売についてのご相談は、
            <br />
            公式のお問い合わせフォームで承ります。
          </p>
          <div>
            <a
              href={site.contact}
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              お問い合わせフォーム <ArrowUpRight size={18} />
            </a>
            <Link to="/faq" className="button button-outline">
              よくあるご質問 <ArrowRight size={18} />
            </Link>
          </div>
        </section>
        <section className="company-links shell">
          <div id="tokushoho">
            <h2>お買い物に関するご案内</h2>
            <p>販売条件やお届けについては、公式通販サイトに掲載の最新情報をご確認ください。</p>
            <a href={site.legal} className="text-link" target="_blank" rel="noreferrer">
              特定商取引法に基づく表記 <ArrowUpRight size={16} />
            </a>
            <a href={site.shipping} className="text-link" target="_blank" rel="noreferrer">
              送料・お支払いについて <ArrowUpRight size={16} />
            </a>
          </div>
          <div id="privacy">
            <h2>個人情報のお取り扱い</h2>
            <p>
              お買い物やお問い合わせの際の個人情報の取り扱いは、公式のポリシーをご確認ください。
            </p>
            <a href={site.privacy} className="text-link" target="_blank" rel="noreferrer">
              プライバシーポリシー <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
        <div className="farm-note shell">
          <span>私たちのもうひとつの取り組み</span>
          <p>山梨で育てる農産物についても、公式ストアでご紹介しています。</p>
          <a href="https://maharani.jp/daizu.html" target="_blank" rel="noreferrer">
            大豆 <ArrowUpRight size={14} />
          </a>
          <a href="https://maharani.jp/rice.html" target="_blank" rel="noreferrer">
            お米 <ArrowUpRight size={14} />
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
