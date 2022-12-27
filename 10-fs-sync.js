const {readFileSync, writeFileSync, read} = require('fs')
// the above is the same as the three lines of code below
// const fs = require('fs')
// fs.readFileSync()
// fs.writeFileSync()

// console.log('start')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
    './content/result-sync.txt',
    `Hello world from the write file sync! Here is the result from first: ${first} and second: ${second}`,
    {flag: 'a'}
)

// console.log('I am done with this task')
// console.log('Starting the next task')