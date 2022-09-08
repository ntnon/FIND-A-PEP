
async function fetchNews(subject) {
    let b = subject.replaceAll(" ", " ")
    console.log(b + " retrieved")
    var date = new Date();
    var current_date = date.getFullYear() + "-" + (date.getMonth()) + "-" + (date.getDate());
    console.log(current_date)
    //let current_date = "2022-08-09"
    return fetch("https://newsapi.org/v2/everything?q=" + b + "&domains=aftenposten.no&sortBy=popularity&from=" + current_date + "&apiKey=da61097fad824208a02bd60b33e7ab9d")
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            return data
        })
}

export default fetchNews