import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./loading.css";

const stages = [
  ["Reading Market Evidence", "Reviewing competitor products, prices and customer feedback."],
  ["Extracting Customer Signals", "Identifying recurring customer needs, pain points and purchase signals."],
  ["Comparing Competitors", "Structuring competitor positioning, pricing and product differentiation."],
  ["Evaluating Market Opportunity", "Connecting evidence to potential pricing, positioning and market-entry opportunities."],
  ["Generating Recommendations", "Preparing evidence-backed actions, risks and limitations."],
];

const summary = [
  ["Product", "Women's Commuter Tote Bag"],
  ["Market", "Malaysia"],
  ["Platform", "TikTok Shop"],
  ["Goal", "Market Entry"],
  ["Evidence", "12 competitors · 326 reviews"],
];

export default function LoadingPage() {
  // The demo begins with evidence extraction complete, before interpretation.
  const [completed, setCompleted] = useState(2);
  const isComplete = completed === stages.length;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const timers = [3, 4, 5].map((count, index) =>
      window.setTimeout(() => setCompleted(count), (index + 1) * 1600),
    );
    return () => timers.forEach(window.clearTimeout);
  }, []);

  return (
    <main className="loading-page">
      <div className="container">
        <header className="loading-header">
          <div>
            <p className="eyebrow">TRADEPILOT AI · MARKET ANALYSIS</p>
            <h1>Analysing your market opportunity.</h1>
            <p>TradePilot is structuring market evidence, identifying customer signals and generating evidence-backed business insights.</p>
          </div>
          <ol className="loading-progress" aria-label="Analysis progress">
            <li><strong>01</strong> Input</li>
            <li aria-current="step"><strong>02</strong> Analyse</li>
            <li><strong>03</strong> Report</li>
          </ol>
        </header>

        <dl className="loading-summary" aria-label="Demo analysis summary">
          {summary.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>

        <div className="loading-layout">
          <section className="loading-workflow" aria-labelledby="workflow-title">
            <div className="loading-workflow-heading">
              <h2 id="workflow-title">Analysis workflow</h2>
              <span>{completed} of 5 complete</span>
            </div>
            <ol className="loading-stages" aria-label="Analysis stages">
              {stages.map(([title, description], index) => {
                const status = index < completed ? "Complete" : index === completed ? "Processing" : "Waiting";
                return (
                  <li key={title} className={`loading-stage ${status.toLowerCase()}`} aria-current={status === "Processing" ? "step" : undefined}>
                    <span className="loading-stage-icon" aria-hidden="true">{status === "Complete" ? "✓" : `0${index + 1}`}</span>
                    <div><h3>{title}</h3><p>{description}</p></div>
                    <span className="loading-stage-status">{status}</span>
                  </li>
                );
              })}
            </ol>
            <div className={`loading-result${isComplete ? " finished" : ""}`}>
              <div role="status" aria-live="polite" aria-atomic="true">
                <h2>{isComplete ? "Analysis complete." : `${stages[completed][0]}…`}</h2>
                <p>{isComplete ? "Your evidence-backed market opportunity report is ready." : "Working through the demo evidence, one stage at a time."}</p>
              </div>
              {isComplete && <Link className="button primary" to="/report">View Market Report <span aria-hidden="true">↗</span></Link>}
            </div>
          </section>

          <aside className="loading-evidence" aria-labelledby="loading-evidence-title">
            <p className="eyebrow">THE EVIDENCE MECHANISM</p>
            <h2 id="loading-evidence-title">Evidence-first analysis</h2>
            <p>Data facts are extracted before AI interpretation.</p>
            <div className="loading-example">
              <span className="tag fact">DATA FACT</span>
              <p>Median competitor price: <strong>RM79</strong></p>
            </div>
            <div className="loading-example">
              <span className="tag inference">AI INFERENCE</span>
              <p>RM79 may represent a viable mid-market entry point.</p>
            </div>
            <p className="loading-demo-note">Demo workflow · Curated mock dataset</p>
          </aside>
        </div>
      </div>
    </main>
  );
}
