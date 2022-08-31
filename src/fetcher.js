import findNames from "./findNames"

const fetchIt = (base, subject, type) => {
    let controller = new AbortController();
    setTimeout(() => controller.abort(), 10000);
    let url = base + subject.toString()
    try {
        return fetch(url, { signal: controller.signal })
            .then(res => {
                let a = res.json()
                return a
            }).then(data => {
                return { "type": type, "subject": subject, "data": data }
            })
    }
    catch (err) {
        throw Error("Took too long to process")
    }
}

//Promise.all(fetchlist.map(x => (fetch(x).then(response => response.json()))).then(results => console.log(results)))

export default fetchIt