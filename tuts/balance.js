import arweave from 'arweave'
import fs from 'fs'
import fetch from 'node-fetch'

const ar = arweave.init({
    host: '172.0.0.1',
    port: 1984,
    protocol: 'http'
})

const wallet = JSON.parse(fs.readFileSync('./wallet.json', { encoding: 'utf8'}))


const address = await ar.wallets.jwkToAddress(wallet)
//const balance = await fetch(`http://127.0.0.1:1984/wallet/${publicKey}/balance`).then(r => r.text())
//console.log(balance)
const balance = await ar.wallets.getBalance(address)
console.log(balance)