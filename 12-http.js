const http = require('http')

// req and res are both taco - can be any parameter name, but this is typical
const server = http.createServer((req, res)=>{
    if (req.url === ('/')) {
        res.end('Welcome to our home page')
    } else if (req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(
        `<h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back Home<a>`
    )
})

server.listen(3000)