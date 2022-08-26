function Scheduler(subject) {
    const elements = []
    if (Number.isInteger(parseInt(subject))) { //I would think this could throw some sort of type error, but no. Though: beware
        elements.push({
            type: "roller",
            subject: subject,
            source: "https://code-challenge.stacc.dev/api/roller?orgNr=" + subject
        });
        elements.push({
            type: "enheter",
            subject: subject,
            source: "https://code-challenge.stacc.dev/api/enheter?orgNr=" + subject
        }
        );
    }
    else {
        elements.push({
            type: "person",
            subject: subject,
            source: "https://code-challenge.stacc.dev/api/pep?name=" + subject
        }
        );
    }

    return elements
}
export default Scheduler;