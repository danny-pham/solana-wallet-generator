const solanaWalletGenerator = require('./solana-wallet-generator');

async function main() {
    try {
        const seedPhrase = await solanaWalletGenerator.generateSeedPhrase();

        console.log('Seed Phrase:', seedPhrase);

        const solanaWallet = await solanaWalletGenerator.createSolanaWallet(seedPhrase);

        console.log('Solana Public Key:', solanaWallet.publicKey);
        console.log('Solana Secret Key:', solanaWallet.secretKey);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
