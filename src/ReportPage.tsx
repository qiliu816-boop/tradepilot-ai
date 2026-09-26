import { useEffect, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { actions, competitors, needs, opportunities, painPoints, prices, risks } from "./reportData";
import "./report.css";

function Label({ kind }: { kind: "fact" | "inference" | "evidence" | "limitation" | "action" }) {
  const labels = { fact: "DATA FACT", inference: "AI INFERENCE", evidence: "EVIDENCE", limitation: "LIMITATION", action: "BUSINESS IMPLICATION" };
  return <span className={`report-label ${kind}`}>{labels[kind]}</span>;
}

function ReportSection({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return <section id={id} className="report-section" aria-labelledby={`${id}-title`}>
    <header className="report-section-heading"><span>{number}</span><h2 id={`${id}-title`}>{title}</h2></header>
    {children}
  </section>;
}

export default function ReportPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, []);

  return <main className="report-page"><div className="container">
    <header className="report-header">
      <div><p className="eyebrow">TRADEPILOT AI · MARKET REPORT</p><h1>Market Opportunity Report</h1><p className="report-product">Women's Commuter Tote Bag</p><p>Malaysia · TikTok Shop · Market Entry</p></div>
      <ol className="report-progress" aria-label="Analysis progress"><li><strong>01</strong> Input</li><li><strong>02</strong> Analyse</li><li aria-current="step"><strong>03</strong> Report</li></ol>
    </header>
    <div className="report-demo"><span className="report-label evidence">DEMO DATA</span><p>This V0.1 report uses a curated mock dataset to demonstrate TradePilot's analysis workflow.</p></div>
    <p className="report-assumptions">Demo assumptions: estimated product cost <strong>RM35</strong> · target selling price <strong>RM79</strong>. This fixed demo report does not recalculate from edited inputs.</p>

    <section className="report-executive" aria-labelledby="opportunity-title">
      <div><Label kind="inference" /><h2 id="opportunity-title">Market Opportunity <span className="report-signal">Promising</span></h2><p>The product shows a viable mid-market entry opportunity, with customer demand around practical commuter features and clear differentiation opportunities in storage, durability and laptop protection.</p><p className="report-note">AI interpretation based on the demo evidence below. Qualitative indicators, not a scientifically calculated score.</p></div>
      <dl>{[["Price Position", "Competitive"], ["Customer Demand Signals", "Strong"], ["Competitive Intensity", "Medium"]].map(([key, value]) => <div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}</dl>
      <a href="#opportunities">Explore the supporting evidence and reasoning ↓</a>
    </section>

    <ReportSection id="snapshot" number="01" title="Market Snapshot">
      <Label kind="fact" />
      <dl className="report-metrics">{[["Competitors", "12"], ["Customer Reviews", "326"], ["Observed Price Range", "RM49–RM129"], ["Median Competitor Price", "RM79"]].map(([key, value]) => <div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}</dl>
      <figure className="report-price-chart"><figcaption><strong>Price landscape</strong><span>12 mock competitor prices · MYR</span></figcaption>
        <div className="report-price-bars" role="img" aria-label={`Competitor prices: ${prices.join(", ")} MYR. Median: RM79.`}>
          <div className="report-median-line" style={{ bottom: `${79 / 140 * 100}%` }}><span>RM79 median</span></div>
          {prices.map((price, index) => <div key={index} className="report-price-column" style={{ "--price-height": `${price / 140 * 100}%` } as CSSProperties}><span>{price}</span><i /></div>)}
        </div>
        <p className="report-note">Sorted from RM49 to RM129. Median = average of the sixth and seventh prices: (RM79 + RM79) ÷ 2.</p>
      </figure>
    </ReportSection>

    <div className="report-customer-grid">
      <ReportSection id="needs" number="02" title="What customers value">
        <Label kind="fact" /><p>Recurring needs identified from the demo customer review dataset.</p>
        <ul className="report-needs">{needs.map(need => <li key={need.title}><div><strong>{need.title}</strong><span>{need.percent}%</span></div><div className="report-need-track" aria-hidden="true"><span style={{ width: `${need.percent}%` }} /></div><small>Mentioned in {need.percent}% of relevant reviews</small></li>)}</ul>
        <p className="report-note">Based on keyword and theme frequencies within the curated demo review dataset. Themes overlap; percentages do not sum to 100% and do not measure purchase intent.</p>
      </ReportSection>
      <ReportSection id="pain-points" number="03" title="Where customers are dissatisfied">
        <Label kind="evidence" /><p>Recurring complaints in the demo review sample.</p>
        <ul className="report-pains">{painPoints.map(pain => <li key={pain.title}><div><h3>{pain.title}</h3><span>{pain.count} mentions</span></div><blockquote>“{pain.quote}”</blockquote></li>)}</ul>
        <p className="report-note">All example reviews are mock demonstration content, not live customer reviews. Mention counts can overlap.</p>
      </ReportSection>
    </div>

    <ReportSection id="competitors" number="04" title="Competitor Landscape">
      <Label kind="fact" /><p>Five featured products from the 12-product mock sample.</p>
      <div className="report-table-scroll" role="region" aria-label="Competitor comparison, scroll horizontally on small screens" tabIndex={0}>
        <table><caption>Mock competitor listings · ratings out of 5</caption><thead><tr>{["Product", "Price", "Rating", "Review Count", "Positioning", "Key Strength", "Key Weakness"].map(title => <th key={title} scope="col">{title}</th>)}</tr></thead><tbody>{competitors.map(row => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th key={index} scope="row">{cell}</th> : <td key={index}>{cell}</td>)}</tr>)}</tbody></table>
      </div>
      <p className="report-note">Review Count shows mock listing totals; the 326 reviews analysed are a separate curated sample, not the sum of those totals. Swipe or scroll the table on smaller screens.</p>
    </ReportSection>

    <ReportSection id="opportunities" number="05" title="Market Opportunities">
      <p>Follow each conclusion from observable demo evidence to interpretation and a business decision.</p>
      <div className="report-opportunities">{opportunities.map((opportunity, index) => <article id={opportunity.id} key={opportunity.id} className="report-opportunity">
        <h3><span>0{index + 1}</span> {opportunity.title}</h3>
        <div className="report-reasoning"><div><Label kind="fact" /><p>{opportunity.fact}</p></div><div><Label kind="inference" /><p>{opportunity.inference}</p></div><div><Label kind="action" /><p>{opportunity.implication}</p></div></div>
        <details className="report-evidence"><summary>View Evidence <span>— {opportunity.title}</span></summary><div><p><strong>Source:</strong> {opportunity.source}</p><p>{opportunity.evidence}</p>{opportunity.quotes.length > 0 && <><strong>Example comments · mock content</strong>{opportunity.quotes.map(quote => <blockquote key={quote}>“{quote}”</blockquote>)}</>}<a href={`#${opportunity.anchor}`}>{opportunity.link} ↑</a></div></details>
      </article>)}</div>
    </ReportSection>

    <ReportSection id="risks" number="06" title="Risks & Limitations">
      <Label kind="limitation" /><p>Use the signal to design a test. The current evidence does not justify a full-scale inventory commitment.</p>
      <dl className="report-risks">{risks.map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl>
    </ReportSection>

    <ReportSection id="actions" number="07" title="Recommended Actions">
      <Label kind="inference" /><p>Proposed business tests based on the evidence and limitations above.</p>
      <ol className="report-actions-list">{actions.map(action => <li key={action.title}><h3>{action.title}</h3><p>{action.text}</p><p className="report-action-reason"><strong>Reason:</strong> {action.reason}</p><a href={`#${action.anchor}`}>{action.link} ↑</a></li>)}</ol>
    </ReportSection>

    <section className="report-decision" aria-labelledby="decision-title"><Label kind="inference" /><h2 id="decision-title">Decision Summary</h2>
      <dl>{[["Market Entry Signal", "Promising"], ["Recommended Position", "Mid-market commuter utility"], ["Suggested Test Price", "RM69–RM79"], ["Primary Differentiation", "Durability + organisation + laptop protection"], ["Primary Risk", "Price competition"], ["Next Step", "Run a limited product validation test"]].map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl>
      <p>This is an AI-assisted recommendation based on the available demo evidence, not a guaranteed business outcome.</p>
    </section>
    <nav className="report-footer-actions" aria-label="Report actions"><Link className="button primary" to="/analysis" onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}>Start New Analysis <span aria-hidden="true">↗</span></Link><Link className="button secondary" to="/" onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}>Back to Home</Link></nav>
  </div></main>;
}
