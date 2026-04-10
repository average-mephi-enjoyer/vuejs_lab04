type Point = {
    x: number;
    y: number;
  };
  
function distance(x1: number, y1: number, x2: number, y2: number): number;
function distance(p1: Point, p2: Point): number;

function distance(xp1: number | Point, xp2: number | Point, y1?: number, y2?: number): number {
    if (typeof xp1 === "number" && typeof xp2 === "number" && y1 !== undefined && y2 !== undefined)
      return Math.sqrt(Math.pow(xp2 - xp1, 2) + Math.pow(y2 - y1, 2));
    if (typeof xp1 === "object" && typeof xp2 === "object")
      return Math.sqrt(Math.pow(xp2.x - xp1.x, 2) + Math.pow(xp2.y - xp1.y, 2));
    throw new Error("Invalid arguments");
  }
  
  console.log(distance(0, 0, 3, 4));
  
  let p1: Point = { x: 0, y: 0 };
  let p2: Point = { x: 3, y: 4 };
  console.log(distance(p1, p2));
  
  export {};

// Math.hypot() ??
