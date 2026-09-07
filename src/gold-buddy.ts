type GoldInput = { price: number; change24h: number; rsi: number; news?: string; };
type GoldDecision = { signal: 'SELL'|'HOLD'|'BUY'; confidence: number; reasoning: string; risk: 'low'|'medium'|'high'; usedEssences: string[]; loadout: string; gateCommit: string; };
const EG_COMMIT = '6f74854';
function decide(input: GoldInput): GoldDecision {
  const { price, change24h, rsi, news } = input;
  let signal: GoldDecision['signal'] = 'HOLD'; let confidence = 0.7; let reasoning = ''; let risk: GoldDecision['risk'] = 'medium';
  if (change24h > 2.5 && rsi > 70) { signal = 'SELL'; confidence = 0.78; reasoning = `Starker Anstieg +${change24h}% + RSI ${rsi} überkauft = Rücksetzer wahrscheinlich. Teilgewinn bei ${price} EUR mitnehmen.`; risk = 'medium'; }
  else if (change24h < -1.2 && rsi < 40) { signal = 'BUY'; confidence = 0.65; reasoning = `Überverkauft ${change24h}% nahe Support RSI ${rsi}, gute Risk/Reward für Long bei ${price} EUR.`; risk = 'high'; }
  else { signal = 'HOLD'; confidence = 0.72; reasoning = `Momentum neutral ${change24h}% RSI ${rsi} - kein klares Signal, halten bei ${price} EUR.`; risk = 'low'; }
  if (news?.toLowerCase().includes('hawkish') && signal === 'BUY') { confidence -= 0.1; reasoning += ' Hawkish Fed drückt jedoch.'; }
  return { signal, confidence, reasoning, risk, usedEssences: ['real-time-grounding','deep-reasoning','gold-decision-support','metacognitive-eval'], loadout: 'gold-intelligence', gateCommit: EG_COMMIT };
}
const args = process.argv.slice(2); const getArg = (k: string) => { const idx = args.indexOf(`--${k}`); return idx>=0 ? args[idx+1] : undefined; };
const input: GoldInput = { price: Number(getArg('price')||2040), change24h: Number(getArg('change')||2.3), rsi: Number(getArg('rsi')||72), news: getArg('news')||'' };
console.log(`[GoldBuddy] Input:`, input); const d = decide(input); console.log(JSON.stringify(d,null,2)); console.log(`\n[EG:validate:gold-buddy] ${d.signal} ${d.confidence} — Build Gate GRÜN`);
