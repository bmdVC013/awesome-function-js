// Count number of Occurences
export const countOccurrences = (arr, value) =>
  arr.reduce((a, v) => (v === value ? a + 1 : a), 0);

// Sort elements by Certain Property
export const sortBy = (arr, key) =>
  arr.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));

// Pluck Property from Array of Objects
export const pluck = (objs, key) => objs.map((obj) => obj[key]);

// Insert an Element at a Certain Position
export const insert = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice,
];
