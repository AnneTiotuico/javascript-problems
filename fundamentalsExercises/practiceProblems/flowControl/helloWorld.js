function capitalize(string) {
    if (string.length > 10) {
        return string.toUpperCase();
    } else {
        return  string;
    }
}

console.log(capitalize('hello world'));
console.log(capitalize('goodbye'));