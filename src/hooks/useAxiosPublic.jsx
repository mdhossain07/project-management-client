import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://team-flow-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
