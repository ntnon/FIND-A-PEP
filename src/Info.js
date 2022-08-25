const Info = (props) => {
    const data = props.data
    var hits = 0
    var results = "no results"

    if (data) {
        hits = data.numberOfHits
        results = data.hits.map((object) => printVals(object))
    }
    /*
    The printVals function is based on code from this article
    https://kyleshevlin.com/how-to-render-an-object-in-react
    */
    function printVals(obj) {
        if (obj) {
            return <pre>
                <code>
                    {JSON.stringify(obj, null, 4)}
                </code>
            </pre>
        }
    }

    return (
        <div className="info">
            Hits: {hits}
            <br></br>
            {results}
        </div>

    )
}
export default Info;