import carsData from "./carsData";

/**
 * Mock api data fetch
 * @returns carsData
 */
export default function api() {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(carsData);
    }, 800);
  });
}
