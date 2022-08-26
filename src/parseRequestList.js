/*
*/
import Fetcher from "./Fetcher";

async function parseRequestList(list) {
    const elements = []
    console.log(list)
    for (let i = 0; i < list.length; i++) {
        const data = await Fetcher(list[i]).then(b => elements.push(b))
    }
    return elements
}
export default parseRequestList;