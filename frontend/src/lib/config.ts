// 默认走同源请求：开发环境由 Vite proxy 转发，生产环境由反向代理转发，
// 避免把 localhost 固化进前端产物导致远程访问时请求打到用户本机。
const DEFAULT_API_BASE_URL = typeof window === "undefined" ? "http://localhost:8000" : window.location.origin;

function stripTrailingSlash(value: string): string {
  return value.replace(/\/+$/, "");
}

function deriveWsBaseUrl(apiBaseUrl: string): string {
  if (import.meta.env.VITE_WS_BASE_URL) {
    return stripTrailingSlash(import.meta.env.VITE_WS_BASE_URL);
  }

  if (apiBaseUrl.startsWith("https://")) {
    return apiBaseUrl.replace(/^https:\/\//, "wss://");
  }

  if (apiBaseUrl.startsWith("http://")) {
    return apiBaseUrl.replace(/^http:\/\//, "ws://");
  }

  return `${window.location.protocol === "https:" ? "wss" : "ws"}://${window.location.host}`;
}

export const API_BASE_URL = stripTrailingSlash(
  import.meta.env.VITE_API_BASE_URL || DEFAULT_API_BASE_URL
);

export const WS_BASE_URL = deriveWsBaseUrl(API_BASE_URL);
