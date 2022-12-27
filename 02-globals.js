// Globals - no window

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log('this is your dirname ' +__dirname)
setInterval(()=> {
    console.log('hello world')
}, 1000)

// type 'node app.js' in the terminal and you will see the console log print the above