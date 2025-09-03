async function fetchNews(subject) {
  let b = subject.replaceAll(" ", " ");
  console.log(b + " retrieved");
  var date = new Date();
  var current_date =
    date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
  console.log(current_date);
  //let current_date = "2022-08-09"
  return fetch(
    "https://newsapi.org/v2/everything?q=" +
      b +
      "&domains=aftenposten.no&sortBy=popularity&from=" +
      current_date +
      "&apiKey=" +
      process.env.REACT_APP_NEWS_API_KEY,
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    });
}

export default fetchNews;
