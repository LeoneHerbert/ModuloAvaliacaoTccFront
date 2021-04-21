import axios from "axios";

const client = axios.create({
  // baseURL: "http://11.98.1.2:3333/",
  baseURL: "http://localhost:8081/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export { client };
