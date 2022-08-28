//modified code from https://stackoverflow.com/questions/15523514/find-by-key-deep-in-a-nested-array

/**
 * Takes an object of nested objects
 */

const keywords = ["navn"]

function locateNamesRec(obj) {
    var result = []
    if (obj instanceof Array) {
        for (var i = 0; i < obj.length; i++) {
            result.push(locateNamesRec(obj[i]))
        }
    }
    else {
        for (var prop in obj) {
            if (keywords.includes(prop)) {
                return obj[prop]
            }
            if (obj[prop] instanceof Object || obj[prop] instanceof Array) {
                result = (locateNamesRec(obj[prop]))
            }
        }
    }
    return result

}

export default locateNamesRec;


