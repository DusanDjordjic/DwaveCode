export default function timeSince(date) {
  const seconds = Math.floor((new Date().getTime() - date) / 1000);

  let interval = seconds / 31536000;
  if (interval >= 1) {
    if (interval >= 5) {
      return "pre " + Math.floor(interval) + " godina";
    }
    return "pre " + Math.floor(interval) + " godine";
  }

  interval = seconds / 2592000;
  if (interval >= 1) {
    if (interval >= 5) {
      return "pre " + Math.floor(interval) + " meseci";
    }
    if (interval < 2) {
      return "pre mesec dana";
    }
    return "pre " + Math.floor(interval) + " meseca";
  }

  interval = seconds / 86400;
  if (interval >= 1) {
    if (interval < 2) {
      return "pre jednog dana";
    }
    return "pre " + Math.floor(interval) + " dana";
  }

  interval = seconds / 3600;
  if (interval >= 1) {
    if (interval >= 5) {
      return "pre " + Math.floor(interval) + " sati";
    }
    if (interval < 2) {
      return "pre sat vremena";
    }
    return "pre " + Math.floor(interval) + " sata";
  }

  interval = seconds / 60;
  if (interval >= 1) {
    if (interval < 2) {
      return "pre minut";
    }
    return "pre " + Math.floor(interval) + " minuta";
  }

  if (interval >= 5) {
    return "pre " + Math.floor(interval) + " sekundi";
  }
  return "pre " + Math.floor(interval) + " sekunde";
}
