// Curated demonstration data, not live marketplace observations.
export const prices = [49, 59, 59, 69, 75, 79, 79, 89, 99, 109, 119, 129];
export const needs = [
  { title: "Lightweight design", percent: 34 },
  { title: "Large capacity", percent: 29 },
  { title: "Waterproof material", percent: 24 },
  { title: "Laptop compartment", percent: 21 },
  { title: "Comfortable shoulder straps", percent: 18 },
];
export const painPoints = [
  { title: "Strap durability", count: 27, quote: "The bag looks good, but the shoulder strap feels weak." },
  { title: "Zipper quality", count: 22, quote: "The zipper became difficult to close after a few weeks." },
  { title: "Limited internal organisation", count: 19, quote: "I wish there were more compartments inside." },
  { title: "Size expectation mismatch", count: 16, quote: "It looked larger in the listing photos." },
];
export const competitors = [
  ["UrbanCarry Tote", "RM59", "4.5", "842", "Budget commuter", "Affordable and lightweight", "Limited organisation"],
  ["MetroDaily Bag", "RM79", "4.7", "1,124", "Mid-market commuter", "Laptop protection", "Weak straps reported"],
  ["Nova Work Tote", "RM89", "4.6", "738", "Professional", "Internal organisation", "Higher price"],
  ["FlexiDay Tote", "RM69", "4.4", "516", "Everyday value", "Large capacity", "Average material quality"],
  ["Lumi Office Tote", "RM109", "4.8", "623", "Premium commuter", "Material quality", "Premium pricing"],
];
export const opportunities = [
  {
    id: "pricing", title: "Mid-market pricing opportunity",
    fact: "Median competitor price is RM79.",
    inference: "The planned RM79 selling price sits at the observed market median, avoiding both deep-discount and premium positioning.",
    implication: "Compete through product differentiation rather than price discounting.",
    source: "12 demo competitor products · price observations in MYR",
    evidence: `Sorted prices: ${prices.map(price => `RM${price}`).join(", ")}. The sixth and seventh observations are both RM79, giving a median of RM79. This describes the sample, not proven willingness to pay.`,
    anchor: "snapshot", link: "See Market Snapshot", quotes: [],
  },
  {
    id: "utility", title: "Functional commuter positioning",
    fact: "Laptop storage, capacity and waterproofing appear repeatedly in customer needs.",
    inference: "Customers may respond more strongly to practical commuter utility than to purely aesthetic positioning.",
    implication: "Prioritise commuter-focused product messaging and feature presentation.",
    source: "326 demo customer reviews · curated theme frequencies",
    evidence: "Relevant themes: laptop storage (21%), waterproofing (24%) and capacity (29%). Themes can overlap; these frequencies do not establish market-wide demand or sales conversion.",
    anchor: "needs", link: "See Customer Needs",
    quotes: ["My laptop and daily essentials fit comfortably.", "The waterproof material is useful on rainy commutes."],
  },
  {
    id: "durability", title: "Pain-point-led differentiation",
    fact: "Strap durability, zipper quality and internal organisation appear repeatedly in negative feedback.",
    inference: "Addressing these recurring weaknesses may create differentiation against similarly priced competitors.",
    implication: "Use sourcing and product quality decisions to solve high-frequency competitor complaints.",
    source: "326 demo customer reviews · negative-feedback themes",
    evidence: "Strap durability: 27 mentions; zipper quality: 22; internal organisation: 19. Mentions can overlap and are not verified product defect rates.",
    anchor: "pain-points", link: "See Customer Pain Points",
    quotes: [painPoints[0].quote, painPoints[2].quote],
  },
];
export const risks = [
  ["Competitive Market", "Multiple sellers already compete in the RM59–RM109 range."],
  ["Price Sensitivity", "A target price of RM79 may face pressure from lower-priced alternatives."],
  ["Mock Dataset", "This V0.1 analysis uses curated demonstration data and does not represent live TikTok Shop conditions."],
  ["Limited Market Coverage", "The demo dataset covers only a small sample of competitors and reviews."],
  ["External Factors", "Advertising costs, fulfilment costs, creator commissions, seasonality and platform policy changes are not included in the current analysis."],
];
export const actions = [
  { title: "Validate the RM69–RM79 price band", text: "Run a limited pricing test before moving above RM89.", reason: "The target RM79 price currently sits near the observed market median.", anchor: "pricing", link: "Pricing evidence & interpretation" },
  { title: "Position around commuter utility", text: "Emphasise laptop protection, waterproof material, organised storage and lightweight design.", reason: "These features appear repeatedly in customer needs.", anchor: "utility", link: "Customer evidence & interpretation" },
  { title: "Strengthen sourcing around durability", text: "Prioritise strap reinforcement, zipper quality and internal compartment construction.", reason: "These areas appear repeatedly in negative competitor feedback.", anchor: "durability", link: "Pain-point evidence & interpretation" },
  { title: "Run a small market validation test", text: "Launch a limited initial SKU / inventory test before scaling. Track click-through rate, conversion rate, return rate, review sentiment and price response.", reason: "The current evidence indicates opportunity but is not sufficient for a full-scale inventory decision.", anchor: "risks", link: "Review evidence limitations" },
];
