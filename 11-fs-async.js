const {readFile, writeFile, read} = require('fs')

console.log('start')
// first argument is file to read, second is the encoding value, third is a callback function passing in the error in the result as params
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
//   console.log(`This is the first result: ${result}`)
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
      if (err) {
          console.log(err)
          return
        }
    // console.log(`This is the second result: ${result}`)
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')