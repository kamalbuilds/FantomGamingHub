// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { FantomMainnet , FantomTestnet} from "@thirdweb-dev/chains";

export const NETWORK = FantomTestnet;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0xD67757E7602A01be18a2C418cBcf08DAb5F21f5d";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS = "0x6E9F7A4Ae15Af0c6601166cea08f08B3d1E8340D";

export const RENTNFT_COLLECTION_ADDRESS = "0x787641796556f17395C311E8917538461701cd64";

// (Optional) Set up the URL of where users can view transactions on
export const ETHERSCAN_URL = "https://ftmscan.com/";
