function pepCheck(a) {
    if (a.type != "person") { //gray
        return "company"
    }
    let b = a.data.numberOfHits
    if (b <= 0) { //green
        return "not PEP"
    }
    if (b == 1) { //blue
        return "PEP"
    }
    if (b == 2) {
        return "PEP"
    }
    if (b > 2) {
        return "maybe PEP"
    }
}
export default pepCheck

