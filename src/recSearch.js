var data,
    targets;
var results = []

function addToResults(r) {
    results.push(r)
}

function recSearch(obj, targets) {
    var result = []
    if (obj instanceof Array) {
        for (var i = 0; i < obj.length; i++) {
            result.push(recSearch(obj[i], targets))
        }
    }
    else {
        for (var prop in obj) {
            if (targets.includes(prop)) {
                addToResults(obj[prop], targets)
                return obj[prop]
            }
            if (obj[prop] instanceof Object || obj[prop] instanceof Array) {
                result = (recSearch(obj[prop], targets))
            }
        }
    }
    return results
}



export default recSearch;