

module.exports = function (doc) {
    const extras = `1234567890[].!?:;,-"`.split('')
    doc = doc.split('\n').join(' ')
    doc = doc.split('\r').join(' ')
    extras.map(item => {
        doc = doc.split(item).join('')
    })
    return doc
}


