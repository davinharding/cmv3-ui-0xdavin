// Purpose: Contains texts that will be used in the UI when rendering the buttons
// label has to be the exact same as in your candy machine config
export const mintText = [
  { label: "cbarF", mintText: "Free Mint for CBAR Members", buttonLabel: "Mint now!", header: "CBAR Free Mint" },
  { label: "cbarP", mintText: "Cbar Mint: 0.15 SOL", buttonLabel: "Mint now!", header: "CBAR Paid Mint" },
  { label: "wlGF", mintText: "Guaranteed Free Mint for WL", buttonLabel: "Mint now!", header: "WL Guaranteed"}, // DAVIN: modify and match to current al in allowlist.tsx
  { label: "wlGP", mintText: "WL Mint: 0.2 SOL", buttonLabel: "Mint now!", header: "WL Guaranteed"},
  { label: "wlFCFS", mintText: "WL FCFS Mint: 0.2 SOL", buttonLabel: "Mint now!", header: "WL FCFS"},
  { label: "public", mintText: "Public Mint: 0.25 SOL", buttonLabel: "Mint now!", header: "Public"},
];

//header image in the ui. replace with your own
export const image = "/Logo's Projects Black.jpg";

//website title
export const headerText = "Foretelling"; //test