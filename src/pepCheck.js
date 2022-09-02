function pepCheck(a) {
    if (a.type != "person") { //gray
        return "not PEP"
    }
    if (a.data.numberOfHits <= 0) { //green
        return "not PEP"
    }
    if (a.data.numberOfHits == 2) { //blue
        return "PEP"
    }
    else { //orange //(a.data.numberOfHits > 2)
        return "maybe PEP"
    }

}

export default pepCheck;