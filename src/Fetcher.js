async function Fetcher(data) {
    const url = data.source
    let response = await fetch(url)
    let actualData = await response.json()
    return actualData
}

export default Fetcher;