export const CMS_URL = import.meta.env.PUBLIC_CMS_URL ?? "http://localhost:1337";

export function abs(path?: string | null): string | null {
  if (!path) return null;
  
  return path.startsWith("http") ? path : `${CMS_URL}${path}`;
}