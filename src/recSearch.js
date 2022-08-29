var data,
    targets;
let results = []

function addToResults(r) {
    results.push(r)
}

function search(obj, targets) {
    var result = []
    if (obj instanceof Array) {
        for (var i = 0; i < obj.length; i++) {
            result.push(search(obj[i], targets))
        }
    }
    else {
        for (var prop in obj) {
            if (targets.includes(prop)) {
                addToResults(obj[prop], targets)
                return obj[prop]
            }
            if (obj[prop] instanceof Object || obj[prop] instanceof Array) {
                result = (search(obj[prop], targets))
            }
        }
    }
    return results

}
function recSearch(obj, targets) {
    results = []
    return search(obj, targets)
}



export default recSearch;