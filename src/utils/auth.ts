export function isTokenExpired(token: string) {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const exp = payload.exp;

    if (!exp) return true;

    return Date.now() >= exp * 1000;
  } catch {
    return true;
  }
}
