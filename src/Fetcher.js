async function Fetcher(data) {
    const url = data.source
    let response = await fetch(url)
    if (!response.ok) {
        throw new Error(
            `This is an HTTP error: The status is ${response.status}`
        );
    }
    let actualData = await response.json()
    return actualData
}

export default Fetcher;