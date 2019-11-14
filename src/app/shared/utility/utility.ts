export function clone(data) {
    return JSON.parse(JSON.stringify(data)); 
}

export function parseAsDate(date: String) {
    return date.replace(/-/g, "/");
}