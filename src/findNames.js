import recSearch from "./recSearch"
/*
* takes a list of names. Returns only valid names
* valid name is an object like this {"fornavn":x, "etternavn":y}
* therefore when doing a pep search, this function will return no names
* to accurately retrieve "name"-values from other APIs, make changes in this module
*/

function findNames(r) {
    const listOfNames = recSearch(r, ["navn"])
    var t = []
    for (var e in listOfNames) {
        if (listOfNames[e].fornavn) {
            t.push(listOfNames[e].fornavn + " " + listOfNames[e].etternavn)
        }
    }
    return [...new Set(t)];
}

export default findNames;