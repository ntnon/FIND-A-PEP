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
            let suggestions = findSuggestions(type, data)
            return { "type": type, "subject": subject, "data": data, "pep": pepCheck(type, data, subject, suggestions), "suggestions": suggestions }
        }).catch(error => {
            console.error(error)
            if (error === "TypeError") {
                console.log("502")
            }
            throw Error(error)
        })

}

export default fetchIt