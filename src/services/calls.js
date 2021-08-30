/* eslint-disable @typescript-eslint/ban-types */
import instance from "./index";

const get = async (route, data) => {
  const response = await instance.get(route, {
    params: { ...data },
  });
  return response.data;
};

const post = async (route, data) => {
  const response = await instance.post(route, {
    ...data,
  });

  return response.data;
};

export { get, post };
