import axios from "axios";

const instance = axios.create({
  baseURL: "https://o.priceagain.com",
});

export default instance;
