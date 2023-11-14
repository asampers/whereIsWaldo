// Takes an amount of milliseconds and returns a string similar to how a stopwatch would look.
export const clockify = (time) => {
  if (!time) {
    return;
  }

  if (typeof time !== "number") {
    console.error("Invalid time parameter.");
    return;
  }

  let mins = Math.floor((time / 60000) % 60);
  let secs = Math.floor((time / 1000) % 60);
  let millisecs = Math.round((time / 10) % 100);

  if (mins < 10) {
    mins = "0" + mins;
  }

  if (secs < 10) {
    secs = "0" + secs;
  }

  if (millisecs < 10) {
    millisecs = "0" + millisecs;
  }

  return `${mins}:${secs}:${millisecs}`;
};
