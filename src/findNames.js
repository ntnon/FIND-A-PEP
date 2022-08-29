import recSearch from "./recSearch"
/*
* takes a list of names. Returns only valid names
* valid name is an object like this {"fornavn":x, "etternavn":y}
*/

function findNames(r) {

    const listOfNames = recSearch(r, ["navn"])
    console.log(listOfNames)
    var t = []
    for (var e in listOfNames) {
        if (listOfNames[e].fornavn) {
            t.push(listOfNames[e].fornavn + " " + listOfNames[e].etternavn)
        }
    }
    return t
}

export default findNames;