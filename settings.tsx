// Purpose: Contains texts that will be used in the UI when rendering the buttons
// label has to be the exact same as in your candy machine config
export const mintText = [
  { label: "cbarF", mintText: "Free Mint for CBAR Members", buttonLabel: "Mint now!", header: "CBAR Free Mint" },
  { label: "cbarP", mintText: "Cbar Mint Paying with Sol", buttonLabel: "Mint now!", header: "CBAR Paid Mint" },
  { label: "default", mintText: "Mint Price: 0.25 SOL", buttonLabel: "Mint now!", header: "Default"} // DAVIN: modify and match to current al in allowlist.tsx
];

//header image in the ui. replace with your own
export const image = "/Logo's Projects Black.jpg";

//website title
export const headerText = "Sol NFT PoC - 0xdavin";