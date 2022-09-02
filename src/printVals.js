function printVals(obj) {

    var string = JSON.stringify(obj, null, 4)
    if (obj) {
        return <pre>

            {string}

        </pre>
    }
    else {
        return <pre>no results</pre>
    }
}
export default printVals;