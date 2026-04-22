"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function distance(xp1, xp2, y1, y2) {
    if (typeof xp1 === "number" && typeof xp2 === "number" && y1 !== undefined && y2 !== undefined)
        return Math.sqrt(Math.pow(xp2 - xp1, 2) + Math.pow(y2 - y1, 2));
    if (typeof xp1 === "object" && typeof xp2 === "object")
        return Math.sqrt(Math.pow(xp2.x - xp1.x, 2) + Math.pow(xp2.y - xp1.y, 2));
    throw new Error("Invalid arguments");
}
console.log(distance(0, 0, 3, 4));
let p1 = { x: 0, y: 0 };
let p2 = { x: 3, y: 4 };
console.log(distance(p1, p2));

// Math.hypot() ??
