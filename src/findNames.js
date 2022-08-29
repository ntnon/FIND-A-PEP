const findNames = (props) => {
    const data = props.data
    const keywords = ["navn"]
    var results = []

    function addToResults(r) {
        results.push(r)
    }

    async function locateNamesRec(obj) {
        var result = []
        if (obj instanceof Array) {
            for (var i = 0; i < obj.length; i++) {
                result.push(locateNamesRec(obj[i]))
            }
        }
        else {
            for (var prop in obj) {
                if (keywords.includes(prop)) {
                    addToResults(obj[prop])
                    return obj[prop]
                }
                if (obj[prop] instanceof Object || obj[prop] instanceof Array) {
                    result = (locateNamesRec(obj[prop]))
                }
            }
        }
        return result
    }

    /*
    * takes a list of names. Returns only valid names
    * valid name is an object like this {"fornavn":x, "etternavn":y}
    */

    function collapse(r) {
        var t = []
        for (var e in r) {
            if (r[e].fornavn) {
                t.push(r[e].fornavn + " " + r[e].etternavn)
            }
        }
        return t
    }
    locateNamesRec(data)
    return collapse(results)
}

export default findNames;