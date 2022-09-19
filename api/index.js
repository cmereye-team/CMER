import http from "@/tools/request.js";

export function getList(data) {
  return http.get('/posts', data)
} 