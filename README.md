# IrsanAI-Gold-Buddy — Decision-Support Buddy (not a finance bot)

First consumer of IrsanAI-Essence-Gate. Proves gatekeeper pattern.

What it really is: Buddy that helps decide when to let go / hold / accumulate something valuable — with reasoning + confidence + risk. Gold is just first demo domain. Output is {signal, confidence, reasoning, risk, usedEssences}, not "trade now".

Snapshot: 4010ade — Build Gate GRÜN — EG 6f74854 13/13 GRÜN — IS 1441a04

Build Gate:
npm install
npx tsx src/gold-buddy.ts --price 2040 --change 2.3 --rsi 72
npx tsx src/gold-buddy.ts --price 1980 --change -1.5 --rsi 38 -> BUY 0.65 GRÜN

Fetches: https://raw.githubusercontent.com/IrsanAI/IrsanAI-Essence-Gate/main/registry/essences/

## 🧭 Ecosystem — How to use without local files
- Engine: [IrsanAI-IS 1441a04](https://github.com/IrsanAI/IrsanAI-IS)
- Hub: [IrsanAI-Essence-Gate 6f74854](https://github.com/IrsanAI/IrsanAI-Essence-Gate) 13/13 GRÜN
- This repo: Consumer 1

No IS_INITIAL_*.txt needed. See docs/METHODIC.md — it embeds full Initial.

Why SELL/BUY? Simplest signal to demo gold-decision-support essence. Real value is reasoning + confidence + risk.
