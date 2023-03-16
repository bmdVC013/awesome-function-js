// Wait for a Certain Amount of Time
export const wait = async (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));
