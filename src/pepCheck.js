function pepCheck(type, data, subject, suggestions) {
    var pep = false;
    if (type !== "person") {
        return pep
    }

    if (suggestions.length === 0) {
        return pep
    }

    const n = subject.toLowerCase()
    for (var i = 0; i < suggestions.length; i++) {
        let f = suggestions[i].toLowerCase()
        if (f === n) {
            pep = true


        }
    }
    return pep
}

export default pepCheck

