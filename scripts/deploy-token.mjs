import { Keypair } from "@solana/web3.js";
import { ThirdwebSDK } from "@thirdweb-dev/solana";
import Bs58 from "bs58";
import { config } from "dotenv";

config();

// Instantiate the SDK and pass in a signer
const sdk = ThirdwebSDK.fromNetwork("devnet");
const keypair = Keypair.fromSecretKey(
  Buffer.from(Bs58.decode(process.env.PRIVATE_KEY))
);
sdk.wallet.connect(keypair);

// Define the metadata for your program
const metadata = {
  symbol: "TOK",
  description: "My token",
  name: "My Token",
  initialSupply: 100,
};

// And deploy a new program from the connected wallet
const address = await sdk.deployer.createToken(metadata);

console.log(address);
console.log("Contract deployed successfully! 🎉");

const token = await sdk.getToken(address);
const supply = await token.totalSupply();

console.log(supply);
