// ** Import Schema
import { Ifish } from "@schema/Fish";

// ** Import Other
import axios from "axios";

const URL = process.env.API_URL;

const getFish = async (): Promise<Ifish[]> => {
  const res = await axios.get(URL as string);

  return res.data;
};

const getFishById = async (id: string | undefined): Promise<Ifish> => {
  const res = await axios.get(`${URL as string}/${id}`);

  return res.data;
};

const deleteFish = async (id: string | undefined) => {
  try {
    await axios.delete(`${URL as string}/${id}`);
  } catch (err) {
    console.log(err);
  }
};

const postFish = async (payload: Ifish) => {
  try {
    await axios.post(URL as string, payload);
  } catch (err) {
    console.log(err);
  }
};

const putFish = async (id: string | undefined, payload: Ifish) => {
  try {
    await axios.put(`${URL as string}/${id}`, payload);
  } catch (err) {
    console.log(err);
  }
};

export { getFish, getFishById, postFish, putFish, deleteFish };
