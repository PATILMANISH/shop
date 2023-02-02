import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDk2MzM5MGU2ODNjNTVlMTA1MjEwNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Mjg5NzAzNiwiZXhwIjoxNjYzMTU2MjM2fQ.FtjTK8Fo7nwgUD6uqXfYCB_ybmlG3OqqkkrMj7bvK1s";

export const publicRequest = axios.create({ baseURL: BASE_URL });
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: { token: `Bearer ${TOKEN}` } },
});
