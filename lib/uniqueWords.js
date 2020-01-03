
module.exports = function (doc) {
    let countsObj = {}
    docArr = doc.split(' ').sort()
    docArr.forEach((word) => { countsObj[word] = (countsObj[word] || 0) + 1 })
    const sortedArray = []
    for (let word in countsObj) {
        sortedArray.push([word, countsObj[word]])
    }
    return sortedArray
}
