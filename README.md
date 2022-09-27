# Solana Token deploy

This project demonstrates how you can create and deploy your own token on the Solana blockchain using thirdweb's Solana SDK.

## Tools:

- [Solana SDK](https://portal.thirdweb.com/solana): To deploy the token with metadata.

## Using This Template

Create a project using this example:

```bash
npx thirdweb create --template solana-token-deploy
```

- Export your wallet private key from phantom wallet and add it to the .env file.

```env
PRIVATE_KEY=your_private_key
```

## How It Works

Using the thirdweb SDK, you can create and deploy your own token on the Solana blockchain. We use `@solana/web3.js` package to create a wallet from the private key and pass it into thirdweb to initialize the SDK. Finally, we use the initialised sdk to create and deploy the token.

```js
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
```

Next, we use the `getToken` function to get the token detail and show the total Supply:

```js
const token = await sdk.getToken(address);
const supply = await token.totalSupply();
```

## Join our Discord!

For any questions or suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).
