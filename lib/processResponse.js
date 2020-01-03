
const removeExtras = require('./removeExtras')
const countWords = require('./countWords')
const uniqueWords = require('./uniqueWords')


module.exports = function (data , sortBy) {
    data = removeExtras(String(data))
    const wordCount = countWords(data)
    console.log('Word count:', wordCount, typeof data)
    data = uniqueWords(data.toLowerCase())
    if (sortBy === 'count') {
        data.sort((a, b) => { return a[1] - b[1] }).reverse()
        data[0][0] = "Sorted by Frequency"
    } else {
        data[0][0] = "Sorted by Alphabet"
    }
    data[0][1] = `${wordCount} words`
    data = JSON.stringify(data)
    return data
}