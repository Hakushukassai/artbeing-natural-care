import { useState } from "react";
import { createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, ArrowUpRight, Check, Info, BookOpen } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageIntro } from "@/components/PageIntro";
import { Checkbox } from "@/components/ui/checkbox";
import { guides } from "@/data/guides";
import { pageMeta, site } from "@/data/site";
export const Route = createFileRoute("/guide")({
  component: Guide,
  head: () =>
    pageMeta(
      "はじめての方へ・使い方",
      "ヘナ・インディゴ・ハーブシャンプー・アタルバのオイル。目的に合うケアの選び方と、使い方を順を追ってご案内します。",
    ),
});
function Guide() {
  const hash = useRouterState({ select: (s) => s.location.hash });
  const active = guides.find((g) => g.id === hash) || guides[0];
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageIntro title="はじめての方へ・使い方" />
        <section className="guide-first shell">
          <div>
            <h2>商品を選ぶ</h2>
          </div>
          <div className="guide-choices">
            {[
              {
                title: "白髪を植物で染めたい",
                sub: "ヘナ・インディゴ・ヘアカラー",
                to: "/products/maharani" as const,
                hash: "color",
              },
              {
                title: "ハーブで髪を洗いたい",
                sub: "ハーブシャンプー・洗髪粉",
                to: "/products/maharani" as const,
                hash: "nocolor",
              },
              {
                title: "髪や肌にうるおいが欲しい",
                sub: "アタルバのオイル・クリーム",
                to: "/products/atharva" as const,
                hash: "collection",
              },
            ].map((c) => (
              <Link key={c.title} to={c.to} hash={c.hash}>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.sub}</p>
                </div>
                <ArrowUpRight size={20} />
              </Link>
            ))}
          </div>
        </section>
        <section className="guide-how shell">
          <h2>使い方</h2>
          <nav className="guide-tabs" aria-label="ケアの使い方を選ぶ">
            {guides.map((g) => (
              <Link
                key={g.id}
                to="/guide"
                hash={g.id}
                className={active.id === g.id ? "selected" : ""}
                aria-current={active.id === g.id ? "true" : undefined}
              >
                {g.label}
              </Link>
            ))}
          </nav>
          <GuideSteps key={active.id} guide={active} />
        </section>
        <section className="color-guide shell" id="colors">
          <div>
            <h2>仕上がりの色から選ぶ</h2>
            <p>
              ヘナはオレンジ系。赤みを抑えた色には、
              <br />
              インディゴやハーバルカラーという選択肢も。
            </p>
          </div>
          <div>
            <div className="color-options">
              {[
                {
                  name: "オレンジ系",
                  product: "ヘナ",
                  color: "#a54d28",
                  url: "https://maharani.jp/henna.html",
                },
                {
                  name: "ライトブラウン",
                  product: "ハーバルカラー1",
                  color: "#986439",
                  url: "https://maharani.jp/HerbalColor1_lightbrown.html",
                },
                {
                  name: "ブラウン",
                  product: "ハーバルカラー3",
                  color: "#70472f",
                  url: "https://maharani.jp/HerbalColor3_brown.html",
                },
                {
                  name: "ダークブラウン",
                  product: "ハーバルカラー5",
                  color: "#493425",
                  url: "https://maharani.jp/HerbalColor5_darkbrown.html",
                },
                {
                  name: "ソフトブラック",
                  product: "ハーバルカラー7",
                  color: "#2e2c27",
                  url: "https://maharani.jp/HerbalColor7_softblack.html",
                },
              ].map((c) => (
                <a key={c.name} href={c.url} target="_blank" rel="noreferrer">
                  <span className="color-swatch" style={{ background: c.color }} />
                  <span>{c.name}</span>
                  <small>
                    {c.product}
                    <ArrowUpRight size={12} />
                  </small>
                </a>
              ))}
            </div>
            <p className="color-note">
              色は白髪に対する仕上がりのイメージです。白髪の割合や元の髪色、髪質、染め方によって異なり、画面の色を保証するものではありません。
            </p>
          </div>
        </section>
        <Preparation />
      </main>
      <Footer />
    </>
  );
}
function GuideSteps({ guide }: { guide: (typeof guides)[number] }) {
  const [step, setStep] = useState(0);
  const current = guide.steps[step];
  return (
    <div className="guide-stepper" id={guide.id}>
      <div className="guide-stepper-heading">
        <span>{guide.brand}</span>
        <h3>{guide.title}</h3>
        <p>{guide.intro}</p>
      </div>
      <div className="stepper-layout">
        <div className="stepper-image" key={`${guide.id}-${step}`}>
          <img src={current.image} alt={`${current.title}のイメージ`} width={800} height={650} />
          <span>
            STEP {String(step + 1).padStart(2, "0")} / {String(guide.steps.length).padStart(2, "0")}
          </span>
        </div>
        <div className="stepper-content">
          <div className="stepper-progress" aria-label="手順を選ぶ">
            {guide.steps.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setStep(i)}
                className={i === step ? "current" : i < step ? "passed" : ""}
                aria-label={`ステップ${i + 1} ${s.title}`}
                aria-current={i === step ? "step" : undefined}
              >
                {i < step ? <Check size={16} /> : String(i + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
          <div className="stepper-copy" key={step} aria-live="polite" aria-atomic="true">
            <p className="eyebrow">STEP {String(step + 1).padStart(2, "0")}</p>
            <h4>{current.title}</h4>
            <p>{current.text}</p>
            <div className="stepper-tip">
              <Info size={17} />
              <p>{current.tip}</p>
            </div>
          </div>
          <div className="stepper-controls">
            <button
              className="step-back"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
            >
              <ArrowLeft size={17} />
              前へ
            </button>
            {step < guide.steps.length - 1 ? (
              <button className="button button-primary" onClick={() => setStep((s) => s + 1)}>
                次のステップ <ArrowRight size={17} />
              </button>
            ) : (
              <a
                className="button button-primary"
                href={guide.url}
                target="_blank"
                rel="noreferrer"
              >
                公式の詳しい手順 <ArrowUpRight size={17} />
              </a>
            )}
          </div>
        </div>
      </div>
      <a href={guide.url} target="_blank" rel="noreferrer" className="guide-source">
        <BookOpen size={15} />
        使用量・時間など、詳しい手順は公式ガイドへ <ArrowUpRight size={15} />
      </a>
    </div>
  );
}
function Preparation() {
  const [checked, setChecked] = useState<string[]>([]);
  const items = [
    { id: "instructions", label: "使う商品の説明書と全成分を確認する" },
    { id: "patch", label: "説明書に従って、事前にパッチテストを行う" },
    { id: "tools", label: "ボウル・手袋・汚れてもよいタオルを用意する" },
  ];
  return (
    <section className="preparation shell">
      <div>
        <p className="step-label">03 / BEFORE YOU BEGIN</p>
        <h2>始める前の、小さな準備。</h2>
        <p>
          天然由来でも、アレルギーが起こる場合があります。
          <br />
          肌や頭皮の状態を確かめてから、お使いください。
        </p>
        <a href={site.contact} target="_blank" rel="noreferrer" className="text-link">
          パッチテスト用サンプルの相談 <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="preparation-checklist">
        {items.map((item) => (
          <label key={item.id} className={checked.includes(item.id) ? "is-checked" : ""}>
            <Checkbox
              checked={checked.includes(item.id)}
              onCheckedChange={(v) =>
                setChecked((s) => (v ? [...s, item.id] : s.filter((id) => id !== item.id)))
              }
            />
            <span>{item.label}</span>
          </label>
        ))}
        <p role="status" className="checklist-status">
          {checked.length === items.length ? (
            <>
              <Check size={16} />
              準備の確認ができました。説明書に沿って始めましょう。
            </>
          ) : (
            `${checked.length} / ${items.length} 項目を確認`
          )}
        </p>
      </div>
    </section>
  );
}
