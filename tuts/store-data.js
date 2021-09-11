/**
 * In this tutorial we are going to send some data to arweave
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

const wallet = fs.readFileSync('./wallet.json', {encoding: 'utf8'})
const key = JSON.parse(wallet)

const ar = arweave.init({
    host: '127.0.0.1',
    port: 1984,
    protocol: 'http'
})

const tx = await ar.createTransaction({
    data: '<h1>Goodbye moon</h1>',
})

tx.addTag('Content-Type', 'text/html')

await ar.transactions.sign(tx, key)
await ar.transactions.post(tx)
console.log(`visit http://localhost:1984/${tx.id}`)
