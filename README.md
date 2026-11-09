# Solana Candy Machine v3 Mint UI

> **Status: experiment, not maintained.** A 2024 test deployment of Metaplex Candy Machine v3, kept here for reference.

A mint page for a Solana NFT collection on Metaplex **Candy Machine v3**. Holders connect a Solana wallet, see supply and countdowns, and mint through whichever guards apply to them (allowlist, SOL payment, start and end dates, and more).

**Demo:** [cmv3-ui-0xdavin.vercel.app](https://cmv3-ui-0xdavin.vercel.app)

## What I set up

- Configured mint groups and guards in `settings.tsx`
- Merkle allowlist in `allowlist.tsx`, with proofs checked client-side before minting
- Deployed on Vercel for testing (devnet by default)

Built on the excellent [umi-cmv3-ui-inofficial](https://github.com/MarkSackerberg/umi-cmv3-ui-inofficial) by Mark Sackerberg, which handles lookup tables for many active guards and splits large allowlist mints across transactions.

## Run it

```bash
npm install
cp .env.example .env    # set your candy machine ID and RPC endpoint
npm run dev
```

## Stack

Next.js 13 · TypeScript · Chakra UI · Metaplex Umi · Solana wallet adapter

---

<sub>Built by [Davin Harding](https://davin.io) · More at [github.com/davinharding](https://github.com/davinharding)</sub>
