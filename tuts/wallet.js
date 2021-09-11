/**
 * In this tutorial we are going to create an arweave wallet
 * 
 * Because we are learning we will use the arlocal tool to work with 
 * arweave locally.
 * 
 * before you get started make sure you are running arlocal in a separate terminal
 * 
 * > ./scripts/arlocal.sh
 * 
 */
import arweave from 'arweave'
import fs from 'fs'


// this initializes the arweave client
const ar = arweave.init({
    host: '127.0.0.1',
    port: 1984,
    protocol: 'http'
})

// 🚀 lets create a wallet

const wallet = await ar.wallets.generate()
fs.writeFileSync('wallet.json', JSON.stringify(wallet))

/**
 * To create a wallet, we need to call wallets.generate method
 * 
 * This method generates a JWK key, this key is what arweave uses
 * as a wallet.
 * 
 * We save the wallet to a json file, and now we can use it
 * to transact on the arweave!
 */