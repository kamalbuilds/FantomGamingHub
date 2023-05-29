// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { FantomMainnet , FantomTestnet} from "@thirdweb-dev/chains";

export const NETWORK = FantomTestnet;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS = "";

export const RENTNFT_COLLECTION_ADDRESS = "";

// (Optional) Set up the URL of where users can view transactions on
export const ETHERSCAN_URL = "https://ftmscan.com/";
