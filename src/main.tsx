import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import "./styles.css";
import AnalysisPage from "./AnalysisPage";
import LoadingPage from "./LoadingPage";
import ReportPage from "./ReportPage";
import { prices } from "./reportData";

const problems = [
  ["Fragmented Data", "Competitor prices, reviews and product signals are scattered across multiple sources."],
  ["Slow Manual Research", "Market research requires repetitive collection, comparison and summarisation."],
  ["Unclear Decisions", "Raw information does not automatically translate into pricing, positioning or market-entry decisions."],
];
const capabilities = [
  ["Market Opportunity", "Understand pricing ranges, demand signals and potential market-entry opportunities."],
  ["Competitor Intelligence", "Compare competitor positioning, pricing and customer feedback in one structured view."],
  ["Evidence-backed AI", "See what comes from the data and what is generated as AI interpretation."],
];
const steps = [
  ["Define", "Enter the product, target market and business goal."],
  ["Analyse", "TradePilot structures competitor, pricing and customer evidence."],
  ["Interpret", "AI converts evidence into market opportunities, risks and business insights."],
  ["Act", "Receive clear recommendations for pricing, positioning and market validation."],
];

function SectionHeading({ label, title, description }: { label: string; title: string; description?: string }) {
  return <div className="section-heading"><p className="eyebrow">{label}</p><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

function Header() {
  const home = useLocation().pathname === "/";
  return <header className="site-header"><div className="container header-inner">
    <Link className="brand" to="/">TradePilot <span>AI</span></Link>
    <nav aria-label="Main navigation">
      <a href={home ? "#product" : "/#product"}>Product</a>
      <a href={home ? "#how-it-works" : "/#how-it-works"}>How It Works</a>
      <a href={home ? "#evidence" : "/#evidence"}>Evidence</a>
      <Link className="nav-cta" to="/analysis">Start Analysis <span aria-hidden="true">↗</span></Link>
    </nav>
  </div></header>;
}

function Preview() {
  return <div className="preview" aria-label="Market opportunity report preview">
    <div className="preview-bar"><span className="preview-logo">T</span><span>MARKET OPPORTUNITY</span><span className="preview-dots" aria-hidden="true">•••</span></div>
    <div className="preview-content">
      <div className="preview-title"><div><small>MARKET SNAPSHOT</small><h3>Women's Commuter<br />Tote Bag</h3><p>Malaysia · TikTok Shop</p></div><span className="signal">● Promising</span></div>
      <div className="metrics"><div><strong>12</strong><span>Competitors</span></div><div><strong>326</strong><span>Reviews</span></div><div><strong>RM49–RM129</strong><span>Price Range</span></div></div>
      <div className="chart"><div className="chart-heading"><span>PRICE LANDSCAPE</span><span>RM</span></div><div className="bars" aria-hidden="true">{prices.map((price,index)=><i key={index} style={{height:`${price / 140 * 100}%`}} />)}</div><div className="chart-axis"><span>RM49</span><span>RM79 median</span><span>RM129</span></div></div>
      <div className="preview-insights"><div><span className="tag fact">DATA FACT</span><p>Median competitor price: <strong>RM79</strong></p></div><div><span className="tag inference">AI INFERENCE</span><p>A mid-market entry price may be viable.</p></div></div>
    </div>
  </div>;
}

function Home() {
  const { hash } = useLocation();
  useEffect(() => {
    // A direct /#section visit can arrive before React creates the anchor target.
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "instant" });
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [hash]);
  return <><main>
    <section className="hero container" id="product"><div className="hero-copy"><p className="eyebrow">AI-powered cross-border market intelligence</p><h1>Make smarter cross-border market decisions <em>with evidence.</em></h1><p className="hero-description">TradePilot turns fragmented competitor data, pricing signals and customer feedback into structured, evidence-backed market insights.</p><div className="hero-actions"><Link className="button primary" to="/analysis">Start Market Analysis <span aria-hidden="true">↗</span></Link><a className="button secondary" href="#how-it-works">Explore How It Works <span aria-hidden="true">↓</span></a></div><p className="hero-note">A clearer path from market signals to decisions</p></div><Preview /></section>
    <section className="section muted" id="problem"><div className="container"><SectionHeading label="THE CHALLENGE" title="Cross-border market research is fragmented." description="Sellers often switch between marketplace listings, competitor pricing, customer reviews and spreadsheets before they can make a market decision." /><div className="card-grid">{problems.map(([title,body],index)=><article className="card" key={title}><span className="card-index">0{index+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="section" id="capabilities"><div className="container"><SectionHeading label="THE SOLUTION" title="From scattered information to structured decisions." /><div className="card-grid">{capabilities.map(([title,body],index)=><article className="card" key={title}><span className="card-icon" aria-hidden="true">{["◫","▥","◇"][index]}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="section muted" id="how-it-works"><div className="container"><SectionHeading label="HOW IT WORKS" title="Market research in four steps." /><div className="steps">{steps.map(([title,body],index)=><article className="step" key={title}><span>0{index+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="section" id="evidence"><div className="container evidence-layout"><div><SectionHeading label="THE EVIDENCE MECHANISM" title="AI insights you can trace back to evidence." description="TradePilot separates observable market evidence from AI interpretation, helping users understand how conclusions are formed." /><p className="evidence-note">Important recommendations should be supported by observable evidence, while limitations and uncertainty remain visible.</p></div><div className="evidence-visual"><div className="evidence-card"><span className="tag fact">DATA FACT</span><p>Median competitor price</p><strong className="evidence-value">RM79</strong><small>Source: 12 competitor products</small></div><div className="connector" aria-hidden="true">↓</div><div className="evidence-card"><span className="tag inference">AI INFERENCE</span><h3>RM79 may represent a viable mid-market entry price.</h3><p><strong>Reasoning:</strong> The price sits near the observed market median while leaving room to differentiate through product features.</p></div></div></div></section>
    <section className="final-cta"><div className="container"><p className="eyebrow">READY TO EXPLORE?</p><h2>Explore a market before making the decision.</h2><p>Run the TradePilot demo and see how fragmented market information becomes a structured opportunity report.</p><Link className="button light" to="/analysis">Start Market Analysis <span aria-hidden="true">↗</span></Link></div></section>
  </main><footer className="site-footer"><div className="container footer-inner"><div><Link className="brand" to="/">TradePilot <span>AI</span></Link><p>AI-powered cross-border market research assistant.</p></div><span>Portfolio Project · V0.1</span></div></footer></>;
}

function Placeholder({ title, description }: { title: string; description: string }) {
  return <main className="container placeholder-main"><section className="page-placeholder"><p className="eyebrow">TradePilot AI · V0.1</p><h1>{title}</h1><p>{description}</p></section></main>;
}

function App() {
  return (
    <div className="app-shell"><Header /><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analysis" element={<AnalysisPage />} />
      <Route path="/loading" element={<LoadingPage />} />
      <Route path="/report" element={<ReportPage />} />
      <Route path="*" element={<Placeholder title="Page not found" description="Choose a page from the navigation above." />} />
    </Routes></div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </StrictMode>,
);
