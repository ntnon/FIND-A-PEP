
async function fetchNews(subject) {
    let b = subject.replaceAll(" ", " ")
    console.log(b + " retrieved")
    return fetch("https://newsapi.org/v2/everything?q=" + b + "&domains=aftenposten.no&sortBy=popularity&from=2022-08-07&apiKey=da61097fad824208a02bd60b33e7ab9d")
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            return data
        })
}

export default fetchNews