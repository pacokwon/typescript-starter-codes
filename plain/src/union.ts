// src/union.ts
function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number")
        return Array(padding + 1).join(' ') + value;

    return padding + value;
}


