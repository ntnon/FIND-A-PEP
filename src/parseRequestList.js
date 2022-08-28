import Fetcher from "./Fetcher";

async function parseRequestList(list) {
    const elements = []
    console.log(list)
    for (let i = 0; i < list.length; i++) {
        let item = list[i]

        await Fetcher(item).then(b => {

            elements.push(b)
        })
    }
    return elements
}

export default parseRequestList;