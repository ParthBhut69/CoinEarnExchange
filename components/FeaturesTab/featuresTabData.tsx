import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Earning Opportunities for Traders",
    desc1: `Profit from AI Trading: Traders can deposit funds, select their risk profile, and let the AI trade automatically. The profits will be transferred back in either USDT or CEE  tokens.`,
    desc2: `High-Yield Strategies: AI-based strategies, like arbitrage and momentum trading, will offer high-profit potential with optimized risk management.`,
    desc3: "",
    image: "/images/features/ai.jpg",
    imageDark: "/images/features/ai.jpg",
  },
  {
    id: "tabTwo",
    title: "Earning Opportunities for Investors",
    desc1: `Investors who stake their CEE  tokens will earn interest on their staked amounts, paid out in platform tokens or USDT.`,
    desc2: `Investors who stake their tokens can choose to "lease" additional capital to the platform's vetted traders. The profits earned from trading with this capital will be shared between the investor and the trader.`,
    desc3: 'Long-term investors can vote on platform decisions, from algorithm updates to fee structures, through governance staking.',
    image: "/images/features/trade.avif",
    imageDark: "/images/features/trade.avif",
  },
 
  

];

export default featuresTabData;
