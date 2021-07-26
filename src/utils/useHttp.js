const API = "https://api.themoviedb.org/3"
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWUyNWE5MGFlNjM0OGEzZmEzYzViYjIyY2RiNDNmOCIsInN1YiI6IjYwZmViMGIyZjg1OTU4MDA2MTNhMTA2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KBMD521B5jtcLdIAyAluRNzrKSg2QfZOfJ0QavIrwvU"

export function get(path) {
  return fetch(API + path, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json;charset=utf-8"
      }
    })
      .then(res => res.json())
} 