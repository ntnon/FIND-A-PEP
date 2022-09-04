/*
 * The goal of this function is twofold:
 * 1) Determine which API to use.
 * 2) create a list of all the API calls that must be made
 * @returns 
 */

/**
 * WARNING
 * WILL CAUSE INFINITE LOOP IF FETCHED DATA HAS A "NAVN" KEY WHOSE VALUE IS A 9 DIGIT NUMBER
 */
import fetchIt from "./fetcher";
import findNames from "./findNames";

function getData(subject) {

    const data = Scheduler(subject)
    return Promise.race([data])

}

async function Scheduler(subject) {
    const promises = []
    let todo = []
    if (Number.isInteger(parseInt(subject)) && subject.length === 9) { //I would think this could throw some sort of type error, but no. Though: beware
        const a = fetchIt("https://code-challenge.stacc.dev/api/enheter?orgNr=", subject, "enheter")
        const b = fetchIt("https://code-challenge.stacc.dev/api/roller?orgNr=", subject, "roller")
        const c = fetchIt("https://code-challenge.stacc.dev/api/roller?orgNr=", subject, "roller")
            .then(res => {
                return Promise.all(findNames(res).map(name =>
                    fetchIt("https://code-challenge.stacc.dev/api/pep?name=", name, "person")))
            })

        promises.push(a, b)
        todo = await c
        //todo: add elements of c to promises
    }
    else {
        const a = fetchIt("https://code-challenge.stacc.dev/api/pep?name=", subject, "person")
        promises.push(a)
    }


    return todo.concat(await Promise.all(promises))
}

export default getData;