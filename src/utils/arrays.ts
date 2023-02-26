/** Array utility functions. */

export function pickRandom(arr: any): any {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array type");
  }

  return arr[Math.floor(Math.random() * arr.length)];
}
