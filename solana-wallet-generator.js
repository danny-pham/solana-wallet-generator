const { Keypair, SystemProgram, Connection, Transaction } = require('@solana/web3.js');
const seedPhraseGenerator = require('seed-phrase-generator');

async function generateSeedPhrase() {
    return seedPhraseGenerator.generateSeedPhrase();
}

async function createSolanaWallet(seedPhrase) {
    const seed = Buffer.from(seedPhrase, 'hex');

    const keypair = Keypair.fromSeed(seed);

    const publicKey = keypair.publicKey.toBase58();

    return {
        publicKey: publicKey,
        secretKey: keypair.secretKey.toString(),
    };
}

module.exports = {
    generateSeedPhrase: generateSeedPhrase,
    createSolanaWallet: createSolanaWallet
};
