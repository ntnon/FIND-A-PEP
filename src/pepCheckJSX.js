function pepCheckJSX(a) {
    if (a.type != "person") { //gray
        return (<div className="company">company</div>)
    }
    let b = a.data.numberOfHits
    if (b <= 0) { //green
        return (<div className="notPep">not PEP</div>)
    }
    if (b == 1) { //blue
        return (<div className="pep">PEP</div>)
    }
    if (b == 2) {
        return (<div className="pep">PEP</div>)
    }
    if (b > 2) {
        return (<div className="maybePep">maybe PEP</div>)
    }
}

export default pepCheckJSX;