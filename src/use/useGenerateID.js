import RandExp from "randexp";
import { useSleep as sleep } from "./useSleep";

export const useGenerateID = async () => {
  await sleep(10);
  const regex = /^[0-9]{3}[A-Z]{3}[0-9]{2}$/;
  return new RandExp(regex).gen();
};
