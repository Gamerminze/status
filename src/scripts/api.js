import axios from "axios";
const config = {
  method: "get",
  url: "https://jannes-backend.herokuapp.com/uptimeRobot",
};

let request = () => {
  axios(config).catch((error) => console.log(error));
  return axios(config);
};

export { request };
