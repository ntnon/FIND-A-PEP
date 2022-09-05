import findNames from "./findNames"
import findSuggestions from "./findSuggestions";
import pepCheck from "./pepCheck";

const fetchIt = (base, subject, type) => {
    let controller = new AbortController();
    setTimeout(() => controller.abort(), 20000);
    let url = base + subject.toString()

    return fetch(url, { signal: controller.signal })
        .then(res => {
            let a = res.json()
            return a
        }).then(data => {
            return { "type": type, "subject": subject, "data": data, "pep": pepCheck(type, data), "suggestions": findSuggestions(type, data) }
        }).catch(error => {
            console.error(error)
            throw Error(error)
        })

}

export default fetchIt