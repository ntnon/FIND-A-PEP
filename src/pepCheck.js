function pepCheck(type, data) {
    if (type !== "person") {
        return false
    }

    let hits = data.numberOfHits

    if (hits == 0) { //green
        return false
    }
    if (hits == 1) { //blue
        return true
    }
    if (hits == 2) {
        return true
    }
    if (hits > 2) {
        return false
    }
}


export default pepCheck

