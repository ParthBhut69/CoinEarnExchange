import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "What is cryptocurrency?",
    ans: "Cryptocurrency is a digital or virtual currency that uses cryptography for security and operates on decentralized networks based on blockchain technology.",
  },
  {
    id: 2,
    quest: "How do I buy cryptocurrency?",
    ans: "You can buy cryptocurrency through exchanges like Coinbase or Binance using fiat currency, or from peer-to-peer platforms. You'll need a digital wallet to store your coins.",
  },
  {
    id: 3,
    quest: "What is blockchain?",
    ans: "Blockchain is a distributed ledger technology that records transactions across many computers, ensuring transparency and security without the need for a central authority.",
  },
  {
    id: 4,
    quest: "Is cryptocurrency safe?",
    ans: "While cryptocurrencies use strong security measures, they can be risky due to market volatility, hacking incidents, and regulatory changes. It’s important to use secure wallets and follow best practices.",
  },
  {
    id: 5,
    quest: "What is mining in cryptocurrency?",
    ans: "Mining is the process of validating transactions and adding them to the blockchain. Miners solve complex mathematical problems to earn new coins and transaction fees.",
  },
];

export default faqData;
