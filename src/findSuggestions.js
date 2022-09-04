function findSuggestions(type, data) {
    const suggestions = []
    if (type !== "person") {
        return suggestions
    }

    for (var i = 0; i < data.hits.length; i++) {
        let name = data.hits[i].name
        suggestions.push(name)
    }

    return suggestions;
}
export default findSuggestions;