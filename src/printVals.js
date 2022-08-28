function printVals(obj) {
    var string = JSON.stringify(obj, null, 4)
    if (obj) {
        return <pre>
            <code>
                {string}
            </code>
        </pre>
    }
    else {
        return <pre>no results</pre>
    }
}
export default printVals;