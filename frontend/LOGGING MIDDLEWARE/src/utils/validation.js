
export function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function isValidInteger(val) {
  return /^\d+$/.test(val) && Number(val) > 0;
}
