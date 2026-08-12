function string(key: string, fallback: string): string {
  const value = import.meta.env[key]
  return typeof value === "string" && value !== "" ? value : fallback
}

export const env = {
  API_URL: string("VITE_API_URL", "http://localhost:4000"),
  NODE_ENV: import.meta.env.MODE ?? "development",
}
