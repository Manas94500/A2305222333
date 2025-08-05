const axios = require('axios');
const LOG_API_URL = 'http://20.244.56.144/evaluation-service/logs';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtYW5hczk0NTAwQGdtYWlsLmNvbSIsImV4cCI6MTc1NDM3NzY5OSwiaWF0IjoxNzU0Mzc2Nzk5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYmI3ZTYzYzAtZWI2Zi00N2I5LTg0N2MtYTRlY2NiZTBjZmU5IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibWFuYXMgc2luZ2giLCJzdWIiOiJiNmY5MDUyMC0wODI0LTRjMzYtOGY4Ni1jZjk1Y2UwMTZhNTcifSwiZW1haWwiOiJtYW5hczk0NTAwQGdtYWlsLmNvbSIsIm5hbWUiOiJtYW5hcyBzaW5naCIsInJvbGxObyI6ImEyMzA1MjIyMzMzIiwiYWNjZXNzQ29kZSI6Inl2aGRkYSIsImNsaWVudElEIjoiYjZmOTA1MjAtMDgyNC00YzM2LThmODYtY2Y5NWNlMDE2YTU3IiwiY2xpZW50U2VjcmV0IjoiQU1Oc3RFWEhzWGJ2aGVXWCJ9.j9Wp57b4Bop2j6xZ-veEBolv5l4dJUn22jeXNSzSRps';
/**
 * Sends a structured log to the remote logging service.
 * @param {("backend"|"frontend")} stack
 * @param {("debug"|"info"|"warn"|"error"|"fatal")} level
 * @param {string} pkg
 * @param {string} message
 */
async function Log(stack, level, pkg, message) {
  try {
    const logData = {
      stack: stack.toLowerCase(),
      level: level.toLowerCase(),
      package: pkg.toLowerCase(),
      message,
    };

    const headers = TOKEN
      ? { Authorization: Bearer ${TOKEN} }
      : {};

    // Send log to test server
    await axios.post(LOG_API_URL, logData, { headers });
  } catch (err) {
    // Fallback: log locally if remote fails
    console.error('Remote log failed:', err.message);
  }
}

module.exports=Log;