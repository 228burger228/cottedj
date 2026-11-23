/** Returns a public asset URL that respects Vite's base setting */
export function assetUrl(path) {
  const base = import.meta.env.BASE_URL;
  // path starts with '/' — trim it so we don't get double slash
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${clean}`;
}
