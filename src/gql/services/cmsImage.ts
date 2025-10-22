export const CMS_URL = import.meta.env.PUBLIC_CMS_URL ?? "http://localhost:1337";

export function abs(path?: string | null): string {
  if (!path) return "";

  return path.startsWith("http") ? path : `${CMS_URL}${path}`;
}