// /src/utils/shortcode.js

export function isValidShortcode(code) {
  return /^[a-zA-Z0-9]{4,12}$/.test(code); // Example: 4-12 alphanumeric chars
}

export function generateShortcode(existingCodes, length = 6) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code;
  do {
    code = Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  } while (existingCodes.has(code));
  return code;
}
