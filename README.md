# Solana Wallet Generator

## Introduction
Solana Wallet Generator is a JavaScript library that allows you to generate Solana wallets (addresses) from a seed phrase. It utilizes the `seed-phrase-generator` library to generate secure seed phrases.

## Installation
You can install the library via npm:

```
npm install @solana/web3.js seed-phrase-generator
```

## Usage
Here's how to use the library to generate Solana wallets from seed phrases:

```
const solanaWalletGenerator = require('solana-wallet-generator');

async function main() {
    try {
        // Generate seed phrase
        const seedPhrase = await solanaWalletGenerator.generateSeedPhrase();
        console.log('Seed Phrase:', seedPhrase);

        // Create Solana wallet from seed phrase
        const solanaWallet = await solanaWalletGenerator.createSolanaWallet(seedPhrase);
        console.log('Solana Public Key:', solanaWallet.publicKey);
        console.log('Solana Secret Key:', solanaWallet.secretKey);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
```

The `generateSeedPhrase` function generates a random and secure seed phrase using the `seed-phrase-generator` library. The `createSolanaWallet` function then creates a Solana wallet from the generated seed phrase, returning the Solana public key and secret key.

## License
This library is released under the MIT License.