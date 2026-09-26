import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./analysis.css";

const markets: Record<string, { currency: string; symbol: string }> = {
  Malaysia: { currency: "MYR", symbol: "RM" },
  Singapore: { currency: "SGD", symbol: "S$" },
  Thailand: { currency: "THB", symbol: "฿" },
  Indonesia: { currency: "IDR", symbol: "Rp" },
  Philippines: { currency: "PHP", symbol: "₱" },
  Vietnam: { currency: "VND", symbol: "₫" },
};

const categories = ["Bags & Accessories", "Beauty & Personal Care", "Home & Living", "Consumer Electronics", "Fashion", "Other"];
const platforms = ["TikTok Shop", "Shopee", "Lazada", "Amazon", "Independent Store"];
const goals = ["Market Entry", "Product Validation", "Pricing Strategy"];

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
  return <div className="analysis-field"><label htmlFor={htmlFor}>{label}</label>{children}</div>;
}

function FormCard({ number, title, description, children }: { number: string; title: string; description?: string; children: ReactNode }) {
  return <section className="analysis-card"><div className="analysis-card-heading"><span>{number}</span><div><h2>{title}</h2>{description && <p>{description}</p>}</div></div>{children}</section>;
}

export default function AnalysisPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, []);
  const navigate = useNavigate();
  const [productName, setProductName] = useState("Women's Commuter Tote Bag");
  const [category, setCategory] = useState("Bags & Accessories");
  const [description, setDescription] = useState("Lightweight waterproof tote bag designed for commuting, daily use and laptop storage.");
  const [market, setMarket] = useState("Malaysia");
  const [platform, setPlatform] = useState("TikTok Shop");
  const [cost, setCost] = useState("35");
  const [price, setPrice] = useState("79");
  const [goal, setGoal] = useState("Market Entry");
  const { currency, symbol } = markets[market];

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/loading");
  }

  return <main className="analysis-page"><div className="container">
    <Link className="analysis-back" to="/">← Back to Home</Link>
    <div className="analysis-header"><div><p className="eyebrow">TRADEPILOT AI · MARKET ANALYSIS</p><h1>Set up your market analysis.</h1><p>Define the product, target market and business context TradePilot should evaluate.</p></div><ol className="analysis-progress" aria-label="Analysis progress"><li className="current" aria-current="step"><strong>01</strong> Input</li><li><strong>02</strong> Analyse</li><li><strong>03</strong> Report</li></ol></div>
    <div className="analysis-layout"><form id="analysis-form" onSubmit={submit}>
      <FormCard number="01" title="Product" description="Tell TradePilot what product you want to evaluate."><div className="analysis-fields"><Field label="Product Name" htmlFor="product-name"><input id="product-name" required value={productName} onChange={event => setProductName(event.target.value)} /></Field><Field label="Category" htmlFor="category"><select id="category" value={category} onChange={event => setCategory(event.target.value)}>{categories.map(item => <option key={item}>{item}</option>)}</select></Field><Field label="Product Description" htmlFor="description"><textarea id="description" rows={3} value={description} onChange={event => setDescription(event.target.value)} /></Field></div></FormCard>
      <FormCard number="02" title="Target Market"><div className="analysis-fields two"><Field label="Country / Market" htmlFor="market"><select id="market" required value={market} onChange={event => setMarket(event.target.value)}>{Object.keys(markets).map(item => <option key={item}>{item}</option>)}</select></Field><Field label="Platform" htmlFor="platform"><select id="platform" required value={platform} onChange={event => setPlatform(event.target.value)}>{platforms.map(item => <option key={item}>{item}</option>)}</select></Field><Field label="Currency" htmlFor="currency"><input id="currency" value={currency} readOnly aria-readonly="true" /></Field></div></FormCard>
      <FormCard number="03" title="Business Context" description="Provide basic commercial assumptions for this market test."><div className="analysis-fields two"><Field label="Estimated Product Cost" htmlFor="cost"><div className="currency-input"><span>{symbol}</span><input id="cost" type="number" min="0" step="0.01" required value={cost} onChange={event => setCost(event.target.value)} /></div></Field><Field label="Target Selling Price" htmlFor="price"><div className="currency-input"><span>{symbol}</span><input id="price" type="number" min="0" step="0.01" required value={price} onChange={event => setPrice(event.target.value)} /></div></Field></div><fieldset className="goal-field"><legend>Business Goal</legend><div className="goal-options">{goals.map(item => <label className={goal === item ? "goal-option selected" : "goal-option"} key={item}><input type="radio" name="goal" value={item} required checked={goal === item} onChange={() => setGoal(item)} /><span>{item}</span></label>)}</div></fieldset></FormCard>
      <FormCard number="04" title="Market Evidence" description="TradePilot uses market evidence to support its analysis."><div className="dataset"><div className="dataset-top"><div><span className="dataset-icon" aria-hidden="true">▤</span><strong>Sample Market Dataset</strong></div><span className="dataset-ready">● Ready</span></div><span className="tag fact">DEMO DATASET</span><div className="dataset-stats"><div><strong>12</strong><span>competitor products</span></div><div><strong>326</strong><span>customer reviews</span></div><div><strong>RM49–RM129</strong><span>observed price range</span></div></div><p className="dataset-source">Source context: TikTok Shop Malaysia</p></div><p className="dataset-note">This V0.1 demo uses a curated mock dataset to demonstrate the analysis workflow.</p></FormCard>
      <div className="analysis-submit"><button className="button primary" type="submit">Generate Market Report <span aria-hidden="true">↗</span></button><p>TradePilot will analyse the demo evidence and generate an evidence-backed opportunity report.</p></div>
    </form><aside className="brief-card" aria-label="Research Brief"><div className="brief-heading"><p className="eyebrow">YOUR ANALYSIS</p><h2>Research Brief</h2><p>A clear starting point for your market decision.</p></div><dl><div><dt>Product</dt><dd>{productName || "—"}</dd></div><div><dt>Market</dt><dd>{market || "—"}</dd></div><div><dt>Platform</dt><dd>{platform || "—"}</dd></div><div><dt>Target Price</dt><dd>{price ? `${symbol}${price}` : "—"}</dd></div><div><dt>Goal</dt><dd>{goal || "—"}</dd></div><div><dt>Evidence</dt><dd>12 competitors · 326 reviews</dd></div></dl><div className="brief-ready"><span>●</span> Ready for analysis</div></aside></div>
  </div></main>;
}
