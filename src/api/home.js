import { instance } from "./axios/instance";

function HomeAPI() {
  const baseAPI = "";

  async function getHome(params) {
    try {
      const result = await instance.get(`${baseAPI}/`);

      return result.data || null;
    } catch (error) {
      console.log(error);
    }
  }

  async function postHome(params) {
    try {
      const result = await instance.post(`${baseAPI}/`, params);

      return result.data || null;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    getHome,
    postHome,
  };
}

export default HomeAPI();
