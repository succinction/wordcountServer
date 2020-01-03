// count the number of words in a doc
// count the number of unique words in a doc
// find the most used words in a doc

const http = require('http')
const fs = require('fs')
const removeExtras = require('./lib/removeExtras')
const countWords = require('./lib/countWords')
const processResponse = require('./lib/processResponse')

function onRequest(request, response) {
    console.log('request.url', request.url)
    if (request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        fs.readFile('./Josephus/vita.txt', null, function (error, data) {
            if (error) {
                response.writeHead(404)
                response.write('file not found')
            } else {
                dataR = removeExtras(String(data))
                console.log('Word count:', countWords(dataR))
                response.write(data)
            }
            response.end()
        })
    } else if (request.url === '/words') {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        fs.readFile('./Josephus/vita.txt', null, function (error, data) {
            if (error) {
                response.writeHead(404)
                response.write('file not found')
            } else {
                data = processResponse(data, 'count')
                response.write(data)
            }
            response.end()
        })
    } else if (request.url === '/dict') {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        fs.readFile('./Josephus/vita.txt', null, function (error, data) {
            if (error) {
                response.writeHead(404)
                response.write('file not found')
            } else {
                data = processResponse(data, '')
                response.write(data)
            }
            response.end()
        })
    }
}

const PORT = 8001
http.createServer(onRequest).listen(PORT)
console.log('server running on port ' + PORT)
